const connection = require('../config/connection');

const checkEmailQuery = (email) => connection.query('select email from users where email = $1 ;', [email]);

const addUserQuery = (email, username, password) => connection.query(`
insert into users (email, username, password)
values($1, $2, $3) returning  *`, [email, username, password]);

const checkUsernameQuery = (username) => connection.query('select username from users where username = $1 ', [username]);

module.exports = { checkEmailQuery, addUserQuery, checkUsernameQuery };
