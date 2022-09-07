const connection = require('../config/connection');

const getUserPostsQuery = (id) => connection.query(`with number_posts as(
     select count(*) from 
     posts join users  on users.id = posts.user_id 
     where posts.user_id = $1)
     select  p.id as post_id, sum((select * from number_posts )) as numberOfPosts,
     p.title ,p.content,to_char(p.created_at,'D-Month-YYYY at hh12-mi- AM') as Curr_date, 
     u.id as userId,u.username,u.image as userImage,u.about
     from posts as p join users as u 
     on u.id = p.user_id where p.user_id = $1  group by p.id,u.id ;`, [id]);
module.exports = getUserPostsQuery;
