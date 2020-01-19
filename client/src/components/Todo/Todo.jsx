import React, { useState } from 'react'
import { connect } from 'react-redux'

import { deleteTodo, updateTodoDescription } from '../../actions/todoActions'
import { CheckBox } from '../CheckBox'
import TodoSettings from '../TodoSettings/TodoSettings'
import { todoDragUp, todoDragDown } from '../../actions/displayActions'

import './todo.scss'

const Todo = props => {
  const [showSettings, setShowSettings] = useState(false)

  const handleDragStart = () => props.todoDragUp(props.todo)
  const handleDragEnd = e => props.todoDragDown()
  const handleDelete = () => props.deleteTodo(props.todo._id)
  const handleClick = () => setShowSettings(!showSettings)

  return (
    <li>
      <div className="todo" draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <CheckBox _id={props.todo._id} categoryId={props.categoryId} isDone={props.todo.isDone}/>
        <p>
          { props.todo.description }
        </p>
        {/* <div className='settings' onClick={handleClick}>...</div> */}
      </div>
      {/* <TodoSettings show={showSettings} _id={props.todo._id} categoryId={props.categoryId}/> */}
    </li>
  )
}

export default connect(null, { updateTodo: updateTodoDescription, deleteTodo, todoDragUp, todoDragDown})(Todo)
