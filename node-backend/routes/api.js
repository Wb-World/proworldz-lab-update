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

module.exports = router;
