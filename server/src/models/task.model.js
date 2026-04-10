const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: {
    type: String,
    default: function() {
      return this._id.toString();
    }
  },
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

const taskModel = mongoose.model("task", taskSchema);
module.exports = taskModel;