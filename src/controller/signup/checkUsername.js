const { checkUsernameQuery } = require('../../database/queries');

const checkUsername = (req, res) => {
  const { username } = req.body;
  checkUsernameQuery(username).then((data) => {
    if (data.rowCount > 0) {
      res.json({ massage: true }); // is already taken
    } else {
      res.json({ massage: false });
    }
  });
};
module.exports = checkUsername;
