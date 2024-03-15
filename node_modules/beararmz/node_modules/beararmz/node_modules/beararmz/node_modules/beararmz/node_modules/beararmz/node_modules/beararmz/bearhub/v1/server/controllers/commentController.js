const Comment = require('../models/Comment');

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    return res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createComment = async (req, res) => {
  const { content, userId, videoId, articleId } = req.body;
  
  try {
    // Basic input validation
    if (!content || !userId) {
      return res.status(400).json({ message: 'Content and userId are required.' });
    }

    const newComment = new Comment({ content, userId, videoId, articleId });
    await newComment.save();
    return res.status(201).json({ comment: newComment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to create comment.' });
  }
};


const getCommentsByVideoId = async (req, res) => {
  const { videoId } = req.params;

  try {
    const comments = await Comment.find({ videoId });
    return res.json(comments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getCommentsByArticleId = async (req, res) => {
  const { articleId } = req.params;

  try {
    const comments = await Comment.find({ articleId });
    return res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



const updateComment = async (commentId, text) => {
  try {
    const comment = await Comment.findById(commentId);

    if (!comment) {
      throw new Error('Comment not found');
    }

    // Update comment field
    comment.text = text || comment.text;

    await comment.save();
    return comment;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update comment.');
  }
};

const deleteComment = async (commentId) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      throw new Error('Comment not found');
    }

    // Respond with a success message
    return { message: 'Comment deleted successfully' };
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

const getCommentById = async (commentId) => {
  try {
    const comment = await Comment.findById(commentId);

    if (!comment) {
      throw new Error('Comment not found');
    }

    return comment;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch comment.');
  }
};

module.exports = {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
  getCommentById,
  getCommentsByArticleId,
  getCommentsByVideoId,
};
