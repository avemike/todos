import React, { Component } from 'react'
import TodoForm from '../components/TodoForm'
import Todo from '../components/Todo'
import { connect } from 'react-redux'
import { fetchTodosByCategory } from '../actions/todoActions';
import TodoDroppable from './TodoDroppable';

class TodoPanel extends Component {  
  componentDidMount() {
    this.props.fetchTodosByCategory(this.props.category._id)
  }
  
  render() {
    const completed = []
    const notCompleted = []
    if(this.props.todos) {
      this.props.todos.forEach(todo => {
        if(todo) {
          if(todo.isDone) completed.push(<Todo todo={todo} categoryId={this.props.category._id} key={todo._id}/>)
          else notCompleted.push(<Todo todo={todo} categoryId={this.props.category._id} key={todo._id}/>)
        }
      })
    }
    return (
      <div className="todo-panel">
        <h1>{this.props.category.name}</h1>
        <div className="todo-panel__todos">
          <TodoForm categoryId = {this.props.category._id}/>
          <h2>New</h2>
          <ul>
            { notCompleted || null }
          </ul>
          <h2>Complete</h2>
          <ul>
            { completed || null}
          </ul>
        </div>
        <TodoDroppable categoryId={this.props.category._id}/>  
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  if(props.category) {
    return {
      todos: state.todos[props.category._id]
    }
  }
  return null
}

export default connect(mapStateToProps, { fetchTodosByCategory })(TodoPanel)