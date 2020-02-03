import React, { Component } from 'react';

export default class NewToDoForm extends Component {
  state = {
    title: "Title",
  }

  handleChange=(evt)=>{
    // debugger
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit=(evt)=>{
    evt.preventDefault()
    this.props.createNewTodo(this.state)
    this.setState({
      title: ""
    })// resetting the state!
  }


  render() {
    // console.log(this.props);
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
            <h1>New ToDo</h1>
            <div className="field">
                <label>Title</label>
                <input
                   type="text"
                   name="title"
                   placeholder="Title"
                  value ={this.state.title}
                  onChange={this.handleChange}
                   />
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
