import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <div className="copyright has-text-centered" style={{ width: '100%' }}>
          &copy; {new Date().getFullYear()} CodeFr. Tous droits réservés.
          <a href="https://github.com/nitoua-21/CodeFr" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 12, verticalAlign: 'middle', color: '#24292e' }} aria-label="CodeFr sur GitHub">
            <span className="icon is-medium">
              <i className="fab fa-github fa-lg" style={{ verticalAlign: 'middle', color: '#fff' }}></i>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
