const { updatePostQuery } = require('../../database/queries');

const updatePost = (req, res) => {
  const { id } = req.token;
  const postId = req.params.id;
  let fileUrl = '';
  if (req.fileUrl) fileUrl = req.fileUrl;
  const { title, content } = req.body;
  updatePostQuery(title, content, fileUrl, id, postId).then((data) => {
    res.json(data.rows[0]);
  });
};
module.exports = updatePost;
