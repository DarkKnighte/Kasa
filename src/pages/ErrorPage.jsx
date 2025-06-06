import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import '../styles/ErrorPage.scss'; // Assurez-vous que ce fichier SCSS existe ou créez-le
=======
import './ErrorPage.scss'; // Assurez-vous que ce fichier SCSS existe ou créez-le
>>>>>>> 504a0babafd1665b6116871da3ba89b01006f09a

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-page__link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
