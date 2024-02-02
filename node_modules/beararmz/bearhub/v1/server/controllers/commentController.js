// controllers/commentController.js
const Comment = require('../models/Comment');

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    return comments;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while fetching comments.' });
  }
};

const createComment = async (req, res) => {
    const { content } = req.body;
  
    try {
      // Basic input validation
      if (!content) {
        return res.status(400).json({ message: 'Content is required.' });
      }
  
      const newComment = new Comment({ content });
      await newComment.save();
      res.status(201).json(newComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create comment.' });
    }
  };
  

const updateComment = async (req, res) => {
  const { commentId } = req.params;
  const { text } = req.body;

  try {
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Update comment field
    comment.text = text || comment.text;

    await comment.save();
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update comment.' });
  }
};

const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Respond with a success message
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getCommentById = async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch comment.' });
  }
};

module.exports = {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
  getCommentById,
};
