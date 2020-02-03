import React, { Component } from 'react';

export default class SearchBarComponent extends Component {
    handleChange=(evt)=>{
      this.props.handleSearch(evt.target.value)
    }


  render() {
    // console.log(this.props.searchTerm);
    return (
    <div className="ui input fluid">
        <input
          autoComplete="off"
          placeholder="Search Term"
          type="text"
          name="searchTerm"
          onChange={this.handleChange}
          value={this.props.searchTerm}
          />

    </div>
    );
  }
}


//state is not necesaary when searching
