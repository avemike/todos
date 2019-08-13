const express = require('express')
const { todoModel } = require('../models/todoModel')
const { linkCategoryTodoModel } = require('../models/linkCategoryTodoModel')
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
    isDone: false
  })
  todo = await todo.save()
  
  let categoryId = req.body.categoryId
  let newLink = new linkCategoryTodoModel({
    category: categoryId,
    todo: todo._id
  })
  newLink = await newLink.save()
  res.send({todo, newLink})
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