const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
  host: 'sql3.freemysqlhosting.net',
    user: 'sql3331105',
    password: 'pv2N2YFhn6',
    database: 'sql3331105'

    });
}