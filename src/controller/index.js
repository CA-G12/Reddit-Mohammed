const signup = require('./signup/signup');
const checkUsername = require('./signup/checkUsername');
const checkUserEmail = require('./signup/checkUserEmail');
const login = require('./login/login');
const sendSignupPage = require('./signup/sendSignup');
const sendLoginPage = require('./login/sendLoginPage');
const checkUserAuth = require('./userAuth');

module.exports = {
  signup,
  checkUsername,
  checkUserEmail,
  sendSignupPage,
  login,
  sendLoginPage,
  checkUserAuth,
};
