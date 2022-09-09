const { addCommentQuery, getCommentsQuery } = require('../../database/queries');

const addComment = (req, res) => {
  const { id } = req.token;
  const { comment, postId } = req.body;

  addCommentQuery(id, postId, comment).then(() => getCommentsQuery(postId).then((data) => {
    res.send(data.rows);
  }));
};
module.exports = addComment;
