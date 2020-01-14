import React from 'react'
import { connect } from 'react-redux';
import { updateTodoCategory } from '../actions/todoActions';

const TodoDroppable = props => {
  const onDragOver = event => {
    event.preventDefault();
  }

  const onDrop = () => {
    props.updateTodoCategory(props.holdingTodo, props.categoryId)
  }
  
  if(!props.holdingTodo) return null
  
  return (
    <div
      className="todoDroppable"
      onDragOver={(e)=>onDragOver(e)}
      onDrop={onDrop}>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    holdingTodo: state.display.holdingTodo
  }
}
export default connect(mapStateToProps, { updateTodoCategory })(TodoDroppable)