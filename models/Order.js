const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    food: {
      type: mongoose.Types.ObjectId,
      ref: "Food",
      required: true,
    },
    count: {
      type: Number,
      default: 1,
    },
    isDeliver: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("Order", schema);

module.exports = model;
