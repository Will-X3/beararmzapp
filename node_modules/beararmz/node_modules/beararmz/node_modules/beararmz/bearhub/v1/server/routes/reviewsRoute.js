const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

// All reviews routes
router.get('/', reviewsController.getAllReviews);
router.post('/', reviewsController.createReview);
router.put('/:reviewId', reviewsController.updateReview);
router.delete('/:reviewId', reviewsController.deleteReview);

// Additional review-related routes as needed

module.exports = router;
