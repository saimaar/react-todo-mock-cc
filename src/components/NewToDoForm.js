import React, { Component } from 'react';

export default class NewToDoForm extends Component {
  render() {
    return (
      <div>
        <form class="ui form">
            <h2>New ToDo</h2>
            <div class="field">
                <label>Title</label>
                <input type="text" name="title" placeholder="Title"/>
            </div>
            <button class="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
