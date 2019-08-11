const express = require('express')
const { categoryModel } = require('../models/categoryModel')
const router = express.Router()

// Get all todos
router.get('/', (req, res) => {
  categoryModel.find({}, (err, category) => {
    res.send(category)
  })
})
// Create todo
router.post('/', async (req, res) => {
  let category = new categoryModel({
    name: req.body.name
  })

  category = await category.save()
  res.send(category)
})

module.exports = router