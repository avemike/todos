import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCategory, fetchCategories } from '../actions/categoryActions'
import CategoryWindow from './CategoryWindow';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      showCategoryWindow: false
    }

    this.toggleCategoryWindow = this.toggleCategoryWindow.bind(this)
  }
  toggleCategoryWindow() {
    this.setState({
      showCategoryWindow: !this.state.showCategoryWindow
    })
  }
  render() {
    return (
      <div>
        <header className='upper-header'>
          <ul>
            <li onClick={this.toggleCategoryWindow}>
              Create category
            </li>
          </ul>
        </header>
        {
          this.state.showCategoryWindow? 
            <CategoryWindow close={this.toggleCategoryWindow.bind(this)}/>
            : null
        }
      </div>
    )
  }
}

export default connect(null, { createCategory, fetchCategories })(Header)