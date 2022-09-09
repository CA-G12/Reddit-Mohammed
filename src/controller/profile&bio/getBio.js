const { getUserQuery } = require('../../database/queries');

const getBio = (req, res) => {
  const { id } = req.token;
  getUserQuery(id).then((data) => res.json({ user: data.rows }));
};
module.exports = getBio;
