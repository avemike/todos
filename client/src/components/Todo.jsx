import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/todoActions'

class Todo extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.deleteTodo(this.props._id)
  }

  render() {
    return (
      <li>
        <p>
          {this.props.description}
          <button onClick={this.handleClick}>X</button>
        </p>    
      </li>
    )
  }
}

export default connect(null, { deleteTodo })(Todo)
