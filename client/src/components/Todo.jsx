import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTodo, deleteTodo } from '../actions/todoActions'
import CheckBox from './CheckBox'
import TodoSettings from './TodoSettings'

class Todo extends Component {
  handleDelete() {
    this.props.deleteTodo(this.props.todo._id)
  }
  render() {
    return (
      <li>
        <CheckBox _id={this.props.todo._id} isDone={this.props.todo.isDone}/>
        <p>
          {this.props.todo.description}
        </p>
        <TodoSettings/>
      </li>
    )
  }
}

export default connect(null, { updateTodo, deleteTodo })(Todo)
