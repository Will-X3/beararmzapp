const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videosController');
const Video = require('../models/Video');

// Route to get videos by category
router.get('/videos/:category', videosController.getVideosByCategory);

// All video routes
router.get('/', async (req, res) => {
  try {
    const videos = await videosController.getAllVideos(req, res);
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while fetching videos.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newVideo = await videosController.createVideo(req, res);
    res.status(201).json(newVideo);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Bad request.' });
  }
});

router.put('/:videoId', async (req, res) => {
  try {
    const updatedVideo = await videosController.updateVideo(req, res);
    res.json(updatedVideo);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Bad request.' });
  }
});

// Route to delete a video
router.delete('/:videoId', async (req, res) => {
  try {
    const { videoId } = req.params;
    const deletedVideo = await Video.findByIdAndDelete(videoId);

    if (!deletedVideo) {
      return res.status(404).json({ error: 'Video not found' });
    }

    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:videoId', async (req, res) => {
  const { videoId } = req.params;

  try {
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }

    res.json(video);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch the video' });
  }
});

module.exports = router;
