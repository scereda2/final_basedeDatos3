
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  birthdate: Date,
  bio: String,
  friends: [String],
  joined_at: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User;
