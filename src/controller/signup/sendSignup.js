const { join } = require('path');

const sendSignupPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'pages', 'signup.html'));
};
module.exports = sendSignupPage;
