import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AddIcon from '@material-ui/icons/Add';

import { createTodo } from '../../actions/todoActions'
import './todoForm.scss'

const TodoForm = props => {
  const [description, setDescription] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault()
    const todo = {
      description: description,
      category: props.categoryId
    }
    props.createTodo(todo, props.categoryId)
  }
  
  return (
    <form onSubmit = { handleSubmit }>
      {/* <button className='add' type='submit'>Add</button> */}
      <div className="add-icon-wrapper">
        <AddIcon/>
      </div>

      <input name="description" onChange={e => setDescription(e.target.value)} placeholder="Type your task"></input>
    </form>
  )
}

TodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired
};


export default connect(null, { createTodo })(TodoForm)