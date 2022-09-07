const signup = require('./signup/signup');
const checkUsername = require('./signup/checkUsername');
const checkUserEmail = require('./signup/checkUserEmail');

const login = require('./login/login');
const checkUserAuth = require('./userAuth');

const getAllPosts = require('./Home/getAllPosts');
const createPost = require('./Home/createPost');

const getPost = require('./postDetails/postDetails');
const getComments = require('./postDetails/getComments');

const getUserPosts = require('./profile');

module.exports = {
  signup,
  checkUsername,
  checkUserEmail,
  login,
  checkUserAuth,
  getAllPosts,
  createPost,
  getPost,
  getComments,
  getUserPosts,
};
