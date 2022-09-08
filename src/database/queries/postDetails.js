const connection = require('../config/connection');

const getPostQuery = (id) => connection.query(`select p.id as post_id,
 p.title, p.image as postImage ,p.content,to_char(p.created_at,'D-Month-YYYY at hh12-mi- AM') as Curr_date, 
 u.id as userId,u.username,u.image as userImage
from posts as p join users as u on u.id = p.user_id where p.id = $1 `, [id]);

const getCommentsQuery = (id) => connection.query(`select c.content as commentContent,
   u.id as userId, u.id as userId,u.username,u.image as userImage 
   from comments as c join users as u 
   on c.user_id = u.id where c.post_id = $1`, [id]);

module.exports = { getPostQuery, getCommentsQuery };
