import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import React, { Component } from 'react';

export default class IncompleteContainer extends Component {

    // When implementing the search bar, consider implementing state here to make it dynamic.
    // i.e everytime you type in the input field, the ToDos are immediately filtered

    state = {
        searchTerm: ""
    }

    // When implementing the search bar, consider implementing a function that handles setState and pass this function down to
    // SearchBarComponent

    handleSearch = (searchValue) => {
      // console.log(searchValue);
      this.setState({
        searchTerm: searchValue
      })
    }

    incompletefilteredTodo=()=>{
      let filteredArray = this.props.incompleteTodos.filter(todo =>{
        return todo.title.toLowerCase().includes(this.state.searchTerm)
      })
      return filteredArray
    }

    // When implementing the search term, consider implementing a function that FILTERs the todos.
    // To determine which to filter, find out which ToDo title INCLUDES the search term typed.


  render() {
    // console.log(this.props);
        // console.log(this.props.incompleteTodos);
        // console.log(this.incompletefilteredTodo())
        //this was before this.props.incompleteTodos and we were mapping through it
        let incompleteTodoCard = this.incompletefilteredTodo().map(todo => <ToDoCard key={todo.title} todo={todo} handleTodoDelete={this.props.handleTodoDelete} handleChange={this.props.handleChange}/>)

    return (
        <div>
            <h1>Incomplete Todos</h1>
            <SearchBarComponent handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
            {incompleteTodoCard}
        </div>
    )
  }
}
