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
        <button className='check'></button>
        <p>
          {this.props.description}
        </p>    
        <div className='settings' onClick={this.handleClick}>...</div>
      </li>
    )
  }
}

export default connect(null, { deleteTodo })(Todo)
