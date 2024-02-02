const Article = require('../models/Article');

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    return res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createArticle = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newArticle = new Article({ title, content });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateArticle = async (req, res) => {
  const { articleId } = req.params;
  const { title, content } = req.body;

  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      articleId,
      { title, content },
      { new: true }
    );

    if (!updatedArticle) {
      return res.status(404).json({ error: 'Article not found' });
    }

    res.json(updatedArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteArticle = async (req, res) => {
  const { articleId } = req.params;

  try {
    const deletedArticle = await Article.findByIdAndDelete(articleId);

    if (!deletedArticle) {
      return res.status(404).json({ error: 'Article not found' });
    }

    res.json(deletedArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Additional article-related operations as needed

module.exports = {
  getAllArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};
