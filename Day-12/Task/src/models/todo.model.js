const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    user : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "user",
      reuqired : true
    },
    title: {
      type: String,
      reuqired: true,
    },
    description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["pending", "complete"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;
