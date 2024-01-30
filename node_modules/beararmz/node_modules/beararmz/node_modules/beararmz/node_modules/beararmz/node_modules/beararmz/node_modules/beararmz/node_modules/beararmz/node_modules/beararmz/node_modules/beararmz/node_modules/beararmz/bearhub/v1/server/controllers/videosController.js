const axios = require('axios');
const Video = require('../models/Video');

const videosController = {
  getAllVideos: async (req, res) => {
    try {
      const videos = await Video.find();
      res.json(videos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createVideo: async (req, res) => {
    const { title, url } = req.body;

    try {
      const newVideo = new Video({ title, url });
      await newVideo.save();
      res.status(201).json(newVideo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateVideo: async (req, res) => {
    const { videoId } = req.params;
    const { title, url } = req.body;

    try {
      const updatedVideo = await Video.findByIdAndUpdate(
        videoId,
        { title, url },
        { new: true }
      );

      if (!updatedVideo) {
        return res.status(404).json({ error: 'Video not found' });
      }

      res.json(updatedVideo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteVideo: async (req, res) => {
    const { videoId } = req.params;

    try {
      const deletedVideo = await Video.findByIdAndDelete(videoId);

      if (!deletedVideo) {
        return res.status(404).json({ error: 'Video not found' });
      }

      res.json(deletedVideo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Additional video-related operations as needed
};

module.exports = videosController;
