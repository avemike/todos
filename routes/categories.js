const express = require('express')
const mongoose = require('mongoose')
const { categoryModel } = require('../models/categoryModel')
const { linkCategoryTodoModel } = require('../models/linkCategoryTodoModel')
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
  categoryModel.findByIdAndDelete(req.params.id, err => {
    if (err) res.send(err)
    res.json({
      message: `category ${req.params.id} successfully deleted`
    })
  })
})

// 
// CATEGORY - TODO RELATION ROUTES
//

router.get('/:id/todos', async (req, res) => {
  linkCategoryTodoModel.find({
      category: mongoose.Types.ObjectId(req.params.id),
    })
    .populate('todo')
    .exec()
    .then(docs => {
      const todos = docs.map(doc => {
        return doc.todo;
      })
      res.send(todos);
    })
});

router.post('/:category/todos/:todo', async (req, res) => {
  // checking if relation is already existing
  const isExisting = Boolean(await linkCategoryTodoModel.findOne({
      category : mongoose.Types.ObjectId(req.params.category),
      todo : mongoose.Types.ObjectId(req.params.todo)
  }))
  if(isExisting) return res.status(400).send('This relation is existing');

  // checking if given params points to existing todo and category
  const isTodoExist = Boolean(await todoModel.findById( req.params.todo ));
  const isCategoryExist = Boolean(await categoryModel.findById( req.params.category ));
  if(!isTodoExist || !isCategoryExist) return res.status(400).send(`Todo with id "${req.params.todo}" or/and category with id "${req.params.category}" do not exist`);

  let relation = new linkCategoryTodoModel({
      todo: mongoose.Types.ObjectId(req.params.todo),
      category: mongoose.Types.ObjectId(req.params.category)
  });
  relation = await relation.save();
  console.log(relation)
  res.send(relation);
});

module.exports = router