import React from 'react'
import { connect } from 'react-redux'
import { updateTodoCategory } from '../../actions/todoActions'
import './todoDroppable.scss'

const TodoDroppable = props => {
  const onDragOver = event => event.preventDefault()
  const onDrop = () => props.updateTodoCategory(props.holdingTodo, props.categoryId)
  return (
    <div
      className='todo-droppable'
      onDragOver={(e)=>onDragOver(e)}
      onDrop={onDrop}>

      {props.children}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    holdingTodo: state.display.holdingTodo
  }
}
export default connect(mapStateToProps, { updateTodoCategory })(TodoDroppable)