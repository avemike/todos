import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchCategories } from '../../actions/categoryActions'
import { fetchTodos } from '../../actions/todoActions'
import TodoPanel from '../../components/TodoPanel/TodoPanel'
import { Header } from '../../components/Header/Header'
import { Navigation } from '../../components/Navigation'

import './home.scss'

const Home = props => {  
  const [bg, setBg] = useState(null)
  const [Panels, setPanels] = useState([])

  useEffect(() => {
    props.fetchCategories()
  }, [])

  useEffect(() => {
    props.categories.forEach( category => (
      setPanels(panels => [
        ...panels,
        <TodoPanel 
          key = { category._id }
          category = { category } 
        />,
        ])
    ))
  }, [props.categories])

  return (
    <div className="App">
      <Navigation/>
      <main>
        <Header />
        { Panels }
        { Panels }
      </main>
    </div>
  )
}

const mapStateToProps = state => ({
  categories: state.categories.items,
})

export default connect(mapStateToProps, { fetchCategories, fetchTodos })(Home)