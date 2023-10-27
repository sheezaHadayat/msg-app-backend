const express = require('express');
const router = express.Router();
const Message = require('../model/message');

// Create a new message
router.post('/messages', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const message = new Message({ title, content, author });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Retrieve a list of messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: -1 });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Implement endpoints for managing likes and comments if needed

module.exports = router;
