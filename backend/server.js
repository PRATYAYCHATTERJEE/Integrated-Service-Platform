// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static frontend
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// API routes (placeholders)
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/education', require('./routes/educationRoutes'));
app.use('/api/rental', require('./routes/rentalRoutes'));
app.use('/api/domestic', require('./routes/domesticRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Fallback to index.html for SPA or unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
