

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user_id: String,
  content: String,
  type: String,
  created_at: Date,
  reactions: [{ user_id: String, reaction: String }]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
