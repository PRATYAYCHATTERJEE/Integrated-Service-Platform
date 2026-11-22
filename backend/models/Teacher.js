// models/Teacher.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  subjects: [String],
  experienceYears: Number,
  location: String,
  bio: String,
}, { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema);
