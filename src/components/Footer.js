import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="has-text-centered">
          <div className="copyright">
            &copy; {new Date().getFullYear()} CodeFr. Tous droits réservés.
          </div>
          
          <div className="developer-info">
            <div className="developer-name">Développé par Normich ITOUA</div>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/normich-itoua-27218bb2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon" 
                aria-label="LinkedIn"
              >
                <span className="icon">
                  <i className="fab fa-linkedin"></i>
                </span>
              </a>
              <a 
                href="https://github.com/nitoua-21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon" 
                aria-label="GitHub"
              >
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
              </a>
              <a 
                href="https://x.com/ItouaNormich" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon" 
                aria-label="X (Twitter)"
              >
                <span className="icon">
                  <i className="fab fa-x-twitter"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
