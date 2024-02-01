const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/User');
const Comment = require('../models/Comment');


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

// Route to delete a user
router.delete('/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await Comment.deleteMany({ user: userId });
      await user.deleteOne();
  
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete user' });
    }
  });
  
  
  

router.get('/:userId', async (req, res) => {
    try {
      const user = await userController.getUserById(req, res);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error while fetching the user.' });
    }
  });

// Additional user-related routes as needed

module.exports = router;
