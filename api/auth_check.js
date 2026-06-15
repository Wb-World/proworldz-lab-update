// Node.js backend route converted from PHP
const express = require('express');
const router = express.Router();

router.all('/', (req, res) => {
  res.json({ message: 'Converted from auth_check.php' });
});

module.exports = router;
