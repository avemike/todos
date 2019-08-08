import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTodo, deleteTodo } from '../actions/todoActions'
import CheckBox from './CheckBox';

class Todo extends Component {
  constructor() {
    super()
  }

  handleUpdate() {
    this.props.updateTodo(
      Object.assign({}, this.props.todo, { isDone: !this.props.todo.isDone})
    );
  }
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
        <div className='settings' onClick={this.handleDelete.bind(this)}>...</div>
      </li>
    )
  }
}

export default connect(null, { updateTodo, deleteTodo })(Todo)
