const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  // You can add more fields as needed for your specific use case
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
