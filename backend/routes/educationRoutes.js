// routes/educationRoutes.js
const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

// Example route: get teachers
router.get('/teachers', educationController.getTeachers);

module.exports = router;
