const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  // Add more fields as needed
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
