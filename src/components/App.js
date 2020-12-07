import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [], error: null };

  componentDidMount(){
    this.onSearchSubmit("Paris");
  }

  onSearchSubmit = async (term) => {
    try {
      const { data } = await unsplash.get(`/search/photos`, {
        params: {
          query: term,
        },
      });
      this.setState({ images: data.results, error: null });
      console.log(data);
    } catch (error) {
      this.setState({ error: "An error occured" });
    }
  };

  renderImageListOrerror = () => {
    const { error } = this.state;
    if (error) return <h3>{error}</h3>;
    else return <ImageList images={this.state.images} />;
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.renderImageListOrerror()}
      </div>
    );
  }
}

export default App;
