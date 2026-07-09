const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes from node-backend
const apiRoutes = require('./node-backend/routes/api');
const adminRoutes = require('./node-backend/routes/admin');

app.use('/api', apiRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Secure Worldz API' });
});

module.exports = app;
