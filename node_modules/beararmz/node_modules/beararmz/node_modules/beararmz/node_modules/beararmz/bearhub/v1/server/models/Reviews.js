const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  reviewer: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  // You can add more fields as needed for your application
});

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;
