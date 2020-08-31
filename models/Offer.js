const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AskSchema = new Schema({
  category: {
    type: String,
    required: true,
    default: 'general'
  },
  title: {
    type: String,
    required: true,
    minlength: 5
  },
  description: {
    type: String,
    required: true,
    minlength: 25
  },
  timeCommitment: {
    type: Number,
  },
  deadline: {
    type: Date,
  },
  timeOfDay: {
    type: Number,
  },
  posterId: {
    type: Number,
    required: true
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
    required: true
  },
  volunteers: {
    type: Array,
  },
  comments: {
    type: Array,
  }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);