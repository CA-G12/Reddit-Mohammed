const { deletePostQuery } = require('../../database/queries');

const deletePost = (req, res) => {
  const { postId } = req.params;
  deletePostQuery(postId).then(() => res.json({ massage: 'Post deleted Successfully' }));
};
module.exports = deletePost;
