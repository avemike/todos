const express = require('express')
const mongoose = require('mongoose')
const { categoryModel } = require('../models/categoryModel')
const { todoModel } = require('../models/todoModel')
const router = express.Router()

// Get all categories
router.get('/', (req, res) => {
  categoryModel.find({}, (err, category) => {
    res.send(category)
  })
})

// Create category
router.post('/', async (req, res) => {
  let category = new categoryModel({
    name: req.body.name
  })

  category = await category.save()
  res.send(category)
})

// Delete category
router.delete('/:id', (req, res) => {
  categoryModel.findById(req.params.id, (err, category) => {
    if (err) return next(err)
    
    category.remove()
    
    res.json({
      message: `category ${req.params.id} successfully deleted`
    })
  })
})

// Update category
router.put('/:id', async (req, res) => {
  categoryModel.findByIdAndUpdate(req.params.id, req.body, (err, category) => {
    if (err) res.send(err)
    res.json(Object.assign({}, category.toJSON(), {
      name: req.body.name
    }))
  })
})

// 
// TODOS requests
// 

// Change todo category
router.put('/:newCategoryId/todos/:todoId', async (req, res) => {
  const chosenTodo = await todoModel.findById(req.params.todoId)
  const oldCategoryId = chosenTodo.category
  
  const afterShiftCategory = await categoryModel.findById(req.params.newCategoryId)
  const beforeShiftCategory = await categoryModel.findById(oldCategoryId)

  // delete todo from old category
  beforeShiftCategory.todos = beforeShiftCategory.todos.filter(todoId => JSON.stringify(todoId) !== JSON.stringify(chosenTodo._id))
  await beforeShiftCategory.save(err => res.send(err))

  // add todo to new category
  afterShiftCategory.todos.push(chosenTodo)
  await afterShiftCategory.save(err => res.send(err))
  

  // change categoryId inside todo
  chosenTodo.category = afterShiftCategory._id 
  await chosenTodo.save(err => res.send(err))

  // success
  res.send(`Successfully shifted ${chosenTodo._id} todo to ${req.params.newCategoryId}`)
})
// Create a todo
router.post('/:categoryId/todo', async (req, res) => {
  // category
  const category = await categoryModel.findById(req.params.categoryId)

  // creates a todo
  const todo = new todoModel({
    description: req.body.description,
    isDone: false,
    category: req.params.categoryId
  })
  await todo.save()

  // link todo to category
  category.todos.push(todo._id)
  await category.save()

  res.send(todo)
})

// Fetch todos by category
router.get("/:categoryId/todos", async (req, res) => {
  const category = await categoryModel.findById(req.params.categoryId)
    .populate("todos")

  res.send(category.todos)
})

module.exports = router