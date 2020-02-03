import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {

  render() {
    // console.log(this.props.handleTodoDelete);
    // console.log(this.props.todos);
    let completedTodos = this.props.todos.filter(todo => todo.completed === true)
    let incompleteTodos = this.props.todos.filter(todo => todo.completed === false)
    // console.log(incompleteTodos);
    return (
      <div id="todo-container">
        <NewToDoForm   createNewTodo={this.props.createNewTodo}/>
        <CompletedContainer handleChange={this.props.handleChange} handleTodoDelete={this.props.handleTodoDelete} completedTodos={completedTodos}/>
        <IncompleteContainer handleChange={this.props.handleChange} handleTodoDelete={this.props.handleTodoDelete} incompleteTodos={incompleteTodos}/>
      </div>
    );
  }
}

//filter through the todos array,
// if the status is false render in Incomplete
// if the status is true render in Complete
