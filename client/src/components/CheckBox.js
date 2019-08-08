import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTodo } from '../actions/todoActions'

class CheckBox extends Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.updateTodo({
      _id: this.props._id,
      isDone: !this.props.isDone}
    )
  }
  render() {
      return (
        <input
          type = 'checkbox'
          className = 'check'
          checked = {this.props.isDone}
          onChange = {this.handleClick.bind(this)}/> 
      )
  }
}

export default connect(null, {updateTodo})(CheckBox)