import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchTodos } from '../actions/todoActions';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';

class Home extends Component {  
  componentWillMount() {
    this.props.fetchTodos()
  }

  render() {
    const Todos = this.props.todos.map(todo => (
      <Todo todo={todo} key={todo._id}/>
    ))
    return (
      <div className="App">
      <h1>todos</h1>
        <div className="todosContainer">
          <TodoForm />
          <ul>
            { Todos }
          </ul>
        </div>
      </div>
    )
  }
}
Home.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
}
const mapStateToProps = state => ({
  todos: state.todos.items,
})

export default connect(mapStateToProps, { fetchTodos })(Home)