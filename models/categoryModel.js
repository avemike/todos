const mongoose = require('mongoose')
const Schema = mongoose.Schema

const category = new Schema({
  name: {
    type: String,
    default: 'default',
    required: true
  },
  todos: [{
    type: Schema.Types.ObjectId,
    ref: 'Todo'
  }]
})


exports.categoryModel = mongoose.model('Category', category)
