import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {
  
  render() {
    return (
      <div id="todo-container">
        <NewToDoForm/>
        <CompletedContainer />
        <IncompleteContainer/>
      </div>
    );
  }
}
