const { createPostQuery } = require('../../database/queries');

const createPost = (req, res) => {
  const { id } = req.token;
  let fileName = '';
  if (req.file) fileName = req.file.filename;

  const { title, content } = req.body;
  createPostQuery(title, content, fileName, id).then((post) => res.send(post.rows));
};
module.exports = createPost;
