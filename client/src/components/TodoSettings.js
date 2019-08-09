import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/todoActions'

class TodoSettings extends Component {
  handleDelete() {
    this.props.deleteTodo(this.props._id)
  }
  render() {
    const settingsFieldClass = this.props.show ?
      'settings-field settings-field--expand'
      : 'settings-field settings-field--hide'

    return (
      <div className={settingsFieldClass}>
        <ul>
          <li onClick={this.handleDelete.bind(this)}>Usuń</li>
          <li>Przenieś</li>
        </ul>
      </div>
    ) 
  }
}

export default connect(null, {deleteTodo})(TodoSettings)