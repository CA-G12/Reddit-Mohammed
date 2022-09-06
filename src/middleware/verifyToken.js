const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.secret, (err, decode) => {
    if (err) {
      req.token = false;
      next();
    } else {
      req.token = decode;
      next();
    }
  });
};
module.exports = verifyToken;
