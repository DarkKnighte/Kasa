import React from 'react';
import emptyStar from '../assets/emptyStar.svg';
import fullStar from '../assets/fullStar.svg';

function Star({ rating }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <img
            key={i}
            src={i <= rating ? fullStar : emptyStar}
            alt={i <= rating ? 'étoile pleine' : 'étoile vide'}
            className="star"
            />
        );
    }
    return <div className="star-rating">{stars}</div>;
}

export default Star;
