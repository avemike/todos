import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createTodo } from '../actions/todoActions'
import { linkCategoryWithTodo } from '../actions/categoryActions'
import _ from 'lodash'

class TodoForm extends Component {
  constructor() {
    super()
    this.state = {
      description: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const todo = {
      description: this.state.description
    }
    // console.log({...todo, categoryId: this.props.categoryId})
    this.props.createTodo(todo, this.props.categoryId)
  }
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input name="description" onChange={this.handleDescriptionChange} placeholder="Read a newspaper..."></input>
        <button className='add' type='submit'>Add</button>
      </form>
    )
  }
}

TodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired
};


export default connect(null, { createTodo })(TodoForm)