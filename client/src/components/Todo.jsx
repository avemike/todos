import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTodo, deleteTodo } from '../actions/todoActions'
import CheckBox from './CheckBox'
import TodoSettings from './TodoSettings'

class Todo extends Component {
  constructor() {
    super()
    this.state = {
      showSettings: false
    }
  }
  handleDelete() {
    this.props.deleteTodo(this.props.todo._id)
  }
  handleClick() {
    this.setState({
      showSettings: !this.state.showSettings
    })
  }
  render() {
    return (
      <li>
        <div className="first-line">
          <CheckBox _id={this.props.todo._id} isDone={this.props.todo.isDone}/>
          <p>
            {this.props.todo.description}
          </p>
          <div className='settings' onClick={this.handleClick.bind(this)}>...</div>
        </div>
        <TodoSettings show={this.state.showSettings}/>
      </li>
    )
  }
}

export default connect(null, { updateTodo, deleteTodo })(Todo)
