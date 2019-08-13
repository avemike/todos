const mongoose = require('mongoose')

const categoryModel = mongoose.model('Category', new mongoose.Schema({
  name: {
    type: String,
    default: 'school'
  }
}))

exports.categoryModel = categoryModel
