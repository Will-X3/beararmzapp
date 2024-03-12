const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  // Add fields to associate comments with videos and users
  videoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video', // Reference to the Video model
    required: true
  },
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article', // Reference to the Video model
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
