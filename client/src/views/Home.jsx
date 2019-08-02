import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchTodos } from '../actions/todoActions';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';

class Home extends Component {  
  componentWillMount() {
    this.props.fetchTodos()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newTodo) {
      this.props.todos.unshift(nextProps.newTodo)
    }
    console.log(nextProps)
  }
  render() {
    const Todos = this.props.todos.map((todo, i) => (
      <Todo description={todo.description} _id={todo._id} key={i}/>
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