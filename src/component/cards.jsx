import React from "react";
import "./styles/cards.scss";

const Card = ({ title, image, description, onClick }) => (
    <div className="card" onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
        {image && <img src={image} alt={title} className="card-image" />}
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            {description && <p className="card-description">{description}</p>}
        </div>
    </div>
);

export default Card;