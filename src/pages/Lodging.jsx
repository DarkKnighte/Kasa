import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import logements from '../../data.json';
import Star from '../components/Star';
import './Lodging.scss';

const Lodging = () => {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="lodging-page">
      {logement.pictures && <Carousel pictures={logement.pictures} />}
      {/* @TODO: Ajouter les détails du logement (avec des composants personnalisées si voulues). */}
      {/* @TODO: Ajouter la description et les équipements du logement via les collapses. */}
      <div className='lodging-page_stars'>
        <Star rating={logement.rating} />
      </div>

      <div className="lodging-page_collapses">
        <Collapse title={"Description"}><p>{logement.description}</p></Collapse>
        <Collapse title={"Equipements"}><ul>{logement.equipments.map(equipment => <li key={equipment}>{equipment}</li>)}</ul></Collapse>
      </div>
    </div>
  );
};

export default Lodging;