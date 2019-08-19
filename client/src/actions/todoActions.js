import {
  FETCH_TODOS,
  NEW_TODO,
  DELETE_TODO,
  UPDATE_TODO_CATEGORY,
  UPDATE_TODO_DESCRIPTION,
  FETCH_TODOS_BY_CATEGORY
} from './types'

export const fetchTodos = () => dispatch => {
  fetch('http://localhost:5000/api/todos')
    .then(res => res.json())
    .then(todos => dispatch({
      type: FETCH_TODOS,
      payload: todos
    }))
}

export const updateTodoDescription = (todoData, categoryId) => dispatch => {
  fetch(`http://localhost:5000/api/todos/${todoData._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(todoData)
    })
    .then(res => res.json())
    .then(todo => {
      dispatch({
        type: UPDATE_TODO_DESCRIPTION,
        payload: {todo, categoryId}
    })})
}
export const updateTodoCategory = (todo, newCategoryId) => dispatch => {
  const oldCategoryId = todo.category
  fetch(`http://localhost:5000/api/categories/${newCategoryId}/todos/${todo._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    dispatch({
      type: UPDATE_TODO_CATEGORY,
      payload: {...data}
    })
  })
} 
export const createTodo = (data, categoryId) => dispatch => {
  fetch(`http://localhost:5000/api/categories/${categoryId}/todo`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(todo => dispatch({
      type: NEW_TODO,
      payload: {todo, categoryId}
    }))
}

export const deleteTodo = (_id, categoryId) => dispatch => {
  fetch(`http://localhost:5000/api/todos/${_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(message => dispatch({
      type: DELETE_TODO,
      payload: {categoryId, message, _id}
    }))
}

export const fetchTodosByCategory = categoryId => dispatch => {
  fetch(`http://localhost:5000/api/categories/${categoryId}/todos`)
    .then(res => res.json())
    .then(todos => dispatch({
      type: FETCH_TODOS_BY_CATEGORY,
      payload: {todos, categoryId}
    }))
}