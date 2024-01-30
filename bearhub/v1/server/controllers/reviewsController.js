const axios = require('axios');
const Reviews = require('../models/Reviews');

const reviewsController = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Reviews.find();
      res.json(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createReview: async (req, res) => {
    const { reviewer, comment, rating } = req.body;

    try {
      const newReview = new Reviews({ reviewer, comment, rating });
      await newReview.save();
      res.status(201).json(newReview);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Additional review-related operations as needed
};

module.exports = reviewsController;
