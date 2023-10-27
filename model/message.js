// server/models/Message.js
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  arthur: { type: String, required: true },
  likes: {Number, required: true },
});

module.exports = mongoose.model("Message", messageSchema);

