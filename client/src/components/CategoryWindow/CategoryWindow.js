import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createCategory, deleteCategory } from '../../actions/categoryActions';

const CategoryWindow = props => {
  const [categoryName, setCategoryName] = useState('')

  const onChange = (e) => setCategoryName(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()
    props.createCategory({name: categoryName})
  }

  const handleDelete = categoryId => props.deleteCategory(categoryId)

  return (
    <div className="createCategory__background">
      <div className="createCategory__field">
        <ul>
          <h2>Categories</h2>
          {
            props.categories.map( category => (
              <li>
                <p className="categoryName">
                  {category.name}
                </p>
                <p className="deleteCategory" onClick={ handleDelete(category._id)}>
                  Delete
                </p>
              </li>
            ))
          }
        </ul>
        <h2>Create new category</h2>
        <form onSubmit={onSubmit}>
          <input name="categoryName" onChange={onChange} value={categoryName} />
        </form>
        <div className="exit" onClick={props.close}>x</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.categories.items
  }
}

export default connect(mapStateToProps, {createCategory, deleteCategory})(CategoryWindow)