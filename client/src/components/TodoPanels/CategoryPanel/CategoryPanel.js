import React from 'react'

import TodoForm from './components/TodoForm/TodoForm'
import TodoDroppable from '../../TodoDroppable/TodoDroppable'
import { Header } from './components/Header/Header'
import TodosList from './components/TodosList/TodosList'

import '../panels.scss'

const CategoryPanel = props => {
  return (
    <TodoDroppable categoryId = { props.category._id }>
      <div className="todo-panel-wrapper">
        <div className="todo-panel">
          <Header category = { props.category }/>
          <TodoForm categoryId = { props.category._id }/>
          <TodosList category = { props.category }/>
        </div>
      </div>
    </TodoDroppable>
  )
}

export default CategoryPanel