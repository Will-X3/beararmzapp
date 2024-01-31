const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Route to get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while fetching categories.' });
  }
});

// Route to create a new category
router.post('/categories', async (req, res) => {
  const { name, description } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ message: 'Category name is required.' });
    }

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({ message: 'Category with the same name already exists.' });
    }

    const newCategory = await Category.create({ name, description });
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Bad request.' });
  }
});

// Add routes for updating and deleting categories as needed

module.exports = router;
