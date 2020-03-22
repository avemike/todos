import {
  FETCH_CATEGORIES,
  NEW_CATEGORY,
  NEW_RELATION,
  DELETE_CATEGORY
} from './types'

export const fetchCategories = () => dispatch => {
  fetch('http://localhost:5000/api/categories')
    .then(res => res.json())
    .then(categories => dispatch({
      type: FETCH_CATEGORIES,
      payload: categories 
    })
  )
}

export const deleteCategory = categoryId => dispatch => {
  fetch(`http://localhost:5000/api/categories/${categoryId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(message => dispatch({
      type: DELETE_CATEGORY,
      payload: {categoryId, message}
    })
  )
}

export const createCategory = categoryData => dispatch => {
  fetch('http://localhost:5000/api/categories', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(categoryData)
    })
    .then(res => res.json())
    .then(category => dispatch({
      type: NEW_CATEGORY,
      payload: category
    }))
}

export const linkCategoryWithTodo = data => dispatch => {
  fetch(`http://localhost:5000/api/categories/${data.categoryId}/todos/${data.todoId}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(relation => dispatch({
    type: NEW_RELATION,
    payload: relation
  }))
}