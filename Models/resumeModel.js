const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique:true },
  path: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Resume", resumeSchema);
