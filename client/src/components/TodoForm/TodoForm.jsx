import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
      <button className='add' type='submit'>Add</button>
      <input name="description" onChange={e => setDescription(e.target.value)} placeholder="Read a newspaper..."></input>
    </form>
  )
}

TodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired
};


export default connect(null, { createTodo })(TodoForm)