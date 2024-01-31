const express = require('express');
const router = express.Router();
const chatHistoryController = require('../controllers/chatHistoryController');
const ChatHistory = require('../models/ChatHistory'); 

// Create a new chat message
router.post('/message', async (req, res) => {
    try {
      const { sender, message } = req.body;
      const newMessage = await chatHistoryController.createChatEntry(sender, message);
      res.status(201).json(newMessage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Internal server error while creating a new message. ${error.message}` });
    }
  });

// Get all chat messages
router.get('/', async (req, res) => {
  try {
    const messages = await chatHistoryController.getAllChatHistory();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Internal server error while fetching messages. ${error.message}` });
  }
});

// Delete a chat message by ID
router.delete('/:messageId', async (req, res) => {
  const { messageId } = req.params;
  try {
    await chatHistoryController.deleteMessage(messageId);
    res.json({ message: 'Message deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Internal server error while deleting message. ${error.message}` });
  }
});

// Additional actions as needed, e.g., marking a message as read

module.exports = router;
