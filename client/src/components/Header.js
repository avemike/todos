import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCategory, fetchCategories } from '../actions/categoryActions'
import CreateCategoryWindow from './CreateCategoryWindow';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      showCreateCategoryWindow: false
    }

    this.toggleCreateCategoryWindow = this.toggleCreateCategoryWindow.bind(this)
  }
  toggleCreateCategoryWindow() {
    this.setState({
      showCreateCategoryWindow: !this.state.showCreateCategoryWindow
    })
  }
  render() {
    return (
      <div>
        <header className='upper-header'>
          <ul>
            <li onClick={this.toggleCreateCategoryWindow}>
              Create category
            </li>
          </ul>
        </header>
        {
          this.state.showCreateCategoryWindow? 
            <CreateCategoryWindow close={this.toggleCreateCategoryWindow.bind(this)}/>
            : null
        }
      </div>
    )
  }
}

export default connect(null, { createCategory, fetchCategories })(Header)