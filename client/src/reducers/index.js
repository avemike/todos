import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import categoriesReducer from './categoriesReducer';
import displayReducer from './displayReducer';

export default combineReducers({
  todos: todosReducer,
  categories: categoriesReducer,
  display: displayReducer
})