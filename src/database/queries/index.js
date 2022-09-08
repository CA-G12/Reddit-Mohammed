const { checkEmailQuery, addUserQuery, checkUsernameQuery } = require('./signupQuery');

const loginQuery = require('./loginQuery');

const {
  getAllPostsQuery, createPostQuery, getVoteQuery, addVoteQuery, updateVoteQuery,
  getVoteSum, getPostVotedByAuthUser,
} = require('./HomePageQueries');

const { getPostQuery, getCommentsQuery } = require('./postDetails');

const getUserPostsQuery = require('./profile');

module.exports = {
  checkEmailQuery,
  addUserQuery,
  checkUsernameQuery,
  loginQuery,
  getAllPostsQuery,
  createPostQuery,
  getPostQuery,
  getCommentsQuery,
  getUserPostsQuery,
  getVoteQuery,
  addVoteQuery,
  updateVoteQuery,
  getVoteSum,
  getPostVotedByAuthUser,
};
