import React, { useState } from 'react';
import './Collapse.scss';
import arrow from '../assets/arrow_back.svg';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <img src={arrow} alt="dérouler" className={`collapse__icon ${isOpen ? 'collapse__icon--open' : ''}`} />
      </div>
      {isOpen && <div className="collapse__content">{ children }</div>}
    </div>
  );
};

export default Collapse;
