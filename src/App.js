import "./App.css";
import React from "react";
import Searchbar from "./Components/Searchbar";
import { fetchPhoto } from "./services/photo-api";
import ImageGallery from "./Components/ImageGallery";
import BildLoader from "./Components/Loader/Loader";
import Button from "./Components/Button";
import Modal from "./Components/Modal/Modal";
import "./App.css";

class App extends React.Component {
  state = {
    photoName: "",
    photoList: [],
    currentPage: 1,
    isLoading: false,
    error: null,
    showModal: false,
    activePhoto: {},
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.photoName !== this.state.photoName) {
      this.getPhoto();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    if (
      prevState.photoName !== this.state.photoName &&
      this.state.photoList.length > 0
    ) {
      this.setState({ photoList: [], currentPage: 1 });
    }
  }

  changePhoto = (query) => {
    this.setState({ photoName: query });
  };

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
  findActivePhoto = (imgId) => {
    this.setState((prevState) => ({
      activePhoto: prevState.photoList.find((photo) => imgId === photo.id),
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { photoList, isLoading, showModal, activePhoto } = this.state;
    const shouldRenderLoadMoreButton = photoList.length > 0 && !isLoading;
    const { largeImageURL, tags } = activePhoto;
    return (
      <>
        <Searchbar onSubmit={this.changePhoto} />
        <ImageGallery
          gallery={photoList}
          onClose={this.toggleModal}
          clickPhoto={this.findActivePhoto}
        />
        {isLoading && <BildLoader />}
        {shouldRenderLoadMoreButton && <Button foundMore={this.getPhoto} />}
        {showModal && (
          <Modal onClose={this.toggleModal} crs={largeImageURL} alt={tags} />
        )}
      </>
    );
  }
}

export default App;
