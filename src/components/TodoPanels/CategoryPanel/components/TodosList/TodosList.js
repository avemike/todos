import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import Todo from './Todo/Todo'
import { fetchTodosByCategory } from '../../../../../actions/todoActions'

export const TasksList = props => {
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
    <section className="panel-section">
      <ul className="todo-list todo-list-not-completed">
        { notCompleted || null }
      </ul>
      <div className="separator" onClick={() => setIsDoneTodosExpanded(!isDoneTodosExpanded)}>
        Done
        {isDoneTodosExpanded?
        <ExpandLessIcon/>
        :
        <ExpandMoreIcon/>}
      </div>
      <ul className="todo-list todo-list-completed">
        { isDoneTodosExpanded && (completed || null)}
      </ul>
    </section>
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

export default connect(mapStateToProps, { fetchTodosByCategory })(TasksList)