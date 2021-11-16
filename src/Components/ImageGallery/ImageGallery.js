import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css";
import PropTypes from "prop-types";

export default function ImageGallery({ gallery, onClose, clickPhoto }) {
  // console.log(gallery);
  return (
    <>
      <ul className="ImageGallery">
        {gallery.map(({ id, webformatURL, tags }) => (
          <li
            className="ImageGalleryItem"
            key={id}
            onClick={() => {
              onClose();
              clickPhoto(id);
            }}
          >
            <ImageGalleryItem src={webformatURL} alt={tags} />
          </li>
        ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onClose: PropTypes.func.isRequired,
  clickPhoto: PropTypes.func.isRequired,
};
