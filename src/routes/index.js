const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const {
  signup, checkUsername, checkUserEmail, login,
  checkUserAuth, getAllPosts, createPost, getPost, getComments, getUserPosts,
} = require('../controller');

// Home
router.get('/checkUserAuth', verifyToken, checkUserAuth);
router.get('/posts', getAllPosts);
router.post('/post', verifyToken, createPost);

// signUp
router.post('/email', checkUserEmail);
router.post('/username', checkUsername);
router.post('/signup', signup);
// Login
router.post('/login', login);

// PostDetails
router.get('/post/:id', getPost);
router.get('/comments/:id', getComments);

// Profile
router.get('/user/posts/:id?', verifyToken, getUserPosts);

module.exports = router;
