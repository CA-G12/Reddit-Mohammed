const connection = require('../config/connection');

const getAllPostsQuery = () => connection.query(`SELECT u.id as user_id,u.username , u.image as userImage 
, p.id as post_id, p.title ,p.content, p.image as postImage,  
to_char(p.created_at,'D-Month-YYYY at hh12:mi- AM') as Curr_date, 
coalesce (sum(v.vote),0) as total_votes
from users as u join posts as p on u.id = p.user_id 
left join votes as v on v.post_id = p.id
GROUP by v.post_id,u.id,p.id order by coalesce (sum(v.vote),0) desc; `);

const getPostVotedByAuthUser = (userId) => connection.query(`select user_id, post_id,vote 
from votes WHERE user_id = $1 ;`, [userId]);

const createPostQuery = (title, content, image, userId) => connection.query(`insert into posts 
(title,content,image,user_id,community_id)
values ($1,$2,$3,$4,$5) returning *`, [title, content, image, userId, 1]);

const searchQuery = (searchValue) => connection.query(
  `select u.username, u.id as user_id , p.title, p.id  as post_id
from users as u join posts as p on p.user_id = u.id
where lower(u.username) like lower('%${searchValue}%')
or  lower(p.title) like lower('%${searchValue}%');`,
);

// votes
const getVoteQuery = (userId, postId) => connection.query(`select * from votes 
where user_id = $1 and  post_id = $2`, [userId, postId]);

const addVoteQuery = (userId, postId, voteValue) => connection.query(`insert into votes (user_id, post_id,vote) 
values ($1,$2,$3) returning *`, [userId, postId, voteValue]);

const updateVoteQuery = (userId, postId, value) => connection.query(`
UPDATE votes set vote = (select vote + $1 from votes where post_id = $2 and user_id = $3) WHERE
 post_id = $2 and user_id =$3 returning vote
 ;`, [value, postId, userId]);

const getVoteSum = (postId) => connection.query(`select sum(vote) as totalVotes 
from votes where post_id = $1 
group by post_id`, [postId]);
module.exports = {
  getAllPostsQuery,
  getPostVotedByAuthUser,
  createPostQuery,
  getVoteQuery,
  addVoteQuery,
  updateVoteQuery,
  getVoteSum,
  searchQuery,
};
