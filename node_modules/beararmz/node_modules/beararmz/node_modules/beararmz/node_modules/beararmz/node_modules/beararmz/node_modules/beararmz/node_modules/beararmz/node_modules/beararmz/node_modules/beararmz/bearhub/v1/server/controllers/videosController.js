const Video = require('../models/Video');

const getAllVideos = async () => {
  try {
    const videos = await Video.find();
    return videos; // Return the videos
  } catch (error) {
    console.error(error);
    throw new Error('Error while fetching videos.');
  }
};


const createVideo = async (req, res) => {
  const { title, url, description } = req.body;

  try {
    const newVideo = new Video({ title, url, description, category: req.body.category });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateVideo = async (req, res) => {
  const { videoId } = req.params;
  const { title, url, description } = req.body;

  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      videoId,
      { title, url, description },
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
};

const deleteVideo = async (req, res) => {
  const { videoId } = req.params;

  try {
    const deletedVideo = await Video.findByIdAndDelete(videoId);

    if (!deletedVideo) {
      return res.status(404).json({ error: 'Video not found' });
    }

    // Respond with a message instead of the deleted video object
    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a video by ID
const getVideoById = async (req, res) => {
  const { videoId } = req.params;
  console.log('Video ID:', videoId);
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
};

const getVideosByCategory = async (req, res) => {
    const { category } = req.params;
  
    try {
      // Fetch videos by category name (case-insensitive)
      const videos = await Video.find({ category: { $regex: new RegExp(category, 'i') } });
  
      if (!videos || videos.length === 0) {
        return res.status(404).json({ error: 'No videos found for the specified category' });
      }
  
      res.json(videos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error while fetching videos by category name.' });
    }
  };

// Additional video-related operations as needed

module.exports = {
  getAllVideos,
  createVideo,
  updateVideo,
  deleteVideo,
  getVideoById,
  getVideosByCategory,
};
