import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchCategories } from '../../actions/categoryActions'
import { fetchTodos } from '../../actions/todoActions'
import { AddCategoryPanel } from '../../components/TodoPanels/AddCategoryPanel'
import TodoPanel from '../../components/TodoPanels/CategoryPanel/CategoryPanel'

import './home.scss'

const Home = props => {  
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
        />
        ])
    ))
  }, [props.categories])

  return (
    <div className="App">
      <div className="container">
        <div className="main-wrapper">
          <main>
            { Panels }
            <AddCategoryPanel/>
          </main>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  categories: state.categories.items,
})

export default connect(mapStateToProps, { fetchCategories, fetchTodos })(Home)