const { createPostQuery } = require('../../database/queries');

const createPost = (req, res) => {
  const { id } = req.token;
  const { title, content, image } = req.body;
  createPostQuery(title, content, image, id).then((post) => res.send(post.rows));
};
module.exports = createPost;
