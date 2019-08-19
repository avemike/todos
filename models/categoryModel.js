const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { todoModel } = require('./todoModel')

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

category.pre('remove', async function(next) {
  try {
    await todoModel.remove({
      "_id": {
        $in: this.todos
      }
    })
    next()
  }
  catch(err) {
    next(err)
  }
})

exports.categoryModel = mongoose.model('Category', category)
