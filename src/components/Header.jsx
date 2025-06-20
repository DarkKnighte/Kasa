import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/header_logo.png';
import './Header.scss';

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