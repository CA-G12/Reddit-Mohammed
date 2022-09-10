const { updatePostQuery } = require('../../database/queries');

const updatePost = (req, res) => {
  const { id } = req.token;
  const postId = req.params.id;
  const { title, content, image } = req.body;
  updatePostQuery(title, content, image, id, postId).then((data) => {
    res.json(data.rows[0]);
  });
};
module.exports = updatePost;
