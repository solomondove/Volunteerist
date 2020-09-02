const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String
  },
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  stats: {
    hrsCompleted: { type: Number },
    asksCompleted: { type: Number },
    didNotShow: { type: Number },
    notSatisfied: { type: Number },
    satisfied: { type: Number },
    verySatisfied: { type: Number }
  },
  completedAskIds: { type: Array },
  acceptedAskIds: { type: Array },
  offerIds: { type: Array },
  description: { type: String }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);