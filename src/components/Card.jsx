import React from "react";
import "./Card.scss";

const CardItem = ({ title, image, description }) => {
  return (
    <div
        className="card"
        style={{cursor: "pointer"}}
    >
      {image && <img src={image} alt={title} className="card-image"/>}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
      </div>
    </div>
  );
};

export default CardItem;

export const abc = {};
