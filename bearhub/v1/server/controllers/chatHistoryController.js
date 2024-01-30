const axios = require('axios');
const ChatHistory = require('../models/ChatHistory');

const chatHistoryController = {
  getAllChatHistory: async (req, res) => {
    try {
      const chatHistory = await ChatHistory.find();
      res.json(chatHistory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createChatMessage: async (req, res) => {
    const { sender, message } = req.body;

    try {
      const newChatMessage = new ChatHistory({ sender, message });
      await newChatMessage.save();
      res.status(201).json(newChatMessage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Additional chat history-related operations as needed
};

module.exports = chatHistoryController;
