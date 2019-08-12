import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categoryActions';
import TodoPanel from '../components/TodoPanel'
import Header from '../components/Header'

class Home extends Component {  
  componentDidMount() {
    this.props.fetchCategories()    
  }
  
  render() {
    const Panels = []
    if(this.props.categories && this.props.categories.length > 0) {
      this.props.categories.forEach( category => (
        Panels.push(<TodoPanel category = { category } />)
      ))
    }
    return (
      <div className="App">
        <Header />
        { Panels }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.items,
})

export default connect(mapStateToProps, { fetchCategories })(Home)