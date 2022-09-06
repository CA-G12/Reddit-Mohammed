const path = require('path');

class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const userError = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
};

const serverError = (err, req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'public', '500.html'));
};

module.exports = {
  userError,
  serverError,
  CustomError,
};
