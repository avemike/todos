import React, { Component } from 'react'
import { connect } from 'react-redux';

class TodoDroppable extends Component {
  // onDragOver = (ev) => {
  //   ev.preventDefault();
  // }

  // onDrop = (ev, cat) => {
  //   let id = ev.dataTransfer.getData("id");

  //   let tasks = this.state.tasks.filter((task) => {
  //     if (task.name == id) {
  //       task.category = cat;
  //     }
  //     return task;
  //   });

  //   this.setState({
  //     ...this.state,
  //     tasks
  //   });
  // }
  render() {
    if(this.props.isDisplayed) {
      return (
        <div className="todoDroppable">
               
        </div>
      )
    }
    else return null
  }
}
const mapStateToProps = state => {
  return {
    isDisplayed: state.display.holdingTodo
  }
}
export default connect(mapStateToProps, null)(TodoDroppable)