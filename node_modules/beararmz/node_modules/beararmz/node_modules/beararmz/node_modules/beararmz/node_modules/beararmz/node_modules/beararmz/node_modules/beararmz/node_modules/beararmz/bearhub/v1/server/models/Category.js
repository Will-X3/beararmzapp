const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensures that category names are unique
  },
  description: String, // An optional field for category description
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
  }],
  videos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video',
  }],
  // You can add more fields or customize as needed
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
