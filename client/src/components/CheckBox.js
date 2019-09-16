import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Checkbox as MaterialCheckbox } from '@material-ui/core'
import { updateTodoDescription } from '../actions/todoActions'

class CheckBox extends Component {
  handleClick() {
    this.props.updateTodo({
      _id: this.props._id,
      isDone: !this.props.isDone
    }, this.props.categoryId)

  }
  render() {
    return (
      <div className='checkbox-wrapper'>
        <MaterialCheckbox 
          checked = {this.props.isDone}
          onChange = {this.handleClick.bind(this)}
        />
      </div>
    )
  }
}

export default connect(null, {updateTodo: updateTodoDescription})(CheckBox)