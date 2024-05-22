const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  roleApplied: {
    type: String,
    required: true,
  },
  educationalLevel: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  skillsLevel: {
    type: String,
    required: true,
  },
  portfolio: {
    type: String,
  },
  skillsSet: {
    type: [String],
    required: true,
  },
  dateApplied: {
    type: Date,
    default: Date.now,
  },
});

const Intern = mongoose.model("Intern", internSchema);

module.exports = Intern;
