import {
  FETCH_TODOS,
  NEW_TODO
} from './types'

export const fetchTodos = () => dispatch => {
  fetch('http://localhost:5000/api/todos')
    .then(res => res.json())
    .then(todos => dispatch({
      type: FETCH_TODOS,
      payload: todos
    }));
};

export const createTodo = todoData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
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
};