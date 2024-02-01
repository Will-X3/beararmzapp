const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');
const Review = require('../models/Reviews'); // Import the Reviews model
const Comment = require('../models/Comment');
 

// All reviews routes
router.get('/', async (req, res) => {
  try {
    const reviews = await reviewsController.getAllReviews(req, res);
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while fetching reviews.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newReview = await reviewsController.createReview(req, res);
    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Bad request.' });
  }
});

// Route to update a review
router.put('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;
    const { newReviewData } = req.body;
  
    try {
      const updatedReview = await Review.findByIdAndUpdate(
        reviewId,
        newReviewData,
        { new: true } // Return the updated document
      );
  
      if (!updatedReview) {
        return res.status(404).json({ message: 'Review not found.' });
      }
  
      res.json(updatedReview);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error while updating the review.' });
    }
  });

// Route to delete a review
router.delete('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;
  
    try {
      const deletedReview = await Review.findByIdAndDelete(reviewId);
  
      if (!deletedReview) {
        return res.status(404).json({ message: 'Review not found.' });
      }
  
      res.json({ message: 'Review deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error while deleting the review.' });
    }
  });

router.get('/:reviewId', async (req, res) => {
  const { reviewId } = req.params;

  try {
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch the review' });
  }
});

// Additional review-related routes as needed

module.exports = router;
