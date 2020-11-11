import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {};

  onSearchSubmit = (term) => {
    console.log("App term = ", term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
