import {
  FETCH_TODOS,
  NEW_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  FETCH_TODOS_BY_CATEGORY
} from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default function (state = initialState, action) {
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
      const items = state.items.filter(item => item._id !== action.payload._id)
      return {
        ...state,
        items
      }
    case UPDATE_TODO:
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
    case FETCH_TODOS_BY_CATEGORY:
      return {
        ...state,
        [action.payload.categoryId]: action.payload.todos
      }
    default:
      return state
  }
}