import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchTodos } from '../actions/todoActions';

class Home extends Component {
  componentWillMount() {
    this.props.fetchTodos()
  }
  
  render() {
    return (
      <div>
        <h1>xd</h1>
      </div>
    )
  }
}
Home.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  newTodo: PropTypes.object
}
const mapStateToProps = state => ({
  todos: state.todos.items,
  newTodo: state.todos.item
})

export default connect(mapStateToProps, { fetchTodos })(Home)