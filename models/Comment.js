const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  posterId: {
    type: String,
    required: true
  },
  askId: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true,
    minlength: 5
  }
}, {
  timestamps: true
})

module.exports = Comment = mongoose.model('Comment', CommentSchema);