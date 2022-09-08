const {
  getVoteQuery, addVoteQuery, updateVoteQuery,
} = require('../../../database/queries');

const handleVote = (req, res) => {
  const { postId, voteValue } = req.body;
  const { id } = req.token;

  getVoteQuery(id, postId)
    .then((data) => {
      if (data.rows.length === 0) {
        addVoteQuery(id, postId, voteValue)
          .then((result) => res.json(result.rows[0].vote));
      } else if (data.rows[0].vote !== (+voteValue)) {
        updateVoteQuery(id, postId, voteValue)
          .then(() => getVoteQuery(id, postId)).then((result) => res.json(result.rows[0].vote));
      } else {
        res.json('false');
      }
    });
};
module.exports = handleVote;
