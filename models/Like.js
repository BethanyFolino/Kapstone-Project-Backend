const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Build Like Schema
const LikeSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
  },
  imdbID: {
    type: String,
    required: true,
  },
  liked: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Like = mongoose.model("like", LikeSchema);
