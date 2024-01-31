const ChatHistory = require('../models/ChatHistory');

const getAllChatHistory = async (req, res) => {
  try {
    const chatHistory = await ChatHistory.find();
    res.json(chatHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createChatEntry = async (req, res) => {
  const { user, message } = req.body;

  try {
    const newChatEntry = new ChatHistory({ user, message });
    await newChatEntry.save();
    res.status(201).json(newChatEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Additional chat history-related operations as needed

module.exports = {
  getAllChatHistory,
  createChatEntry,
};
