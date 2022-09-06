const bcrypt = require('bcryptjs');

const { loginQuery } = require('../../database/queries');
const generateToken = require('../modules/generateToken');
const { CustomError } = require('../../../errors');
const { loginValidation } = require('../modules/Validation');

const login = (req, res) => {
  const { email, password } = req.body;
  loginValidation(email, password).then(() => loginQuery(email))
    .then((result) => {
      if (result.rowCount === 0) {
        throw new CustomError('Password or username are not correct ', 400);
      }

      const hashed = result.rows[0].password;
      return bcrypt.compare(password, hashed);
    })
    .then((data) => {
      if (!data) throw new CustomError('Password or username are not correct ', 400);
      return generateToken();
    })
    .then((token) => res.cookie('token', token, { httpOnly: true, secure: true }).json({ path: '../index.html' }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({
          message: err.message,
        });
      }
      res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
    });
};

module.exports = login;
