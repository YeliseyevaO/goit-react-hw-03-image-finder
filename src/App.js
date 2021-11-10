import "./App.css";
import React from "react";
import Searchbar from "./Components/Searchbar";
import { fetchPhoto } from "./services/photo-api";
import ImageGallery from "./Components/ImageGallery";
import BeatLoader from "react-spinners/BeatLoader";

class App extends React.Component {
  state = {
    photoName: "",
    photoList: [],
    currentPage: 1,
    isLoading: false,
    error: null,
  };

  changePhoto = (query) => {
    this.setState({ photoName: query });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.photoName !== this.state.photoName) {
      this.getPhoto();
    }
  }
  getPhoto = () => {
    const { currentPage, photoName } = this.state;
    const options = { photoName, currentPage };

    this.setState({ isLoading: true });

    return fetchPhoto(options)
      .then((photoList) => {
        this.setState((prevState) => ({
          photoList: [...prevState.photoList, ...photoList],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { photoList, isLoading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.changePhoto} />
        <ImageGallery gallery={photoList} />
        {isLoading && <BeatLoader size={30} />}
      </>
    );
  }
}

export default App;
