import React from "react";
import "./Card.scss";

const CardItem = ({ title, cover }) => {
  return (
    <div
      className="card"
      style={{
        cursor: "pointer",
        backgroundImage: cover ? `url(${cover})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};

export default CardItem;
