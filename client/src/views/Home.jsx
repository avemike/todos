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
    const completed = []
    const notCompleted = []
    this.props.todos.forEach(todo => {
      if(todo.isDone) completed.push(<Todo todo={todo} key={todo._id}/>)
      else notCompleted.push(<Todo todo={todo} key={todo._id}/>)
    })
    return (
      <div className="App">
      <h1>todos</h1>
        <div className="todosContainer">
          <TodoForm />
          <h2>New</h2>
          <ul>
            { notCompleted }
          </ul>
          <h2>Complete</h2>
          <ul>
            { completed }
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