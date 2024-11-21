
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  post_id: String,
  user_id: String,
  content: String,
  created_at: Date
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
