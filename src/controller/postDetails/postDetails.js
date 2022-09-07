const { getPostQuery } = require('../../database/queries');

const getPost = (req, res) => {
  const { id } = req.params;
  getPostQuery(id).then((data) => {
    res.send(data.rows);
  });
};
module.exports = getPost;
