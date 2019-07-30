const mongoose = require('mongoose')

const todoModel = mongoose.model('Todo', new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  isDone: {
    type: Boolean,
    default: false,
  }
}))

exports.todoModel = todoModel;
