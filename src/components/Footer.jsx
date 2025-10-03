import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/footer_logo.png';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            {<img src={logo} alt="Kasa Logo" className="footer-logo" />}
            <h2 className='footer-copyright'>© 2020 Kasa. All rights reserved</h2>
        </footer>
    );
};

export default Footer;
