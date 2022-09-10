const { getCommentsQuery } = require('../../database/queries');

const getComments = (req, res) => {
  const { id } = req.params;
  getCommentsQuery(id).then((data) => {
    res.send(data.rows);
  });
};
module.exports = getComments;
