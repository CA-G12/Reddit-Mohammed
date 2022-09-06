const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const {
  signup, checkUsername, checkUserEmail, sendSignupPage, login, sendLoginPage,
  checkUserAuth,
} = require('../controller');

router.get('/checkUserAuth', verifyToken, checkUserAuth);
// signUp
router.get('/signup', sendSignupPage);
router.post('/email', checkUserEmail);
router.post('/username', checkUsername);
router.post('/signup', signup);
// Login
router.get('/login', sendLoginPage);
router.post('/login', login);
module.exports = router;
