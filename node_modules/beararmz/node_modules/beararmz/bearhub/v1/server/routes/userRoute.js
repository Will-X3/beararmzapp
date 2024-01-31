const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/User');

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

router.put('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const updatedUser = await userController.updateUser(req, res);
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Bad request.' });
  }
});

router.delete('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    await userController.deleteUser(req, res);
    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while fetching the user.' });
  }
});

// Additional user-related routes as needed

module.exports = router;
