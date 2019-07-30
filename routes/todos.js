const express = require('express')
const { todoModel } = require('../models/todoModel')
const router = express.Router()

// Get all todos
router.get('/', (req, res) => {
  todoModel.find({}, (err, todos) => {
    res.send(todos)
  })
})

// Creating new todo
router.post('/', async (req, res) => {
  let todo = new todoModel({
    description: req.body.description,
    isDone: req.body.isDone
  })

  todo = await todo.save()
  res.send(todo)
})

module.exports = router