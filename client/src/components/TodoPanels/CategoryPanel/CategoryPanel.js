import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import TodoForm from '../../TodoForm/TodoForm'
import Todo from '../../Todo/Todo'
import { fetchTodosByCategory } from '../../../actions/todoActions'
import TodoDroppable from '../../TodoDroppable/TodoDroppable'
import { Header } from './Header/Header'

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../panels.scss'

const CategoryPanel = props => {
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
    <TodoDroppable categoryId = { props.category._id }>
      <div className="todo-panel-wrapper">
        <div className="todo-panel">
          <Header category = { props.category }/>
          <section className="panel-section todo-form">
            <TodoForm categoryId = { props.category._id }/>
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

export default connect(mapStateToProps, { fetchTodosByCategory })(CategoryPanel)