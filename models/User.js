const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: String,
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("User", schema);

module.exports = model;
