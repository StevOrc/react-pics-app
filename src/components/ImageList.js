import "./ImageList.css";
import React from "react";

const ImageList = ({ images }) => {
  console.log(images);
  const imagesList = images.map(({ urls, id, description }) => {
    return <img src={urls.regular} key={id} alt={description} />;
  });

  return <div className="image-list">{imagesList}</div>;
};

export default ImageList;
