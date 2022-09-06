require('env2')('.env');
const jwt = require('jsonwebtoken');

const generateToken = (id) => new Promise((res, rej) => {
  jwt.sign({ id }, process.env.secret, (err, token) => {
    if (err) {
      rej(err);
    } else {
      res(token);
    }
  });
});
module.exports = generateToken;
