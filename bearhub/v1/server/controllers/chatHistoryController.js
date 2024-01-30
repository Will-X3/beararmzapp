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

  createChatEntry: async (req, res) => {
    const { sender, message, timestamp } = req.body;

    try {
      const newChatEntry = new ChatHistory({ sender, message, timestamp });
      await newChatEntry.save();
      res.status(201).json(newChatEntry);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteChatEntry: async (req, res) => {
    const { chatEntryId } = req.params;

    try {
      const deletedChatEntry = await ChatHistory.findByIdAndDelete(chatEntryId);

      if (!deletedChatEntry) {
        return res.status(404).json({ error: 'Chat entry not found' });
      }

      res.json(deletedChatEntry);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Additional chat history-related operations as needed
};

module.exports = chatHistoryController;
