import React from "react";
import "./Banner.scss";

const Banner = ({ image, text, alt }) => {
  return (
    <div className="banner">
      <img src={image} alt={alt} className="banner-image" />
      {text && <h2 className="banner-text">{text}</h2>}
    </div>
  );
};

export default Banner;
