import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel'; // À importer si vous avez des données
// import Collapse from '../components/Collapse'; // À importer si vous avez des données
import logements from '../../data.json'; // Exemple de source de données
import './Lodging.scss'; // Assurez-vous que ce fichier SCSS existe ou créez-le

const Lodging = () => {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id); // Logique pour trouver le logement

  if (!logement) {
     return <Navigate to="/404" replace />; // Redirige vers la page d'erreur si le logement n'est pas trouvé
  }

  return (
    <div className="lodging-page">
        {/* Carousel pour afficher les images du logement */}
        {logement.pictures && <Carousel pictures={logement.pictures} />}
        { /* @TODO: Ajouter les détails du logement (avec des composants personnalisées si voulues). */ }
        { /* @TODO: Ajouter la description et les équipements du logement via les collapses. */ }
    </div>
  );
};

export default Lodging;
