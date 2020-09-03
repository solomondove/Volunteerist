const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  posterId: {
    type: String,
    required: true
  },
  posterName: {
    type: String,
    required: true
  },
  askId: {
    type: String
  },
  offerId: {
    type: String
  },
  body: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = Comment = mongoose.model('Comment', CommentSchema);