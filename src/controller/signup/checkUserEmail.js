const { checkEmailQuery } = require('../../database/queries');

const checkUserEmail = (req, res) => {
  const { email } = req.body;
  checkEmailQuery(email).then((data) => {
    if (data.rowCount > 0) {
      res.json({ massage: true }); // is already taken
    } else {
      res.json({ massage: false });
    }
  });
};
module.exports = checkUserEmail;
