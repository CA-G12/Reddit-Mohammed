const { createPostQuery } = require('../../database/queries');

const createPost = (req, res) => {
  const { id } = req.token;
  if (id) {
    const { title, content, image } = req.body;
    createPostQuery(title, content, image, id).then((post) => res.send(post.rows));
  } else {
    res.json({ massage: 'Not authorize users can not post and comment' });
  }
};
module.exports = createPost;
