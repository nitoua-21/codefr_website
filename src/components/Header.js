import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState('light');
  
  // Check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      setTheme(savedTheme);
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };
  
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <span className="has-text-weight-bold is-size-4">CodeFr</span>
          </Link>
          
          <a 
            role="button" 
            className={`navbar-burger ${isActive ? 'is-active' : ''}`} 
            aria-label="menu" 
            aria-expanded="false" 
            onClick={() => setIsActive(!isActive)}
            href="#"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/" className="navbar-item">Accueil</Link>
            <Link to="/#about" className="navbar-item">À propos</Link>
            <Link to="/documentation" className="navbar-item">Documentation</Link>
            <a href="/#download" className="navbar-item">Télécharger</a>
            
            <div className="navbar-item">
              <button 
                className="button is-rounded is-small"
                onClick={toggleTheme}
                style={{ 
                  backgroundColor: theme === 'light' ? '#3fd2c7' : '#99ddff',
                  color: theme === 'light' ? 'white' : '#333'
                }}
              >
                <span className="icon">
                  <i className={`fas fa-${theme === 'light' ? 'moon' : 'sun'}`}></i>
                </span>
                <span>{theme === 'light' ? 'Mode sombre' : 'Mode clair'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
