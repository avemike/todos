import React from 'react'
import { connect } from 'react-redux'
import {CheckBox as CheckBoxIcon, CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon } from '@material-ui/icons'
import { updateTodoDescription } from '../../../../../../../actions/todoActions'

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
    <div className='checkbox-wrapper' onClick={handleClick}>
      {props.isDone ? 
        <CheckBoxIcon className="checked"/> :
        <CheckBoxOutlineBlankIcon className="unchecked"/>
      }
    </div>
  )
}

export default connect(null, {updateTodo: updateTodoDescription})(CheckBox)