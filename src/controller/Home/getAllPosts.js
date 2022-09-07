const { getAllPostsQuery } = require('../../database/queries');

const getAllPosts = (req, res) => {
  getAllPostsQuery().then((data) => data.rows).then((data) => res.send(data));
};
module.exports = getAllPosts;
