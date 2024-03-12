const bcrypt = require('bcrypt');
const validator = require('validator');
const User = require('../models/User.js');
const Comment = require('../models/Comment');


const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users; // Return the users
  } catch (error) {
    console.error(error);
    throw new Error('Failed to retrieve users');
  }
};

const createUser = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Basic input validation
    if (!username || !password || !email) {
      throw new Error('Username, password, and email are required.');
    }

    // Additional input validation
    if (!validator.isEmail(email)) {
      throw new Error('Invalid email format.');
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();
    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create user');
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { username, password, email } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    // Update user fields
    user.username = username || user.username;
    user.password = password || user.password;
    user.email = email || user.email;

    await user.save();
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update user');
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    await user.deleteOne();
    return { message: 'User deleted successfully' };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete user');
  }
};

const getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user');
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  // Add other user-related operations as needed
};


