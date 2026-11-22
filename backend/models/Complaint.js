// models/Complaint.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complaintSchema = new Schema({
  reporter: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['open', 'in_progress', 'resolved'], default: 'open' },
}, { timestamps: true });

module.exports = mongoose.model('Complaint', complaintSchema);
