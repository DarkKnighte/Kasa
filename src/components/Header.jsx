// @TODO: #3 - Créer la barre de navigation. Utiliser des NavLink (de react-router).
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/header_logo.png'; // Décommentez si vous avez un logo
import './Header.scss'; // Assurez-vous que ce fichier SCSS existe ou créez-le

const Header = () => {
  return (
    <header className="header">
      {<img src={logo} alt="Kasa Logo" className="header-logo" />}
      <nav className="header-nav">
        <NavLink to="/" className="nav-link">Accueil</NavLink>
        <NavLink to="/about" className="nav-link">A Propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
