import React from 'react'
import { connect } from 'react-redux'

import { deleteCategory } from '../../../../../actions/categoryActions'
import './options.scss'

const Options = props => {
  const handleDelete = () => props.deleteCategory(props.category._id)

  return (
    <div className="category-options-wrapper">
      <div className="category-options">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L50 0 L100 100 Z" />
        </svg>
        <p onClick={ handleDelete }>Delete</p>
      </div>
    </div>
  )
}

export default connect(null, { deleteCategory})(Options)