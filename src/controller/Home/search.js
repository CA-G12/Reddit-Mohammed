const { searchQuery } = require('../../database/queries');

const search = (req, res) => {
  const { value } = req.params;
  if (req.token.id) {
    searchQuery(value).then((data) => {
      res.send(data.rows);
    });
  } else {
    res.json('You have to login to search');
  }
};
module.exports = search;
