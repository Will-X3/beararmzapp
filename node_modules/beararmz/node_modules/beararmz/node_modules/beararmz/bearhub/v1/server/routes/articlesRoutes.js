const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

// All article routes
router.get('/', async (req, res) => {
  try {
    const articles = await articlesController.getAllArticles(req, res);
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newArticle = await articlesController.createArticle(req, res);
    res.status(201).json(newArticle);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Bad request.' });
  }
});

router.put('/:articleId', async (req, res) => {
  try {
    const updatedArticle = await articlesController.updateArticle(req, res);
    res.json(updatedArticle);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Bad request.' });
  }
});

router.delete('/:articleId', async (req, res) => {
  try {
    await articlesController.deleteArticle(req, res);
    res.json({ message: 'Article deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Additional article-related routes as needed

module.exports = router;
