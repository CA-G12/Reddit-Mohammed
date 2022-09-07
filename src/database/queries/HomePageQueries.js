const connection = require('../config/connection');

const getAllPostsQuery = () => connection.query(`SELECT u.id as user_id,u.username , u.image as userImage 
, p.id as post_id, p.title ,p.content,  
to_char(p.created_at,'D-Month-YYYY') as Curr_date, 
to_char(p.created_at,'hh12:mi- AM') as Curr_time,
count(v.post_id) as votes
from users as u join posts as p on u.id = p.user_id 
left join votes as v on v.post_id = p.id
GROUP by v.post_id,u.id,p.id order by count(v.post_id) desc; `);

const createPostQuery = (title, content, image, userId) => connection.query(`insert into posts 
(title,content,image,user_id,community_id)
values ($1,$2,$3,$4,$5) returning *`, [title, content, image, userId, 1]);
module.exports = { getAllPostsQuery, createPostQuery };
