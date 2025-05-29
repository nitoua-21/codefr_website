import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../styles/Documentation.css';
// Documentation sections metadata
const documentationSections = [
  { id: 'introduction', title: 'Introduction', file: 'introduction.md' },
  { id: 'structure', title: 'Structure d\'un programme', file: 'structure.md' },
  { id: 'control', title: 'Structures de Contrôle', file: 'control.md' }
];

const DocumentationSection = ({ section, isActive, sectionRef, theme }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/docs/${section.file}`)
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error(`Error loading ${section.file}:`, error));
  }, [section.file]);

  return (
    <div 
      key={section.id} 
      id={section.id} 
      ref={sectionRef}
      className={`doc-section ${isActive ? 'is-active' : ''}`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : 'codefr';
            return !inline ? (
              <div className="editor-container" style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
                <SyntaxHighlighter
                  style={theme === 'dark' ? oneDark : tomorrow}
                  language='codefr'
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          table({node, className, children, ...props}) {
            return (
              <div className="table-container" style={{ overflowX: 'auto', marginBottom: '1rem' }}>
                <table className="table is-bordered is-striped is-hoverable is-fullwidth" style={{ width: '100%', borderCollapse: 'collapse' }}>
                  {children}
                </table>
              </div>
            );
          },
          thead({node, children, ...props}) {
            return <thead style={{ backgroundColor: '#f5f5f5' }}>{children}</thead>;
          },
          th({node, children, ...props}) {
            return <th style={{ padding: '0.75rem', borderBottom: '2px solid #dbdbdb', textAlign: 'left' }}>{children}</th>;
          },
          td({node, children, ...props}) {
            return <td style={{ padding: '0.75rem', borderBottom: '1px solid #dbdbdb' }}>{children}</td>;
          },
          blockquote({node, className, children, ...props}) {
            return (
              <div className="notification is-info is-light">
                <blockquote {...props}>{children}</blockquote>
              </div>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [theme, setTheme] = useState('light');
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const sectionRefs = useRef({});
  
  // Initialize section refs
  useEffect(() => {
    documentationSections.forEach(section => {
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
      <div className="container mt-5">
        <div className="columns">
          {/* Sidebar */}
          <div className={`column is-3 sidebar ${sidebarOpen ? 'is-open' : 'is-closed'}`}>
            <aside className="menu">
              <p className="menu-label">Documentation</p>
              <ul className="menu-list">
                {documentationSections.map((section) => (
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
            <button 
              className="button is-small sidebar-toggle" 
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? '«' : '»'}
            </button>
          </div>
          
          {/* Main Content */}
          <div className={`column ${sidebarOpen ? 'is-9' : 'is-12'} content-area`}>
            {documentationSections.map((section) => (
              <DocumentationSection
                key={section.id}
                section={section}
                isActive={activeSection === section.id}
                sectionRef={sectionRefs.current[section.id]}
                theme={theme}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
