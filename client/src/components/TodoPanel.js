import React, { Component } from 'react'
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';
import { connect } from 'react-redux';

class TodoPanel extends Component {  
  componentDidMount() {
    console.log(this.props.lol)
  }
  
  render() {
    const completed = []
    const notCompleted = []
    if(this.props.todos) {
      this.props.todos.forEach(todo => {
        if(todo.isDone) completed.push(<Todo todo={todo} key={todo._id}/>)
        else notCompleted.push(<Todo todo={todo} key={todo._id}/>)
      })
    }
    return (
      <div>
        <h1>{this.props.category.name}</h1>
          <div className="todosContainer">
            <TodoForm />
            <h2>New</h2>
            <ul>
              { notCompleted || null }
            </ul>
            <h2>Complete</h2>
            <ul>
              { completed || null}
            </ul>
          </div>
      </div>
    )
  }
}
// export default TodoPanel
export default connect(null, null)(TodoPanel)