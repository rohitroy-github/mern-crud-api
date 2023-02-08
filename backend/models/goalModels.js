const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value !"],
    },
  },
  {
    timestamp: true,
  }
);

// exportingCreatedModel
module.exports = mongoose.model("Goal", goalSchema);
