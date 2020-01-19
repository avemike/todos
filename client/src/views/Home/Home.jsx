import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Trianglify from 'trianglify'

import { fetchCategories } from '../../actions/categoryActions';
import { fetchTodos } from '../../actions/todoActions';
import TodoPanel from '../../components/TodoPanel/TodoPanel'
import { Header } from '../../components/Header/Header'
import { Navigation } from '../../components/Navigation'

const Home = props => {  
  const [bg, setBg] = useState(null)
  const [Panels, setPanels] = useState([])

  useEffect(() => {
    props.fetchCategories()
    
    const backgroundPattern = Trianglify({
      width: 1900,
      height: 1100
    })
    setBg( backgroundPattern.png() )
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
      <div className="main-background">
        <img src={bg}/>
      </div>
      <Header />
      <Navigation/>
      <main>
        { Panels }
      </main>
    </div>
  )
}

const mapStateToProps = state => ({
  categories: state.categories.items,
})

export default connect(mapStateToProps, { fetchCategories, fetchTodos })(Home)