const { getUserPostsQuery } = require('../database/queries');

const getUserPosts = (req, res) => {
  const { id } = req.params;
  if (id) {
    getUserPostsQuery(id).then((data) => data.rows).then((data) => res.send(data));
  } else {
    const idToken = req.token.id;
    getUserPostsQuery(idToken).then((data) => data.rows).then((data) => res.send(data));
  }
};

module.exports = getUserPosts;
