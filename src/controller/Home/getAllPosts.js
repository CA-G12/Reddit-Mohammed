/* eslint-disable no-plusplus */
const { getAllPostsQuery, getPostVotedByAuthUser } = require('../../database/queries');

const getAllPosts = (req, res) => {
  const { id } = req.token;
  getAllPostsQuery().then((data) => {
    const allPosts = data.rows;
    getPostVotedByAuthUser(id).then((result) => {
      const votedPost = result.rows;
      for (let i = 0; i < allPosts.length; i++) {
        for (let j = 0; j < votedPost.length; j++) {
          if (allPosts[i].post_id === votedPost[j].post_id) {
            if (votedPost[j].vote === 1) {
              allPosts[i].voted = 1;
            } else if (votedPost[j].vote === -1) {
              allPosts[i].voted = -1;
            } else {
              allPosts[i].voted = 0;
            }
          }
        }
      }
      return allPosts;
    }).then((result) => res.send(result));
  }).catch((err) => console.log(err));
};
module.exports = getAllPosts;
