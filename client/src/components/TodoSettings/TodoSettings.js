import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../../actions/todoActions'

import './todoSettings.scss'

const TodoSettings = props => {
  const handleDelete = () => {
    props.deleteTodo(props._id, props.categoryId)
  }

  const settingsFieldClass = props.show ?
    'settings-field settings-field--expand'
    : 'settings-field settings-field--hide'

  return (
    <div className={settingsFieldClass}>
      <ul>
        <li onClick={handleDelete.bind(this)}>Usuń</li>
        <li>Przenieś</li>
      </ul>
    </div>
  ) 
}


export default connect(null, {deleteTodo})(TodoSettings)