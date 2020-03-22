import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AddIcon from '@material-ui/icons/Add';

import { createTodo } from '../../../../../actions/todoActions'
import './todoForm.scss'

const TodoForm = props => {
  const [description, setDescription] = useState('')
  
  const handleChange = event => setDescription(event.target.value)
  const handleSubmit = event => {
    event.preventDefault()

    const todo = {
      description: description,
      category: props.categoryId
    }
    props.createTodo(todo, props.categoryId)

    setDescription('')
  }
  
  return (
    <section className="panel-section todo-form">
      <form onSubmit = { handleSubmit }>
        <div className="add-icon-wrapper">
          <AddIcon/>
        </div>

        <input name="description" value={ description } onChange={ handleChange } placeholder="Type your task"></input>
      </form>
    </section>
  )
}

TodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired
};


export default connect(null, { createTodo })(TodoForm)