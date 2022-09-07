const checkUserAuth = (req, res) => {
  if (!req.token) {
    res.json({ massage: false });
  } else {
    res.json({ massage: true });
  }
};

module.exports = checkUserAuth;
