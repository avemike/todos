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
        items: [...state.items, action.payload],
        item: action.payload
      }
    case DELETE_TODO:
      const items = state.items.filter(item => item._id !== action.payload._id)
      return {
        ...state,
        items
      }
    case UPDATE_TODO:
      const newItems = [];
      state.items.forEach( item => {
        if(item._id === action.payload._id) {
          newItems.push(action.payload)
        }
        else newItems.push(item)
      })
      return {
        ...state,
        items: newItems 
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