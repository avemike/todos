import React, { Component } from 'react'
import { connect } from 'react-redux'
import Trianglify from 'trianglify'

import { fetchCategories } from '../actions/categoryActions';
import { fetchTodos } from '../actions/todoActions';
import TodoPanel from '../components/TodoPanel'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

class Home extends Component {  
  constructor() {
    super()
    this.state = {
      bg: null
    }
  }
  componentDidMount(e) {
    this.props.fetchCategories()
    const backgroundPattern = Trianglify({
      width: 1900,
      height: 1100
    })
    this.setState({bg: backgroundPattern.png()})
  }
  render() {
    const Panels = []
    if(this.props.categories && this.props.categories.length > 0) {
      this.props.categories.forEach( category => (
        Panels.push(
          <TodoPanel 
            key = {category._id}
            category = { category } 
          />
        )
      ))
    }
    return (
      <div className="App">
        <div className="main-background">
          <img src={this.state.bg}/>
        </div>
        <Header />
        <Navigation/>
        <main>
          { Panels }
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.items,
})

export default connect(mapStateToProps, { fetchCategories, fetchTodos })(Home)