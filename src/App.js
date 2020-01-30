import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'


class App extends React.Component{

  state = {
    todos: []
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <ToDoContainer/>
      </div>
    );
  }
}

export default App;
