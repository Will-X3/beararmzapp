// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const Comment = require('../models/Comment');


router.get('/', async (req, res) => {
  try {
    await commentController.getAllComments(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while fetching comments.' });
  }
});

router.post('/', async (req, res) => {
  try {
    await commentController.createComment(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while creating a new comment.' });
  }
});

router.put('/:commentId', async (req, res) => {
  try {
    await commentController.updateComment(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while updating comment.' });
  }
});

router.delete('/:commentId', async (req, res) => {
  try {
    await commentController.deleteComment(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while deleting comment.' });
  }
});

router.get('/:commentId', async (req, res) => {
  try {
    await commentController.getCommentById(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while fetching comment.' });
  }
});

module.exports = router;
