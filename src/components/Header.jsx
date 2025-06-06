// @TODO: #3 - Créer la barre de navigation. Utiliser des NavLink (de react-router).
import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../assets/logo.png'; // Décommentez si vous avez un logo
import './Header.scss'; // Assurez-vous que ce fichier SCSS existe ou créez-le

const Header = () => {
  return (
    <header className="header">
      {/* <img src={logo} alt="Kasa Logo" className="header__logo" /> */}
      <h1 className="header__logo-text">KASA</h1> {/* Alternative texte pour le logo */}
      <nav className="header__nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>Accueil</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>A Propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
