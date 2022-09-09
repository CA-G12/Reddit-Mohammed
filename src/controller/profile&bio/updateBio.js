const { updateBioQuery } = require('../../database/queries');

const updateBio = (req, res) => {
  const { id } = req.token;
  const { bioValue } = req.body;

  updateBioQuery(id, bioValue).then(() => res.json({ massage: 'bio updated Successfully' }));
};
module.exports = updateBio;
