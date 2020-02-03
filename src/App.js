import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'


class App extends React.Component{

  state = {
    todos: [],
  }


  componentDidMount() {
    fetch(`http://localhost:3000/todos`)
    .then(r => r.json())
    .then((todos) => {
      this.setState({
        todos
      })
    })
  }

  handleTodoDelete = (todoFromChild) =>{
    // console.log(todoFromChild);
    let updatedArray = this.state.todos.filter(todo => todo.title !== todoFromChild.title)
    this.setState({
      todos: updatedArray
    })
  }

//create newTodo should be passed down to the form to collect info of the object
//after getting it use spread opetator to add the new todo
//and set the state to the newly updatedArray
  createNewTodo = (todoFromChild) => {
    // console.log({...todoFromChild, completed:false});
    let newTodo = {...todoFromChild, completed:false}
    let newTodos =[newTodo, ...this.state.todos]
    this.setState({
      todos: newTodos
    })
  }

  handleChange=(todoObj)=>{
    let updatedArray = this.state.todos.map(todo => {
      if (todo.title === todoObj.title){
        return {...todoObj, completed: !todoObj.completed}
      } else {
        return todo
      }
    })

    this.setState({
      todos: updatedArray
    })
  }

  render(){
    // console.log(this.state.todos);
    return (
      <div className="App">
        <Header/>
        <ToDoContainer handleChange={this.handleChange} createNewTodo={this.createNewTodo} handleTodoDelete={this.handleTodoDelete} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
