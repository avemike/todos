import React, { Component } from 'react'

export default class TodoSettings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: props.show
    }
  }
  render() {
    if(this.props.show) {
      return (
        <div className='settings-field'>
          <ul>
            <li>Usuń</li>
            <li>Przenieś</li>
          </ul>
        </div>
      )
    } 
    else {
      return null
    }
  }
}
