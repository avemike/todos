import {
  FETCH_TODOS,
  NEW_TODO,
  DELETE_TODO
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
          item: action.payload
        }
      case DELETE_TODO:
        const items = state.items.filter(item => item._id !== action.payload._id)
        return {
          ...state,
          items
        }
      default:
        return state
  }
}