const { getCommentsQuery } = require('../../database/queries');

const getComments = (req, res) => {
  const { id } = req.params;
  getCommentsQuery(id).then((data) => {
    console.log(data.rows);
    res.send(data.rows);
  });
};
module.exports = getComments;
