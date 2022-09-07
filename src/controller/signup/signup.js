require('env2')('.env');
const bcrypt = require('bcryptjs');
const { CustomError } = require('../../../errors');

const { checkEmailQuery, addUserQuery } = require('../../database/queries');
const { signupValidation } = require('../modules/Validation');
const createToken = require('../modules/generateToken');

const signup = (req, res) => {
  const {
    email, username, password, confirmPassword,
  } = req.body;

  signupValidation(email, username, password, confirmPassword)
    .then(() => checkEmailQuery(email))
    .then((data) => {
      if (data.rowCount > 0) throw new CustomError('Email already exists', 400);
      else return bcrypt.hash(password, 10);
    })
    .then((hashedPassword) => addUserQuery(email, username, hashedPassword))
    .then((result) => {
      const user = result.rows[0];
      return createToken(user.id);
    })
    .then((token) => {
      res.cookie('token', token, { httpOnly: true, secure: true }).json({ path: '../index.html' });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({
          message: err.message,
        });
      }
      res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
    });
};

module.exports = signup;
