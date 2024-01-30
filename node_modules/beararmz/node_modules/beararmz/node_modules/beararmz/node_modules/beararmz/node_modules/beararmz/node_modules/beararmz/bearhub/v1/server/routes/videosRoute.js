const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videosController');

// All video routes
router.get('/', videosController.getAllVideos);
router.post('/', videosController.createVideo);
router.put('/:videoId', videosController.updateVideo);
router.delete('/:videoId', videosController.deleteVideo);

// Additional video-related routes as needed

module.exports = router;
