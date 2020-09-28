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
    type: String,
  },
  posterId: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    }, 
  },
  volunteer: {
    type: String
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  date: {
    type: Date,
    default: Date.now
  },
  hasVolunteer: {
    type: Boolean,
    default: false
  },
  askCompleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

module.exports = Ask = mongoose.model('Ask', AskSchema);