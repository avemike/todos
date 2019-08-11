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

module.exports = router