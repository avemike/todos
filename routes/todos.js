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
  todoModel.findByIdAndUpdate(req.params.id, req.body, (err, todo) => {
    if(err) res.send(err)
    res.json(Object.assign({}, todo.toJSON(), {isDone: req.body.isDone}))
  })
})

// Delete todo
router.delete('/:id', async (req, res) => {
  todoModel.findOneAndDelete({
    _id: req.params.id
  }, err => {
    if (err) res.send(err)
    res.json({
      message: `todo ${req.params.id} successfully deleted`
    })
  })
})

module.exports = router