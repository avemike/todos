import React from 'react'
import { connect } from 'react-redux'
import { Checkbox as MaterialCheckbox } from '@material-ui/core'
import { updateTodoDescription } from '../../actions/todoActions'

import './checkBox.scss'

const CheckBox = props => {
  const handleClick = () => {
    // Check / Uncheck checkbox, using updateTodo action (changing isDone parameter of choosed todo)
    props.updateTodo({
      _id: props._id,
      isDone: !props.isDone
    }, props.categoryId)
  }

  return (
    <div className='checkbox-wrapper'>
      <MaterialCheckbox 
        checked = {props.isDone}
        onChange = {handleClick}
      />
    </div>
  )
}

export default connect(null, {updateTodo: updateTodoDescription})(CheckBox)