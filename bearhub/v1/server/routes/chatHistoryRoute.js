const express = require('express');
const router = express.Router();
const chatHistoryController = require('../controllers/chatHistoryController');

// All chat history routes
router.get('/', chatHistoryController.getAllChatHistory);
router.post('/', chatHistoryController.createChatEntry);
router.delete('/:chatId', chatHistoryController.deleteChatEntry);

// Additional chat history-related routes as needed

module.exports = router;
