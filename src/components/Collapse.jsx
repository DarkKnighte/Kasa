// @TODO: #5 - Créer le composant Collapse.
import React, { useState } from 'react';
<<<<<<< HEAD
import '../styles/Collapse.scss'; // Assurez-vous que ce fichier SCSS existe ou créez-le
=======
import './Collapse.scss'; // Assurez-vous que ce fichier SCSS existe ou créez-le
>>>>>>> 504a0babafd1665b6116871da3ba89b01006f09a

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <span className={`collapse__icon ${isOpen ? 'collapse__icon--open' : ''}`}>
          {/* Vous pouvez utiliser une icône SVG ou une image ici */}
          ▼
        </span>
      </div>
      {isOpen && <div className="collapse__content">{typeof content === 'string' ? <p>{content}</p> : content}</div>}
    </div>
  );
};

export default Collapse;
