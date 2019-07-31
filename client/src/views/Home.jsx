import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchTodos } from '../actions/todoActions';
import TodoForm from '../components/TodoForm';

class Home extends Component {
  componentWillMount() {
    this.props.fetchTodos()
  }
  
  render() {
    const Todos = this.props.todos.map(todo => (
      <div>
        <p>
          {todo.description}
        </p>
      </div>
    ))
    return (
      <div>
        <TodoForm />
        { Todos }
      </div>
    )
  }
}
Home.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  newTodo: PropTypes.object
}
const mapStateToProps = state => ({
  todos: state.todos.items,
  newTodo: state.todos.item
})

export default connect(mapStateToProps, { fetchTodos })(Home)