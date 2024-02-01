const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');
const Article = require('../models/Article');

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

// Route to delete an article
router.delete('/:articleId', async (req, res) => {
    const { articleId } = req.params;
  
    try {
      const deletedArticle = await Article.findByIdAndDelete(articleId);
  
      if (!deletedArticle) {
        return res.status(404).json({ message: 'Article not found.' });
      }
  
      res.json({ message: 'Article deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error while deleting the article.' });
    }
  });
  

router.get('/:articleId', async (req, res) => {
  const { articleId } = req.params;

  try {
    const article = await Article.findById(articleId);

    if (!article) {
      return res.status(404).json({ message: 'Article not found.' });
    }

    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error while fetching the article.' });
  }
});

module.exports = router;
