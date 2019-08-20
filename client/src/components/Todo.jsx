import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, updateTodoDescription } from '../actions/todoActions'
import CheckBox from './CheckBox'
import TodoSettings from './TodoSettings'
import { todoDragUp, todoDragDown } from '../actions/displayActions';

class Todo extends Component {
  constructor() {
    super()
    this.state = {
      showSettings: false
    }
  }
  handleDragStart = e => {
    this.props.todoDragUp()
  }
  handleDragEnd = e => {
    this.props.todoDragDown()
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
        <div className="first-line" draggable="true" onDragStart={this.handleDragStart.bind(this)} onDragEnd={this.handleDragEnd.bind(this)}>
          <CheckBox _id={this.props.todo._id} categoryId={this.props.categoryId} isDone={this.props.todo.isDone}/>
          <p>
            { this.props.todo.description }
          </p>
          <div className='settings' onClick={this.handleClick.bind(this)}>...</div>
        </div>
        <TodoSettings show={this.state.showSettings} _id={this.props.todo._id} categoryId={this.props.categoryId}/>
      </li>
    )
  }
}

export default connect(null, { updateTodo: updateTodoDescription, deleteTodo, todoDragUp, todoDragDown})(Todo)
