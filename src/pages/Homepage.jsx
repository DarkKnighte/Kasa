import Card from "../components/Card.jsx";
import React from "react";
import {Link} from "react-router";
import logo from '../assets/homepage_logo.png'; // Décommentez si vous avez un logo
import './Homepage.scss';
import cards from "../../data.json";

const Homepage = () => {
    return (
        <div className="cards-container">
            <div className="banner" style={{
                backgroundImage: `url(${logo})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                backgroundColor: "rgba(0, 0, 0, 0.6)", 
                backgroundBlendMode: "darken"}}>
                <h1 className="banner-title">
                    Chez vous, partout et ailleurs
                </h1>
            </div>
            {cards.map((card) => (
                <Link key={card.id} to={`/lodging/${card.id}`}>
                    <Card {...card} />
                </Link>
            ))}
        </div>
    )
}

export default Homepage;
