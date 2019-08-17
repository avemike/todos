import {
  FETCH_CATEGORIES,
  NEW_CATEGORY,
  DELETE_CATEGORY
} from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        items: action.payload
      }
    case NEW_CATEGORY:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case DELETE_CATEGORY:
      console.log(action.payload) 
      const items = state.items.filter( (item) => item && action.payload.categoryId !== item._id)
      return {
        ...state,
        items
      }
    default: 
      return state
  }
}