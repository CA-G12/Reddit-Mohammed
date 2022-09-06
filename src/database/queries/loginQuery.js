const connection = require('../config/connection');

const loginQuery = (email) => connection.query(`select id,email,password from users 
where email = $1 `, [email]);

module.exports = loginQuery;
