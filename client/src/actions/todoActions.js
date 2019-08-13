import {
  FETCH_TODOS,
  NEW_TODO,
  DELETE_TODO,
  UPDATE_TODO,
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

export const updateTodo = (todoData, categoryId) => dispatch => {
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
        type: UPDATE_TODO,
        payload: {todo, categoryId}
    })})
}

export const createTodo = (data, categoryId) => dispatch => {
  fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({...data, categoryId})
    })
    .then(res => res.json())
    .then(item => dispatch({
      type: NEW_TODO,
      payload: {todo: item.todo, categoryId}
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