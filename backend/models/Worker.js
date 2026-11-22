// models/Worker.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  workTypes: [String],
  experienceYears: Number,
  location: String,
  availability: { type: String, enum: ['full-time', 'part-time', 'occasionally'] },
  bio: String,
}, { timestamps: true });

module.exports = mongoose.model('Worker', workerSchema);
