
const mongoose = require('mongoose');

const friendshipSchema = new mongoose.Schema({
  user_1: String,
  user_2: String,
  status: String,
  updated_at: Date
});

const Friendship = mongoose.model('Friendship', friendshipSchema);

module.exports = Friendship;
