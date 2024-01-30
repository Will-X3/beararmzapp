const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController.js');

// All article routes
router.get('/', articlesController.getAllarticles);
router.post('/', articlesController.createarticle);
router.put('/:articleId', articlesController.updatearticle);
router.delete('/:articleId', articlesController.deletearticle);

// Additional article-related routes as needed

module.exports = router;
