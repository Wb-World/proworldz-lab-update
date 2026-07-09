const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST || 'db.qqahllaidvbsccvenydb.supabase.co',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME || 'postgres',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'secureworldzacademy',
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:secureworldzacademy@db.qqahllaidvbsccvenydb.supabase.co:5432/postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

async function ensureDefaultUser() {
  const email = 'mohamedhathim628@gmail.com';
  const plainPassword = 'mohamed@123';
  
  try {
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    
    // Check app_users
    const usersRes = await pool.query('SELECT * FROM app_users WHERE email = $1 LIMIT 1', [email]);
    if (usersRes.rows.length === 0) {
      console.log(`[DB INIT] Default user ${email} not found in app_users. Creating...`);
      const query = `INSERT INTO app_users (id, name, gender, phone, email, passw, access, eagle_coins, assignments, waiting_assigns, "Avatars") 
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
      await pool.query(query, [
        'PWZ-210', 'Mohamed', 'Male', '9876543210', email, hashedPassword, 'true', 200, 
        '{"status":"Active","level":"Beginner"}', '[]', '["Aegis hawk","Cyber Eaglone","Code Eaglone"]'
      ]);
      console.log(`[DB INIT] Default user ${email} created.`);
    } else {
      const user = usersRes.rows[0];
      const isCorrectHash = await bcrypt.compare(plainPassword, user.passw).catch(() => false);
      if (!isCorrectHash) {
        console.log(`[DB INIT] Updating password hash for ${email} in app_users...`);
        await pool.query('UPDATE app_users SET passw = $1 WHERE email = $2', [hashedPassword, email]);
      }
    }
  } catch (err) {
    console.error('[DB INIT] Error checking/creating default user in app_users:', err.message);
  }

  try {
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    
    // Check admins
    const adminsRes = await pool.query('SELECT * FROM admins WHERE username = $1 LIMIT 1', [email]);
    if (adminsRes.rows.length === 0) {
      console.log(`[DB INIT] Creating default admin ${email} in admins...`);
      await pool.query('INSERT INTO admins (username, password, role) VALUES ($1, $2, $3)', [email, hashedPassword, 'admin']);
      console.log(`[DB INIT] Default admin ${email} created.`);
    } else {
      const admin = adminsRes.rows[0];
      const isCorrectHash = await bcrypt.compare(plainPassword, admin.password).catch(() => false);
      if (!isCorrectHash) {
        console.log(`[DB INIT] Updating password hash for admin ${email} in admins...`);
        await pool.query('UPDATE admins SET password = $1 WHERE username = $2', [hashedPassword, email]);
      }
    }
  } catch (err) {
    console.error('[DB INIT] Error checking/creating default admin in admins:', err.message);
  }
}

// Run the initialization check asynchronously
ensureDefaultUser().catch(console.error);

module.exports = {
  query: async (text, params) => {
    const res = await pool.query(text, params);
    const result = [res.rows, res.fields];
    result.rows = res.rows;
    return result;
  },
  pool
};
