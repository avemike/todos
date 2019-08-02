const express = require('express')
const { todoModel } = require('../models/todoModel')
const router = express.Router()

// Get all todos
router.get('/', (req, res) => {
  todoModel.find({}, (err, todos) => {
    res.send(todos)
  })
})

// Create todo
router.post('/', async (req, res) => {
  let todo = new todoModel({
    description: req.body.description,
    isDone: req.body.isDone
  })

  todo = await todo.save()
  res.send(todo)
})

// Update todo
router.put('/:id', async (req, res) => {
  todoModel.findOneAndUpdate({
    _id: req.params.id
  }, req.body, (err, todo) => {
    if(err) res.send(err)
    res.json(todo)
  })
})

module.exports = router