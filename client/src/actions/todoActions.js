import {
  FETCH_TODOS,
  NEW_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from './types'

export const fetchTodos = () => dispatch => {
  fetch('http://localhost:5000/api/todos')
    .then(res => res.json())
    .then(todos => dispatch({
      type: FETCH_TODOS,
      payload: todos
    }))
}

export const updateTodo = todoData => dispatch => {
  console.log(todoData)
  fetch(`http://localhost:5000/api/todos/${todoData._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(todoData)
    })
    .then(res => res.json())
    .then(todo => dispatch({
      type: UPDATE_TODO,
      payload: todo
    }))
}

export const createTodo = todoData => dispatch => {
  fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(todoData)
    })
    .then(res => res.json())
    .then(todo => dispatch({
      type: NEW_TODO,
      payload: todo
    }))
}

export const deleteTodo = _id => dispatch => {
  fetch(`http://localhost:5000/api/todos/${_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(message => dispatch({
      type: DELETE_TODO,
      payload: {message, _id}
    }))
}