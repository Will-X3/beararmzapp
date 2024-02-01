const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Get all comments
router.get('/', async (req, res) => {
  try {
    await commentController.getAllComments(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while fetching comments.' });
  }
});

// Create a new comment
router.post('/', async (req, res) => {
  try {
    await commentController.createComment(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while creating a new comment.' });
  }
});

// Update a comment
router.put('/:commentId', async (req, res) => {
  try {
    await commentController.updateComment(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while updating comment.' });
  }
});

// Delete a comment by ID
router.delete('/:commentId', async (req, res) => {
  try {
    await commentController.deleteComment(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while deleting comment.' });
  }
});

// Get a comment by ID
router.get('/:commentId', async (req, res) => {
    try {
      await commentController.getCommentById(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error while fetching comment.' });
    }
  });
module.exports = router;
