const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  url: { type: String, required: true },
  source_code: { type: String, required: true },
  img_url: { type: String, required: true },
  description: { type: String, required: true, maxlength: 300 },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Projects", projectSchema);
