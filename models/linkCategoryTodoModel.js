const mongoose = require('mongoose');

const linkCategoryTodoModel = mongoose.model('Todo-Category relation', new mongoose.Schema({
    todo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo',
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true
    }
}, {
  collection: 'todoCategoryRelation'
}));

exports.linkCategoryTodoModel = linkCategoryTodoModel;
