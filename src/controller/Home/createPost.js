const { createPostQuery } = require('../../database/queries');

const createPost = (req, res) => {
  const { id } = req.token;
  let fileUrl = '';
  if (req.fileUrl) fileUrl = req.fileUrl;

  const { title, content } = req.body;
  createPostQuery(title, content, fileUrl, id).then((post) => res.send(post.rows));
};
module.exports = createPost;
