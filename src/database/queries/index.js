const { checkEmailQuery, addUserQuery, checkUsernameQuery } = require('./signupQuery');

const loginQuery = require('./loginQuery');

const {
  getAllPostsQuery, createPostQuery, getVoteQuery,
  addVoteQuery, updateVoteQuery,
  getVoteSum, getPostVotedByAuthUser, searchQuery,
  updatePostQuery,
} = require('./HomePageQueries');

const {
  getPostQuery, getCommentsQuery, deletePostQuery, addCommentQuery,
} = require('./postDetails');

const {
  getUserPostsQuery, getUserQuery,
  updateBioQuery, updateImageQuery,
} = require('./profile');

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
  deletePostQuery,
  getUserQuery,
  updateBioQuery,
  addCommentQuery,
  searchQuery,
  updateImageQuery,
  updatePostQuery,
};
