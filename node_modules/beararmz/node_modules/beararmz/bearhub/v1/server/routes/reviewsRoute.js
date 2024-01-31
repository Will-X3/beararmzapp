const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

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

router.put('/:reviewId', async (req, res) => {
  try {
    const updatedReview = await reviewsController.updateReview(req, res);
    res.json(updatedReview);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Bad request.' });
  }
});

router.delete('/:reviewId', async (req, res) => {
  try {
    await reviewsController.deleteReview(req, res);
    res.json({ message: 'Review deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while deleting review.' });
  }
});

// Additional review-related routes as needed

module.exports = router;
