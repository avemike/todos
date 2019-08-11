import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCategory, fetchCategories } from '../actions/categoryActions'

class Header extends Component {
  render() {
    return (
      <header className='upper-header'>
      <ul>
        <li>
          Stwórz kategorię
          <form>
            <input />
          </form>
        </li>
      </ul>
    </header>
    )
  }
}

export default connect(null, { createCategory, fetchCategories })(Header)