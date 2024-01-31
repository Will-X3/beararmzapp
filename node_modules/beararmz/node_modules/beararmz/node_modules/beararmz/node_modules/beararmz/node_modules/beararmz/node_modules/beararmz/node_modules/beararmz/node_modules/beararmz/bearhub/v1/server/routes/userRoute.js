const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// All user routes
router.get('/', async (req, res) => {
  try {
    const users = await userController.getAllUsers(req, res);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while fetching users.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newUser = await userController.createUser(req, res);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Bad request.' });
  }
});

// Additional user-related routes as needed

module.exports = router;
