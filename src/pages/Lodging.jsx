import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
// import Carousel from '../components/Carousel'; // À importer si vous avez des données
// import Collapse from '../components/Collapse'; // À importer si vous avez des données
// import logements from '../data/logements.json'; // Exemple de source de données
import '../styles/Lodging.scss'; // Assurez-vous que ce fichier SCSS existe ou créez-le

const Lodging = () => {
  const { id } = useParams();
  // const logement = logements.find(l => l.id === id); // Logique pour trouver le logement

  // if (!logement) {
  //   return <Navigate to="/404" replace />; // Redirige vers la page d'erreur si le logement n'est pas trouvé
  // }

  return (
    <div className="lodging-page">
      {/* <Carousel pictures={logement.pictures} /> */}
      <h1>Logement ID: {id}</h1>
      <p>Détails pour le logement avec l'ID: {id}.</p>
      {/* Ici, vous afficherez les détails du logement, tags, rating, host, collapses pour description et équipements */}
    </div>
  );
};

export default Lodging;
