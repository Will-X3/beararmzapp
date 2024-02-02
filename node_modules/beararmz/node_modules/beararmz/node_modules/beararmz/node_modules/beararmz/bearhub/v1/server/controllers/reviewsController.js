const Reviews = require('../models/Reviews');

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Reviews.find();
    return reviews;
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to retrieve reviews' });
  }
};

const createReview = async (req, res) => {
  const { reviewer, comment, rating } = req.body;

  try {
    // Basic input validation
    if (!reviewer || !comment || !rating) {
      return res.status(400).json({ error: 'Reviewer, comment, and rating are required.' });
    }

    const newReview = new Reviews({ reviewer, comment, rating });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to create a new review' });
  }
};

const updateReview = async (req, res) => {
  const { reviewId } = req.params;
  const { reviewer, comment, rating } = req.body;

  try {
    const updatedReview = await Reviews.findByIdAndUpdate(
      reviewId,
      { reviewer, comment, rating },
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    return res.json(updatedReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to update the review' });
  }
};

const deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;

    const deletedReview = await Reviews.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    return res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to delete the review' });
  }
};

module.exports = {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
};
