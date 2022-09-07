const { checkEmailQuery, addUserQuery, checkUsernameQuery } = require('./signupQuery');
const loginQuery = require('./loginQuery');
const { getAllPostsQuery, createPostQuery } = require('./HomePageQueries');
const { getPostQuery, getCommentsQuery } = require('./postDetails');

module.exports = {
  checkEmailQuery,
  addUserQuery,
  checkUsernameQuery,
  loginQuery,
  getAllPostsQuery,
  createPostQuery,
  getPostQuery,
  getCommentsQuery,
};
