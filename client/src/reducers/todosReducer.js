import {
  FETCH_TODOS,
  NEW_TODO
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
        default:
          return state
  }
}