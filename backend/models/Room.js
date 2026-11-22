// models/Room.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  description: String,
  location: String,
  rent: Number,
  facilities: [String],
  images: [String],
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
