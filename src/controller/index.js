const signup = require('./signup/signup');
const checkUsername = require('./signup/checkUsername');
const checkUserEmail = require('./signup/checkUserEmail');

const login = require('./login/login');
const checkUserAuth = require('./userAuth');

const logout = require('./Home/logout');

const getAllPosts = require('./Home/getAllPosts');
const createPost = require('./Home/createPost');
const updatePost = require('./Home/updatePost');
const handleVote = require('./Home/votes/handleVote');
const search = require('./Home/search');

const getPost = require('./postDetails/postDetails');
const deletePost = require('./postDetails/deletePost');
const getComments = require('./postDetails/getComments');
const addComment = require('./postDetails/addComment');

const getUserPosts = require('./profile&bio/profile');
const updateBio = require('./profile&bio/updateBio');
const getBio = require('./profile&bio/getBio');
const handleFile = require('./profile&bio/uploadImage');

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
  handleVote,
  logout,
  deletePost,
  updateBio,
  getBio,
  addComment,
  search,
  handleFile,
  updatePost,
};
