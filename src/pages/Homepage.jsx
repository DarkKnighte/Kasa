import Card from "../components/Card.jsx";
import React from "react";
import {Link} from "react-router";
import cards from "../../data.json";

const Homepage = () => {
    // @TODO: #4 - Intégrer la page d'accueil avec les différents composants et la navigation vers les logements.
    return (
        <div className="cards-container">
            { /* BANNER */ }
            {cards.map((card) => (
                <Link key={card.id} to={`/accommodations/${card.id}`}>
                    <Card {...card} />
                </Link>
            ))}
        </div>
    )
}

export default Homepage;