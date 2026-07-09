const express = require('express');
const router = express.Router();
const db = require('../db');

// Basic mockup of the tasks API
router.get('/tasks', async (req, res) => {
  // Originally this fetched from tasksdb and users' completed array
  try {
    const [rows] = await db.query('SELECT tasks FROM tasksdb');
    let all_tasks = [];
    let unique_titles = {};
    
    rows.forEach(row => {
      if (row.tasks) {
        try {
          const tasksArr = JSON.parse(row.tasks);
          tasksArr.forEach(task => {
            const title = task.title || task.name || (typeof task === 'string' ? task : '');
            if (title && !unique_titles[title]) {
              unique_titles[title] = true;
              all_tasks.push(task);
            }
          });
        } catch (e) {}
      }
    });

    res.json({
      status: {
        tasks: JSON.stringify(all_tasks),
        completed: '[]',
        description: 'Interactive challenge.'
      }
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Database error' });
  }
});

const bcrypt = require('bcryptjs');

// Real Database Student Login
router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  console.log(`[AUTH LOG] Student login attempt for email: "${email}"`);
  
  if (!email || !password) {
    console.log('[AUTH LOG] Login failed: Email or password not provided in request body.');
    return res.json({ success: false, message: 'Email and password are required' });
  }

  try {
    const [rows] = await db.query('SELECT * FROM app_users WHERE email = $1 LIMIT 1', [email]);
    if (rows.length === 0) {
      console.log(`[AUTH LOG] Login failed: User email "${email}" not found in database.`);
      return res.json({ success: false, message: 'Invalid credentials. Please try again.' });
    }

    const user = rows[0];
    
    // Check password using bcrypt.compare(), with plain text fallback
    const isBcryptMatch = await bcrypt.compare(password, user.passw).catch(() => false);
    const isPlainMatch = (password === user.passw);
    const isValid = isBcryptMatch || isPlainMatch;

    if (isValid) {
      console.log(`[AUTH LOG] Login success: Password matched for user "${email}".`);
      
      // Generate a mock JWT / Session Token
      const token = 'jwt-session-token-' + Buffer.from(email).toString('base64');
      
      return res.json({ 
        success: true, 
        token: token,
        user: { 
          id: user.id, 
          name: user.name, 
          email: user.email,
          gender: user.gender,
          phone: user.phone,
          dob: user.dob,
          course: user.course,
          eagle_coins: user.eagle_coins,
          assignments: user.assignments,
          assigns_complete: user.assigns_complete,
          waiting_assigns: user.waiting_assigns,
          access: user.access,
          Avatars: user.Avatars
        } 
      });
    } else {
      console.log(`[AUTH LOG] Login failed: Password mismatch for user "${email}".`);
      return res.json({ success: false, message: 'Invalid credentials. Please try again.' });
    }
  } catch (error) {
    console.error('[AUTH LOG] Database query error during student login:', error);
    return res.json({ success: false, message: 'Database error' });
  }
});

// Profile Route to fetch latest user data
router.get('/auth/profile', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];
  if (!token || !token.startsWith('jwt-session-token-')) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }

  try {
    const base64Email = token.replace('jwt-session-token-', '');
    const email = Buffer.from(base64Email, 'base64').toString('utf8');
    const [rows] = await db.query('SELECT * FROM app_users WHERE email = $1 LIMIT 1', [email]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const user = rows[0];
    return res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        phone: user.phone,
        dob: user.dob,
        course: user.course,
        eagle_coins: user.eagle_coins,
        assignments: user.assignments,
        assigns_complete: user.assigns_complete,
        waiting_assigns: user.waiting_assigns,
        access: user.access,
        Avatars: user.Avatars
      }
    });
  } catch (error) {
    console.error('[AUTH LOG] Error fetching profile:', error);
    return res.status(500).json({ success: false, message: 'Database error' });
  }
});

// Diagnostic route to print exact database error
router.get('/db-debug', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT NOW()');
    return res.json({
      success: true,
      message: 'Database query succeeded!',
      time: rows[0].now,
      env: {
        DB_HOST: process.env.DB_HOST ? 'Set' : 'Not Set (using fallback)',
        DATABASE_URL: process.env.DATABASE_URL ? 'Set' : 'Not Set (using fallback)'
      }
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
      stack: err.stack,
      env: {
        DB_HOST: process.env.DB_HOST ? process.env.DB_HOST : 'Not Set (using fallback)',
        DATABASE_URL: process.env.DATABASE_URL ? 'Set' : 'Not Set (using fallback)'
      }
    });
  }
});

module.exports = router;
