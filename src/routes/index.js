const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const {
  signup, checkUsername, checkUserEmail, login,
  checkUserAuth, getAllPosts, createPost, getPost,
  getComments, getUserPosts, handleVote,
  logout, updateBio, deletePost,
  getBio, addComment,
  search,
} = require('../controller');

// Home
router.get('/checkUserAuth', verifyToken, checkUserAuth);
router.get('/posts', verifyToken, getAllPosts);
router.post('/post', verifyToken, createPost);
router.get('/search/:value', search);
// votes
router.post('/vote/add', verifyToken, handleVote);

// signUp
router.post('/email', checkUserEmail);
router.post('/username', checkUsername);
router.post('/signup', signup);
// Login
router.post('/login', login);

// logout
router.get('/logout', logout);

// PostDetails
router.get('/post/:id', getPost);
router.delete('/post/delete/:postId', deletePost);
router.get('/comments/:id', getComments);
router.post('/comment/add', verifyToken, addComment);
// Profile
router.get('/user/posts/:id?', verifyToken, getUserPosts);// 1
router.put('/user/bio', verifyToken, updateBio);
router.get('/user/bio', verifyToken, getBio);

module.exports = router;
