const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Route to get all categories
router.get('/v1/bearhub/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while fetching categories.' });
  }
});

// Route to create a new category
router.post('/', async (req, res) => {
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

// Route to update a category
router.put('/:categoryId', async (req, res) => {
  const { name, description } = req.body;
  const { categoryId } = req.params;

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { name, description },
      { new: true } // Return the updated document
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found.' });
    }

    res.json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while updating the category.' });
  }
});

// Route to delete a category
router.delete('/:categoryId', async (req, res) => {
  const { categoryId } = req.params;

  try {
    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found.' });
    }

    res.json({ message: 'Category deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while deleting the category.' });
  }
});

// Route to get a specific category by ID
router.get('/category/:category', async (req, res) => {
    const { category } = req.params;
  
    try {
      const foundCategory = await Category.findOne({ name: category });
  
      if (!foundCategory) {
        return res.status(404).json({ message: 'Category not found.' });
      }
  
      res.json(foundCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error while fetching the category.' });
    }
  });

module.exports = router;
