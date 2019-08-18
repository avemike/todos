const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todo = new Schema({
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
})

exports.todoModel = mongoose.model('Todo', todo)
