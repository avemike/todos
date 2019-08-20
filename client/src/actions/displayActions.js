import {
  TODO_DRAG_UP,
  TODO_DRAG_DOWN,
} from './types'

export const todoDragUp = () => dispatch => {
  dispatch({
    type: TODO_DRAG_UP
  })
}
export const todoDragDown = () => dispatch => {
  dispatch({
    type: TODO_DRAG_DOWN
  })
}