import React, { useState } from 'react'
import { connect } from 'react-redux'
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { deleteTodo, updateTodoDescription } from '../../../../../../actions/todoActions'
import { todoDragUp, todoDragDown } from '../../../../../../actions/displayActions'

import CheckBox from './CheckBox/CheckBox'
import TodoSettings from './TodoSettings/TodoSettings'

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
        <section className="todo-section">
          <CheckBox _id={props.todo._id} categoryId={props.categoryId} isDone={props.todo.isDone}/>
        </section>
        <section className="todo-section">
          <p className={props.todo.isDone ? 'done' : 'undone'}>
            { props.todo.description }
          </p>
        </section>
        <section className="todo-section">
          <MoreVertIcon className='settings' onClick={handleClick}/>
        </section>
      </div>
      <TodoSettings show={showSettings} _id={props.todo._id} categoryId={props.categoryId}/>
    </li>
  )
}

export default connect(null, { updateTodo: updateTodoDescription, deleteTodo, todoDragUp, todoDragDown})(Todo)
