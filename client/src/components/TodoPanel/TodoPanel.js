import React, { useEffect, useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import Todo from '../Todo/Todo'
import { connect } from 'react-redux'
import { fetchTodosByCategory } from '../../actions/todoActions'
import TodoDroppable from '../TodoDroppable/TodoDroppable'

import './todoPanel.scss'

const TodoPanel = props => {
  const [completed, setCompleted] = useState([])
  const [notCompleted, setNotCompleted] = useState([])

  useEffect(() => {
    props.fetchTodosByCategory(props.category._id)
  }, [])

  useEffect(() => {
    // Load all todos and update if props.todos changed
    if(!props.todos) return ;

    setCompleted([])
    setNotCompleted([])

    props.todos.forEach(todo => {
      if(todo.isDone) {
        setCompleted(prev => [...prev, 
          <Todo todo={todo} categoryId={props.category._id} key={todo._id}/>
        ])
      }
      else {
        setNotCompleted(prev => [...prev, 
          <Todo todo={todo} categoryId={props.category._id} key={todo._id}/>
        ])
      }
    })
  }, [props.todos])

  return (
    <div className="todo-panel-wrapper">
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