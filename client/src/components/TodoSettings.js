import React, { Component } from 'react'

export default class TodoSettings extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
  handleClick() {
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <div>
        <div className='settings' onClick={this.handleClick.bind(this)}>...</div>
        {this.state.show? <div className='settings-field'>
          <ul>
            <li>Usuń</li>
            <li>Przenieś</li>
          </ul>
        </div> : null}
      </div>

    )
  }
}
