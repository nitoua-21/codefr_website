import React, { useState, useEffect, useRef } from 'react';
import DocSection from '../components/DocSection';
import { documentationData } from '../data';
import '../styles/Documentation.css';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [theme, setTheme] = useState('light');
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const sectionRefs = useRef({});
  
  // Register refs for each section
  useEffect(() => {
    documentationData.forEach(section => {
      sectionRefs.current[section.id] = React.createRef();
    });
  }, []);

  // Scroll to section when activeSection changes
  useEffect(() => {
    if (sectionRefs.current[activeSection] && sectionRefs.current[activeSection].current) {
      sectionRefs.current[activeSection].current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [activeSection]);
  
  // Check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  
  // Listen for theme changes
  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setTheme(currentTheme);
    };
    
    // Create a MutationObserver to watch for data-theme attribute changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-theme'
        ) {
          handleThemeChange();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle window resize for sidebar
  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="documentation-page">
      {/* Documentation Header */}
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 mb-2" style={{ color : 'white' }}>Documentation CodeFr</h1>
            <p className="subtitle is-4 has-text-centered" style={{ color : 'white' }}>
              Documentation complète du langage de programmation CodeFr, incluant la syntaxe, les exemples et les tutoriels.
            </p>
          </div>
        </div>
      </section>
      
      {/* Documentation Content */}
      <section className="section">
        <div className="container">
          <div className="columns">
            {/* Sidebar Navigation */}
            <div className="column is-3">
              <div className="box sticky-sidebar">
                <button 
                  className="button is-fullwidth mb-3 is-flex is-align-items-center is-justify-content-space-between"
                  onClick={toggleSidebar}
                >
                  <span>Table des matières</span>
                  <span className="icon">
                    <i className={`fas fa-chevron-${sidebarOpen ? 'up' : 'down'}`}></i>
                  </span>
                </button>
                
                {sidebarOpen && (
                  <aside className="menu">
                    <ul className="menu-list">
                      {documentationData.map(section => (
                        <li key={section.id}>
                          <a 
                            href={`#${section.id}`}
                            className={activeSection === section.id ? 'is-active' : ''}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveSection(section.id);
                            }}
                          >
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </aside>
                )}
              </div>
            </div>
            
            {/* Documentation Content */}
            <div className="column is-9">
              <div className="box content has-text-left">
                {documentationData.map(section => (
                  <DocSection 
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    content={section.content}
                    ref={sectionRefs.current[section.id]}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
