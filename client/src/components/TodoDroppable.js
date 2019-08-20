import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateTodoCategory } from '../actions/todoActions';

class TodoDroppable extends Component {
  constructor() {
    super()

    this.onDrop = this.onDrop.bind(this)
    this.onDragOver = this.onDragOver.bind(this)
  }
  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = () => {
    this.props.updateTodoCategory(this.props.holdingTodo, this.props.categoryId)
  }
  render() {
    if(this.props.holdingTodo) {
      return (
        <div
          className="todoDroppable"
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={this.onDrop}
        >
               
        </div>
      )
    }
    else return null
  }
}
const mapStateToProps = state => {
  return {
    holdingTodo: state.display.holdingTodo
  }
}
export default connect(mapStateToProps, { updateTodoCategory })(TodoDroppable)