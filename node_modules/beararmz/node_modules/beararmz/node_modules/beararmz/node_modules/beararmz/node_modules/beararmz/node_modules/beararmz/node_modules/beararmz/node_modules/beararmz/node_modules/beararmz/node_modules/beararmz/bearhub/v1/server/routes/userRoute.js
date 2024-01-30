// routes/userRoute.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// All user routes
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

// Additional user-related routes as needed

module.exports = router;
