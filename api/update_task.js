// Node.js backend route converted from PHP
const express = require('express');
const router = express.Router();

router.all('/', (req, res) => {
  res.json({ message: 'Converted from update_task.php' });
});

module.exports = router;
