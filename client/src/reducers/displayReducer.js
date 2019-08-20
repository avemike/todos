import {
  TODO_DRAG_UP,
  TODO_DRAG_DOWN
} from '../actions/types'

const initialState = {
  holdingTodo: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TODO_DRAG_UP: 
      return {
        ...state,
        holdingTodo: true
      }
    case TODO_DRAG_DOWN: 
      return {
        ...state,
        holdingTodo: false
      }
    default:
      return state
  }
}