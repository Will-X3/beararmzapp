const express = require('express');
const router = express.Router();
const chatHistoryController = require('../controllers/chatHistoryController');

// All chat history routes
router.get('/', async (req, res) => {
  try {
    const chatHistory = await chatHistoryController.getAllChatHistory(req, res);
    res.json(chatHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newChatEntry = await chatHistoryController.createChatEntry(req, res);
    res.status(201).json(newChatEntry);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Bad request.' });
  }
});

// Additional chat history-related routes as needed

module.exports = router;
