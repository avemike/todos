import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createCategory, deleteCategory } from '../actions/categoryActions';

class CategoryWindow extends Component {
  constructor() {
    super()
    this.state = {
      categoryName: ''
    }
  }
  onChange(e) {
    this.setState({
      categoryName: e.target.value 
    })
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.createCategory({name: this.state.categoryName})
  }
  handleDelete(categoryId) {
    this.props.deleteCategory(categoryId)
  }
  render() {
    return (
      <div className="createCategory__background">
        <div className="createCategory__field">
          <ul>
            <h2>Categories</h2>
            {
              this.props.categories.map( category => (
                <li>
                  <p className="categoryName">
                    {category.name}
                  </p>
                  <p className="deleteCategory" onClick={this.handleDelete.bind(this, category._id)}>
                    Delete
                  </p>
                </li>
              ))
            }
          </ul>
          <h2>Create new category</h2>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input name="categoryName" onChange={this.onChange.bind(this)} value={this.state.categoryName} />
          </form>
          <div className="exit" onClick={this.props.close}>x</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.items
  }
}

export default connect(mapStateToProps, {createCategory, deleteCategory})(CategoryWindow)