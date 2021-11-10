import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ gallery }) {
  return (
    <>
      <ul className="ImageGallery">
        {gallery.map(({ id, webformatURL, tags }) => (
          <li className="ImageGalleryItem" key={id}>
            <ImageGalleryItem src={webformatURL} alt={tags} />
          </li>
        ))}
      </ul>
    </>
  );
}
