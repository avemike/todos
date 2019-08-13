import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import categoriesReducer from './categoriesReducer';

export default combineReducers({
  todos: todosReducer,
  categories: categoriesReducer
})