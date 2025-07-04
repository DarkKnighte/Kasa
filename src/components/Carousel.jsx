import React, { useState } from 'react';
import './Carousel.scss';

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return <div className="carousel-placeholder">Aucune image disponible</div>;
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const showControls = pictures.length > 1;

  return (
    <div className="carousel" style={{ backgroundImage: `url(${pictures[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '415px', borderRadius: '25px' }}>
      {showControls && <button onClick={goToPrevious} className="carousel__button carousel__button--prev" aria-label="Image précédente">&#10094;</button>}
      {showControls && <div className="carousel__counter">{currentIndex + 1}/{pictures.length}</div>}
      {showControls && <button onClick={goToNext} className="carousel__button carousel__button--next" aria-label="Image suivante">&#10095;</button>}
    </div>
  );
};

export default Carousel;
