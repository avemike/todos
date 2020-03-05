import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createCategory } from '../../../actions/categoryActions';

import '../panels.scss'

const AddCategoryPanel = props => {
  const [categoryName, setCategoryName] = useState('')

  const handleChange = event => setCategoryName(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()

    props.createCategory({
      name: categoryName
    })

    setCategoryName('')
  }

  return (
    <div className="todo-panel-wrapper create-category">
      <div className="todo-panel">
        <form className="panel-section panel-header" onSubmit={handleSubmit}>
          <input className="input-category-name" type="text" placeholder='Add new category' value={categoryName} onChange={handleChange} />
        </form>
      </div>
    </div>
  )
}

export default connect(null, {createCategory})(AddCategoryPanel)