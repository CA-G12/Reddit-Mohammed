const { getUserPostsQuery, getUserQuery } = require('../../database/queries');

const getUserPosts = (req, res) => {
  const { id } = req.params;
  if (id) {
    getUserQuery(id).then((user) => {
      getUserPostsQuery(id).then((posts) => posts.rows)
        .then((posts) => res.json({ user: user.rows, posts }));
    });
  } else {
    const idToken = req.token.id;

    if (idToken) {
      getUserQuery(idToken).then((user) => {
        getUserPostsQuery(idToken).then((posts) => posts.rows)
          .then((posts) => res.json({ user: user.rows, posts }));
      });
    } else res.send('Not authorize');
  }
};

module.exports = getUserPosts;
