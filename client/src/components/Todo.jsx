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

    this.handleDragStart = this.handleDragStart.bind(this)
    this.handleDragEnd = this.handleDragEnd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleDragStart = () => {
    this.props.todoDragUp(this.props.todo)
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
        <div className="first-line" draggable="true" onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd}>
          <CheckBox _id={this.props.todo._id} categoryId={this.props.categoryId} isDone={this.props.todo.isDone}/>
          <p>
            { this.props.todo.description }
          </p>
          <div className='settings' onClick={this.handleClick}>...</div>
        </div>
        {/* <TodoSettings show={this.state.showSettings} _id={this.props.todo._id} categoryId={this.props.categoryId}/> */}
      </li>
    )
  }
}

export default connect(null, { updateTodo: updateTodoDescription, deleteTodo, todoDragUp, todoDragDown})(Todo)
