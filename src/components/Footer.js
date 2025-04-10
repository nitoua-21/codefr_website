import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-links">
          <Link to="/">Accueil</Link>
          <Link to="/documentation">Documentation</Link>
          <a href="#features">Fonctionnalités</a>
          <a href="#download">Télécharger</a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} CodeFr. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
