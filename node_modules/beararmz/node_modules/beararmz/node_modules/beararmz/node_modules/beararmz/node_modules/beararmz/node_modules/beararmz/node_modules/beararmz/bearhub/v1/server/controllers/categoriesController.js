const Category = require('../models/Category');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error while fetching categories.' });
  }
};

const createCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ error: 'Category name is required.' });
    }

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({ error: 'Category with the same name already exists.' });
    }

    const newCategory = await Category.create({ name, description });
    return res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error while creating a new category.' });
  }
};

const updateCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    const categoryId = req.params.categoryId;
    

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { name, description },
      { new: true } // Return the updated document
    );

    if (!updatedCategory) {
      return res.status(404).json({ error: 'Category not found.' });
    }

    return res.json(updatedCategory);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error while updating the category.' });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ error: 'Category not found.' });
    }

    return res.json({ message: 'Category deleted successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error while deleting the category.' });
  }
};
const getCategoryByName = async (req, res) => {
    const { category } = req.params;
  
    try {
      // Fetch category by name (case-insensitive)
      const foundCategory = await Category.findOne({ name: { $regex: new RegExp(category, 'i') } });
  
      if (!foundCategory) {
        return res.status(404).json({ error: 'Category not found' });
      }
  
      res.json(foundCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error while fetching category by name.' });
    }
  };

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryByName,
};
