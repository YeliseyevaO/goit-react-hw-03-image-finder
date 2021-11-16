import React from "react";
import "./ImageGalleryItem.css";
import PropTypes from "prop-types";

export default function ImageGalleryItem({ src, alt }) {
  return (
    <>
      <img src={src} alt={alt} className="ImageGalleryItem-image" />
    </>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
