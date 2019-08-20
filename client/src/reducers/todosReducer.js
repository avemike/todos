import {
  FETCH_TODOS,
  NEW_TODO,
  DELETE_TODO,
  UPDATE_TODO_CATEGORY,
  FETCH_TODOS_BY_CATEGORY,
  UPDATE_TODO_DESCRIPTION
} from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        items: action.payload
      }
    case NEW_TODO:
      return {
        ...state,
        [action.payload.categoryId]: [...state[action.payload.categoryId], action.payload.todo],
      }
    case DELETE_TODO:
      const items = state[action.payload.categoryId].filter(item => {
        if(item) return item._id !== action.payload._id
        return false
      })
      return {
        ...state,
        [action.payload.categoryId]: items
      }
    case UPDATE_TODO_DESCRIPTION:
      const categoryId = action.payload.categoryId
      const todo = action.payload.todo
      const newItems = []
      state[categoryId].forEach( item => {
        if(item) {
          if(item._id === todo._id) newItems.push(todo)
          else newItems.push(item)
        }
      })

      return {
        ...state,
        [categoryId]: newItems 
      }
    case UPDATE_TODO_CATEGORY: {
      const {newCategory, oldCategory, todo} = action.payload
      const oldCategoryTodos = state[oldCategory._id].filter( item => item._id !== todo._id )
      if(newCategory._id === oldCategory._id) return state
      return {
        ...state,
        [oldCategory._id]: oldCategoryTodos,
        [newCategory._id]: [...state[newCategory._id], todo] 
      }
    }
    case FETCH_TODOS_BY_CATEGORY:
      return {
        ...state,
        [action.payload.categoryId]: action.payload.todos
      }
    default:
      return state
  }
}