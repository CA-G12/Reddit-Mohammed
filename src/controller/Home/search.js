const { searchQuery } = require('../../database/queries');

const search = (req, res) => {
  const { value } = req.params;

  searchQuery(value).then((data) => {
    res.send(data.rows);
  });
};
module.exports = search;
