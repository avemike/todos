const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Get all todos
router.get('/', async (res, req) => {
  const todos = await todoModel.find({});
  res.send(todos);
})

// Creating new todo
router.post('/', async (res, req) => {
  let todo = new todoModel({
    description: req.body.description,
    isDone: req.body.isDone,
  })

  todo = await todo.save();
  res.send(todo);
})
