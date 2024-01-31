const Reviews = require('../models/Reviews');

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Reviews.find();
    return res.json(reviews);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error while fetching reviews.' });
  }
};

const createReview = async (req, res) => {
  const { reviewer, comment, rating } = req.body;

  try {
    const newReview = new Reviews({ reviewer, comment, rating });
    await newReview.save();
    return res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error while creating a new review.' });
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
      return res.status(404).json({ message: 'Review not found.' });
    }

    return res.json(updatedReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error while updating the review.' });
  }
};

const deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;

    const deletedReview = await Reviews.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found.' });
    }

    return res.json({ message: 'Review deleted successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error while deleting the review.' });
  }
};

module.exports = {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
};
