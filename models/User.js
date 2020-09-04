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
    hrsCompleted: { type: Number, default: 0 },
    asksCompleted: { type: Number, default: 0 },
    didNotShow: { type: Number, default: 0 },
    notSatisfied: { type: Number, default: 0 },
    satisfied: { type: Number, default: 0 },
    verySatisfied: { type: Number, default: 0 }
  },
  completedAskIds: { type: Array },
  acceptedAskIds: { type: Array },
  offerIds: { type: Array },
  description: { type: String }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);