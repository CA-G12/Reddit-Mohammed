const connection = require('../config/connection');

const getUserPostsQuery = (id) => connection.query(`
with number_posts as(
    select count(*) from 
    posts where user_id = $1)
    select id,title, content , image,
    sum((select * from number_posts )) as number_of_posts,
    to_char(created_at,'YYYY-MM-DD at HH:MI:SS AM')
    from posts where user_id = $1 GROUP by id`, [id]);

const getUserQuery = (id) => connection.query(`select * from users 
where id = $1`, [id]);

const updateBioQuery = (id, bio) => connection.query(`update users
 set about = $1 where id = $2 ;`, [bio, id]);

const updateImageQuery = (id, path) => connection.query(`
update users set image = $1 , has_image = true where id = $2 returning image`, [path, id]);
module.exports = {
  getUserPostsQuery,
  getUserQuery,
  updateBioQuery,
  updateImageQuery,
};
