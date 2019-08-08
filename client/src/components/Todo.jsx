import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTodo, deleteTodo } from '../actions/todoActions'
import CheckBox from './CheckBox';

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: props.todo
    }
  }
  handleUpdate() {
    this.props.updateTodo(
      Object.assign({}, this.props.todo, { isDone: !this.props.todo.isDone})
    );
  }
  handleDelete() {
    this.props.deleteTodo(this.props.todo._id)
  }
  static getDerivedStateFromProps(props, state) {
    if(props.todo !== state.todo) {
      return {todo: props.todo}
    }
  }
  render() {
    return (
      <li>
        <CheckBox _id={this.state.todo._id} isDone={this.state.todo.isDone}/>
        <p>
          {this.props.todo.description}
        </p>    
        <div className='settings' onClick={this.handleDelete.bind(this)}>...</div>
      </li>
    )
  }
}

export default connect(null, { updateTodo, deleteTodo })(Todo)
