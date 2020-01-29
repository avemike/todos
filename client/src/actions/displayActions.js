import {
  TODO_DRAG_UP,
  TODO_DRAG_DOWN,
} from './types'

export const todoDragUp = todo => dispatch => {
  dispatch({
    type: TODO_DRAG_UP,
    payload: { todo }
  })
}
export const todoDragDown = () => dispatch => {
  dispatch({
    type: TODO_DRAG_DOWN,
  })
}