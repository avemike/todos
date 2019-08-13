import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createCategory } from '../actions/categoryActions';

class CreateCategoryWindow extends Component {
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
  render() {
    return (
      <div className="createCategory__background">
        <div className="createCategory__field">
          <h2>Create category</h2>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input name="categoryName" onChange={this.onChange.bind(this)} value={this.state.categoryName} />
          </form>
          <div className="exit" onClick={this.props.close}>x</div>
        </div>
      </div>
    )
  }
}

export default connect(null, {createCategory})(CreateCategoryWindow)