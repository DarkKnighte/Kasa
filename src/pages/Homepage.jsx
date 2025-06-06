import Card from "../components/Card.jsx";
import React from "react";
import {Link} from "react-router";
import cards from "../../data.json";

const Homepage = () => {
    return (
        <div className="cards-container">
            { /* BANNER */ }
            {cards.map((card) => (
                <Link key={card.id} to={`/lodging/${card.id}`}>
                    <Card {...card} />
                </Link>
            ))}
        </div>
    )
}

export default Homepage;
