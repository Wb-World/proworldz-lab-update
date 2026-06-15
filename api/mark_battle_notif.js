// Node.js backend route converted from PHP
const express = require('express');
const router = express.Router();

router.all('/', (req, res) => {
  res.json({ message: 'Converted from mark_battle_notif.php' });
});

module.exports = router;
