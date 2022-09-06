const { join } = require('path');

const sendLoginPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'pages', 'login.html'));
};

module.exports = sendLoginPage;
