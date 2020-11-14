import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // console.log("App term = ", term);
    try {
      const { data } = await unsplash.get(`/search/photos`, {
        params: {
          query: term,
        },
      });
      this.setState({ images: data.results });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
