import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "term" };

  onInputChange = (event) => {
    let term = event.target.value.toUpperCase();
    this.setState({ term });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmitForm}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
