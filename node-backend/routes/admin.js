const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');

// In a real app we'd use JWT or sessions. 
// Since this is an API, we should mock session state or implement JWT.
// For the sake of matching the PHP behavior without complex session handling:

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ success: false, message: 'Username and password are required' });
  }

  try {
    const [rows] = await db.query('SELECT * FROM admins WHERE username = $1 LIMIT 1', [username]);
    if (rows.length > 0) {
      const admin = rows[0];
      // Note: original PHP checked plain password for existing admin unless it was hashed?
      // Wait, original PHP had `if ($password == $admin['password'])` then when adding admin it did `password_hash()`.
      // Let's support both for compatibility:
      const isValid = (password === admin.password) || (await bcrypt.compare(password, admin.password).catch(() => false));
      
      if (isValid) {
        return res.json({ success: true, role: admin.role, username: admin.username });
      }
    }
    return res.json({ success: false, message: 'Invalid username or password' });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: 'Database error' });
  }
});

router.get('/students', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, name, email, phone, gender, address, mother_name, mother_phone, father_name, father_phone, dob, course, eagle_coins, assignments, assigns_complete, waiting_assigns, IPADDR, passw, access FROM app_users ORDER BY id DESC');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Database error' });
  }
});

router.post('/students', async (req, res) => {
  const {
    id, name, email, dob, gender, phone, address, mother_name, mother_phone, father_name, father_phone, course,
    eagle_coins = 0, assignments = '[]', assigns_complete = 0, waiting_assigns = '[]', access = 'false'
  } = req.body;

  if (!id || !name || !email) {
    return res.json({ success: false, message: 'ID, name, and email are required' });
  }

  const password = "TEMP_PASS_" + Math.random().toString(36).substring(2, 8);

  try {
    const [existing] = await db.query('SELECT id FROM app_users WHERE email = $1 LIMIT 1', [email]);
    if (existing.length > 0) {
      return res.json({ success: false, message: 'Email already exists' });
    }

    const query = `INSERT INTO app_users (id, name, gender, phone, address, mother_name, mother_phone, father_name, father_phone, email, dob, passw, eagle_coins, assignments, course, assigns_complete, waiting_assigns, access) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)`;
    const values = [id, name, gender, phone, address, mother_name, mother_phone, father_name, father_phone, email, dob, password, eagle_coins, assignments, course, assigns_complete, waiting_assigns, access];
    
    await db.query(query, values);
    res.json({ success: true, message: 'Student added successfully' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Database error' });
  }
});

router.put('/students/:id', async (req, res) => {
  const student_id = req.params.id;
  const {
    name, email, dob, gender, phone, address, mother_name, mother_phone, father_name, father_phone, course,
    eagle_coins = 0, assignments = '[]', assigns_complete = 0, waiting_assigns = '[]', access = 'false'
  } = req.body;

  try {
    const query = `UPDATE app_users SET name=$1, gender=$2, phone=$3, address=$4, mother_name=$5, mother_phone=$6, father_name=$7, father_phone=$8, email=$9, dob=$10, course=$11, eagle_coins=$12, assignments=$13, assigns_complete=$14, waiting_assigns=$15, access=$16 WHERE id=$17`;
    const values = [name, gender, phone, address, mother_name, mother_phone, father_name, father_phone, email, dob, course, eagle_coins, assignments, assigns_complete, waiting_assigns, access, student_id];
    
    await db.query(query, values);
    res.json({ success: true, message: 'Student updated successfully' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Database error' });
  }
});

router.delete('/students/:id', async (req, res) => {
  const student_id = req.params.id;
  try {
    await db.query('DELETE FROM app_users WHERE id=$1', [student_id]);
    res.json({ success: true, message: 'Student deleted successfully' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Database error' });
  }
});

router.get('/admins', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT username, role FROM admins ORDER BY username');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Database error' });
  }
});

router.post('/admins', async (req, res) => {
  const { username, password, role = 'admin' } = req.body;
  if (!username || !password) {
    return res.json({ success: false, message: 'Username and password are required' });
  }

  try {
    const [existing] = await db.query('SELECT username FROM admins WHERE username = $1 LIMIT 1', [username]);
    if (existing.length > 0) {
      return res.json({ success: false, message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query('INSERT INTO admins (username, password, role) VALUES ($1, $2, $3)', [username, hashedPassword, role]);
    
    res.json({ success: true, message: 'Admin created successfully' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Database error' });
  }
});

router.delete('/admins/:username', async (req, res) => {
  const username = req.params.username;
  try {
    await db.query("DELETE FROM admins WHERE username=$1 AND role='admin'", [username]);
    res.json({ success: true, message: 'Admin deleted successfully' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Database error' });
  }
});

module.exports = router;
