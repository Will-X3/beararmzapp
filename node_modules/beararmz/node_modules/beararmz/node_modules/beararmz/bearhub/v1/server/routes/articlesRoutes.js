const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController.js');

// All article routes
router.get('/', articlesController.getAllArticles); // Corrected method name
router.post('/', articlesController.createArticle); // Corrected method name
router.put('/:articleId', articlesController.updateArticle); // Corrected method name
router.delete('/:articleId', articlesController.deleteArticle); // Corrected method name

// Additional article-related routes as needed

module.exports = router;
