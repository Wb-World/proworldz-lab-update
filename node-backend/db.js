const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'sql204.infinityfree.com',
  user: process.env.DB_USER || 'if0_40322633',
  password: process.env.DB_PASSWORD || 'HDm584vG4kZDnt',
  database: process.env.DB_NAME || 'if0_40322633_students',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
