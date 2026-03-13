const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  resumeFileName: {
    type: String,
    required: true
  },
  atsScore: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  matchScore: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  skills: [{
    type: String
  }],
  optimizedResume: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for faster queries
historySchema.index({ createdAt: -1 });

module.exports = mongoose.model('History', historySchema);
