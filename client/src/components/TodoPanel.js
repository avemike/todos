import React, { useEffect } from 'react'
import TodoForm from '../components/TodoForm'
import Todo from '../components/Todo'
import { connect } from 'react-redux'
import { fetchTodosByCategory } from '../actions/todoActions';
import TodoDroppable from './TodoDroppable';

const TodoPanel = props => {

  useEffect(() => {
    props.fetchTodosByCategory(props.category._id)
  })

  const completed = []
  const notCompleted = []
  if(props.todos) {
    props.todos.forEach(todo => {
      if(todo) {
        if(todo.isDone) completed.push(<Todo todo={todo} categoryId={props.category._id} key={todo._id}/>)
        else notCompleted.push(<Todo todo={todo} categoryId={props.category._id} key={todo._id}/>)
      }
    })
  }
  return (
    <div className="todo-panel">
      <h2>{props.category.name}</h2>
      <div className="todo-panel__todos">
        <TodoForm categoryId = {props.category._id}/>
        <ul>
          { notCompleted || null }
          { completed || null}
        </ul>
      </div>
      <TodoDroppable categoryId={props.category._id}/>  
    </div>
  )
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