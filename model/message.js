// server/models/Message.js
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String},
  timestamp: { type: Date, default: Date.now },
  
 
});

module.exports = mongoose.model("Message", messageSchema);

