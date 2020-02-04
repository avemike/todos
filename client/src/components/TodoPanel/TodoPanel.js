import React, { useEffect, useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import Todo from '../Todo/Todo'
import { connect } from 'react-redux'
import { fetchTodosByCategory } from '../../actions/todoActions'
import TodoDroppable from '../TodoDroppable/TodoDroppable'

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './todoPanel.scss'

const TodoPanel = props => {
  const [completed, setCompleted] = useState([])
  const [notCompleted, setNotCompleted] = useState([])
  const [isDoneTodosExpanded, setIsDoneTodosExpanded] = useState(false)

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
    <TodoDroppable categoryId = {props.category._id}>
      <div className="todo-panel-wrapper">
        <div className="todo-panel">
          <section className="panel-section panel-header">
            <h2>{props.category.name}</h2>
            <p>Last updated: 16 July</p>
          </section>
          <section className="panel-section todo-form">
            <TodoForm categoryId = {props.category._id}/>
          </section>
          <section className="panel-section">
            <ul>
              { notCompleted || null }
            </ul>
            <div className="separator" onClick={() => setIsDoneTodosExpanded(!isDoneTodosExpanded)}>
              Done
              {isDoneTodosExpanded?
              <ExpandLessIcon/>
              :
              <ExpandMoreIcon/>}
            </div>
            <ul>
              { isDoneTodosExpanded && (completed || null)}
            </ul>
          </section>
        </div>
      </div>
    </TodoDroppable>
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