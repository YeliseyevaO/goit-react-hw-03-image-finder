import React from "react";

export default function ImageGalleryItem({ src, tags }) {
  return (
    <>
      <img src={src} alt={tags} className="ImageGalleryItem-image" />
    </>
  );
}
