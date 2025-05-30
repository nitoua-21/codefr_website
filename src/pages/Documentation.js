import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import '../styles/Documentation.css';
//import '../styles/prism-codefr.css';
import '../styles/CodeFRSyntax.css';
import '../styles/inline-code.css';
import Prism from '../utils/prism-codefr';
import { processCodeFRContent } from '../utils/code-utils';
// Documentation sections metadata
const documentationSections = [
  { id: 'introduction', title: 'Introduction', file: 'introduction.md' },
  { id: 'structure', title: 'Structure d\'un programme', file: 'structure.md' },
  { id: 'variables', title: 'Types de Données, Variables et Constantes', file: 'variables.md' },
  { id: 'input_output', title: 'Entrées / Sorties', file: 'input_output.md' },
  { id: 'operators', title: 'Opérateurs', file: 'operators.md' },
  { id: 'control', title: 'Structures de Contrôle', file: 'control.md' },
  { id: 'array', title: 'Tableaux', file: 'array.md' },
  { id: 'functions', title: 'Fonctions', file: 'functions.md' },
  { id: 'modules', title: 'Modules', file: 'modules.md' },
  { id: 'comments', title: 'Commentaires', file: 'comments.md' },
  { id: 'install_guide', title: 'Guide d\'installation et d\'utilisation', file: 'install_guide.md' }
];

// Component for inline code
const InlineCode = ({ children }) => {
  return <code className="doc-inline-code">{String(children)}</code>;
};

// Helper component for CodeFR specific highlighting logic within a <code> tag
const CodeFRBlockContent = ({ children }) => {
  const codeRef = useRef(null);
  // Always convert to string and trim to ensure consistent formatting
  const rawCode = String(children || '').trim();

  useEffect(() => {
    // Function to apply highlighting
    const applyHighlighting = () => {
      if (codeRef.current && Prism.languages.codefr) {
        try {
          // Prism typically expects the code string without a final trailing newline for .highlight()
          const codeToHighlight = rawCode.replace(/\n$/, '');
          
          // Apply Prism.js highlighting
          const highlightedHtml = Prism.highlight(codeToHighlight, Prism.languages.codefr, 'codefr');
          codeRef.current.innerHTML = highlightedHtml;
          
          // If there are no tokens, manually apply basic formatting
          if (codeRef.current.querySelectorAll('.token').length === 0) {
            const lines = codeToHighlight.split('\n');
            const formattedHtml = lines.map(line => {
              // Apply basic keyword highlighting
              return line
                .replace(/(Variable|Constante|Tableau|Debut|Fin|Pour|Si|Sinon|Alors|Tantque|Repeter)/gi, '<span class="token keyword">$1</span>')
                .replace(/(".+?")/g, '<span class="token string">$1</span>')
                .replace(/(\b\d+\b)/g, '<span class="token number">$1</span>');
            }).join('<br>');
            codeRef.current.innerHTML = formattedHtml;
          }
        } catch (error) {
          console.error('Error highlighting CodeFR code:', error);
          // Fallback to displaying the raw content
          codeRef.current.textContent = rawCode;
        }
      }
    };

    // Apply highlighting immediately
    applyHighlighting();
    
    // Apply highlighting multiple times with increasing delays to ensure it works
    // This helps when Prism.js is loaded asynchronously or when content is initially hidden
    const timers = [
      setTimeout(applyHighlighting, 100),
      setTimeout(applyHighlighting, 500),
      setTimeout(applyHighlighting, 1000)
    ];
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [rawCode]); // Re-run effect if the raw code changes

  // The <code> tag is initially rendered empty by React.
  // useEffect then populates its innerHTML with Prism's output.
  // className="language-codefr" is kept so base styles for the <code> block apply.
  return <code ref={codeRef} className="language-codefr">{rawCode}</code>;
};

// Component for CodeFR blocks (container, label, and highlighting via CodeFRBlockContent)
const CodeFRBlock = ({ children }) => {
  // Ensure children is always a string
  const codeContent = String(children || '');
  
  return (
    <div className="codefr-container">
      <span className="codefr-label">CodeFR</span>
      <pre className="language-codefr">
        <CodeFRBlockContent key={codeContent}>{codeContent}</CodeFRBlockContent>
      </pre>
    </div>
  );
};

// A special component for handling codefr-direct blocks with inline highlighting
const InlineCodeFRDirectBlock = ({ content }) => {
  const codeRef = useRef(null);
  const codeContent = String(content || '').trim();
  
  useEffect(() => {
    if (codeRef.current) {
      try {
        const lines = codeContent.split('\n');
        const formattedHtml = lines.map(line => {
          // Apply basic keyword highlighting
          return line
            .replace(/(Variable|Constante|Tableau|Debut|Fin|Pour|Si|Sinon|Alors|Tantque|Repeter)/g, 
                '<span class="token keyword">$1</span>')
            .replace(/(".+?")/g, '<span class="token string">$1</span>')
            .replace(/(\b\d+\b)/g, '<span class="token number">$1</span>');
        }).join('<br>');
        codeRef.current.innerHTML = formattedHtml;
      } catch (error) {
        console.error('Error formatting CodeFR code:', error);
        codeRef.current.textContent = codeContent;
      }
    }
  }, [codeContent]);
  
  return (
    <div className="codefr-container">
      <span className="codefr-label">CodeFR</span>
      <pre className="language-codefr">
        <code ref={codeRef} className="language-codefr">{codeContent}</code>
      </pre>
    </div>
  );
};

// Regular component for directly typed codefr-direct blocks
const CodeFRDirectBlock = ({ children }) => {
  // This component will delegate to the inline component for consistency
  return <InlineCodeFRDirectBlock content={children} />;
};

// Component for standard language code blocks (e.g., JS, Python)
const StandardBlock = ({ language, children }) => {
  const codeRef = useRef(null);
  // Ensure children is always a string, even if null or undefined initially
  const codeText = String(children || ''); 

  useEffect(() => {
    if (codeRef.current && language && Prism.languages[language]) {
      // Use Prism.highlight to generate HTML and set innerHTML for robustness
      const codeToHighlight = codeText.replace(/\n$/, ''); // Remove trailing newline for Prism
      const highlightedHtml = Prism.highlight(codeToHighlight, Prism.languages[language], language);
      codeRef.current.innerHTML = highlightedHtml;
    } else if (codeRef.current) {
      // Fallback for unknown languages or if Prism language definition is missing
      // Display raw text to prevent errors
      codeRef.current.textContent = codeText;
    }
  }, [codeText, language]);

  return (
    <div className="standard-code-container" style={{ position: 'relative' }}>
      {/* TODO: Add a copy button here */}
      <pre className={`language-${language}`}>
        {/* The <code> tag is initially empty or contains raw text; useEffect populates it */}
        <code ref={codeRef} className={`language-${language}`}>
          {/* Initial render with raw text for non-JS environments or as fallback */}
          {!Prism.languages[language] ? codeText : ''}
        </code>
      </pre>
    </div>
  );
};

// Main 'code' renderer for ReactMarkdown
const CodeBlock = ({ inline, className, children, node }) => {
  if (inline) {
    // This is the correct path for `text` when react-markdown identifies it as inline.
    return <InlineCode>{String(children)}</InlineCode>;
  }
  
  // Check if this is a codefr-direct block
  const isCodeFRDirect = className && className.includes('language-codefr-direct');
  
  if (isCodeFRDirect) {
    // For codefr-direct blocks, directly apply the CodeFRBlock component
    return <code className="language-codefr">{String(children)}</code>;
  }
  
  // For other block code (when react-markdown sets inline=false), 
  // just return the basic <code>. The 'pre' renderer will handle structure.
  return <code className={className}>{String(children)}</code>;
};

const DocumentationSection = ({ section, isActive, sectionRef, theme, sidebarOpen }) => {
  const [content, setContent] = useState('');
  const [processedContent, setProcessedContent] = useState('');
  const sectionContentRef = useRef(null);

  // First, fetch the raw markdown content
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/docs/${section.file}`)
      .then(response => response.text())
      .then(text => {
        setContent(text);
        
        // Process the content to handle CodeFR blocks directly
        // This regex finds all code blocks with the codefr or codefr-direct language identifier
        const codefrBlockRegex = /```(codefr|codefr-direct)([\s\S]*?)```/g;
        
        // Replace each CodeFR block with our special marker
        const processed = text.replace(codefrBlockRegex, (match, langId, codeContent) => {
          // Always use codefr-direct as our special marker
          return '```codefr-direct\n' + codeContent.trim() + '\n```';
        });
        
        setProcessedContent(processed);
      })
      .catch(error => console.error(`Error loading ${section.file}:`, error));
  }, [section.file]);

  // Apply syntax highlighting to CodeFR blocks when content is loaded or section becomes active
  useEffect(() => {
    // Function to apply highlighting to all CodeFR blocks in the section
    const applyHighlighting = () => {
      if (sectionContentRef.current) {
        const codeBlocks = sectionContentRef.current.querySelectorAll('pre > code[class*="language-"]');
        codeBlocks.forEach(codeBlock => {
          const codeText = codeBlock.textContent || ''; // Ensure textContent is not null
          const languageClass = Array.from(codeBlock.classList).find(cls => cls.startsWith('language-'));
          const language = languageClass ? languageClass.substring('language-'.length) : null;

          if (!language) return; // Skip if no language class found

          try {
            let highlightedHtml;
            if (Prism.languages[language]) {
              highlightedHtml = Prism.highlight(codeText, Prism.languages[language], language);
              codeBlock.innerHTML = highlightedHtml;
            } else if (language === 'codefr') {
              // Fallback for CodeFR if Prism.languages.codefr is not (yet) available or failed
              // This is the basic keyword highlighting from CodeFRBlockContent
              const lines = codeText.split('\n');
              highlightedHtml = lines.map(line => {
                return line
                  .replace(/(Variable|Constante|Tableau|Debut|Fin|Pour|Si|Sinon|Alors|Tantque|Repeter)/gi,
                    '<span class="token keyword">$1</span>')
                  .replace(/(".+?")/g, '<span class="token string">$1</span>')
                  .replace(/(\b\d+\b)/g, '<span class="token number">$1</span>');
              }).join('<br>');
              codeBlock.innerHTML = highlightedHtml;
            } else {
              // For other unknown languages, display raw text
              codeBlock.textContent = codeText;
              return; // Skip adding prism-highlighted class
            }

            // Check if CodeFR highlighting (Prism or fallback) produced no tokens, then apply basic again
            // This is a safety net specifically for CodeFR if Prism tokenization was weak
            if (language === 'codefr' && codeBlock.querySelectorAll('.token').length === 0 && codeText.length > 0) {
              const lines = codeText.split('\n');
              const fallbackHtml = lines.map(line => {
                return line
                  .replace(/(Variable|Constante|Tableau|Debut|Fin|Pour|Si|Sinon|Alors|Tantque|Repeter)/gi,
                    '<span class="token keyword">$1</span>')
                  .replace(/(".+?")/g, '<span class="token string">$1</span>')
                  .replace(/(\b\d+\b)/g, '<span class="token number">$1</span>');
              }).join('<br>');
              if (codeBlock.innerHTML !== fallbackHtml) { // Avoid infinite loop if fallback is the same
                 codeBlock.innerHTML = fallbackHtml;
              }
            }
            codeBlock.classList.add('prism-highlighted'); // Mark as highlighted
          } catch (error) {
            console.error(`Error highlighting block (language: ${language}):`, error);
            codeBlock.textContent = codeText; // Fallback to raw text on error
          }
        });
      }
    };

    // Apply highlighting when section becomes active or content changes
    if (isActive && processedContent) {
      // Apply highlighting immediately
      applyHighlighting();
      
      // Also apply with delays to ensure it works with async loading
      const timers = [
        setTimeout(applyHighlighting, 100),
        setTimeout(applyHighlighting, 500),
        setTimeout(applyHighlighting, 1000)
      ];
      
      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [processedContent, isActive, theme, sidebarOpen]); // Re-run when content, activity, or theme changes

  return (
    <div 
      key={section.id} 
      id={section.id} 
      ref={sectionRef}
      className={`doc-section ${isActive ? 'is-active' : ''}`}
    >
      <div ref={sectionContentRef}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code: (props) => <CodeBlock {...props} theme={theme} />,
          pre: ({ node, children, ...props }) => { // 'node' is the HAST node for the <pre> element.
            // 'children' is the React Element output of our 'CodeBlock' renderer (a single <code> element).

            // AST-based heuristic for misidentified inline code:
            let isMisidentifiedInline = false;
            let misidentifiedInlineContent = '';

            if (node && node.children && node.children.length === 1 && node.children[0].tagName === 'code') {
              const potentialCodeNode = node.children[0];
              const position = potentialCodeNode.position;
              const properties = potentialCodeNode.properties || {};
              const classNames = (properties.className || []).join(' ');
              const firstChild = potentialCodeNode.children && potentialCodeNode.children[0];

              const isSingleLine = position && position.start.line === position.end.line;
              const hasNoLangClass = !classNames.includes('language-');
              const textContent = (firstChild && firstChild.type === 'text') ? firstChild.value : null;
              const hasNoInternalNewlines = textContent !== null && !textContent.includes('\n');
              
              if (isSingleLine && hasNoLangClass && hasNoInternalNewlines && textContent !== null) {
                isMisidentifiedInline = true;
                misidentifiedInlineContent = textContent;
              }
            }

            if (isMisidentifiedInline) {
              return <InlineCode>{misidentifiedInlineContent.trim()}</InlineCode>;
            }

            // If the AST heuristic didn't identify it as inline, proceed with block rendering logic.
            // We still need to get language from the React 'children' (the <code> element from CodeBlock)
            // for CodeFR-specific styling, as the AST check above is only for the inline heuristic.
            let reactCodeElement = null;
            try {
              reactCodeElement = React.Children.only(children);
            } catch (e) {
              return <pre {...props}>{children}</pre>; // Fallback
            }

            if (!React.isValidElement(reactCodeElement) || reactCodeElement.type !== 'code') {
              return <pre {...props}>{children}</pre>; // Fallback
            }

            const reactCodeContent = reactCodeElement.props.children;
            const reactCodeClassName = reactCodeElement.props.className || '';
            const langMatch = /language-(\w+)/.exec(reactCodeClassName);
            const language = langMatch ? langMatch[1] : null;
            
            // Check if this is likely a CodeFR block based on content, even if language tag is missing
            const codeContentStr = String(reactCodeContent || '');
            const hasCodeFRKeywords = (
              codeContentStr.includes('Variable') ||
              codeContentStr.includes('Debut') ||
              codeContentStr.includes('Fin') ||
              codeContentStr.includes('Ecrire') ||
              codeContentStr.includes('Lire') ||
              (codeContentStr.includes('Si') && codeContentStr.includes('Alors'))
            );
            
            // Single, consolidated handler for codefr-direct blocks
            if (language === 'codefr-direct') {
              // Always use CodeFRBlock for codefr-direct blocks for consistency
              return <CodeFRBlock>{reactCodeContent}</CodeFRBlock>;
            }
            
            // Force language to be 'codefr' if it contains CodeFR keywords
            const effectiveLanguage = (language === 'codefr' || hasCodeFRKeywords) ? 'codefr' : language;

            if (effectiveLanguage === 'codefr') {
              return <CodeFRBlock>{reactCodeContent}</CodeFRBlock>;
            } else if (effectiveLanguage) { // For other languages like 'javascript', 'python', etc.
              return <StandardBlock language={effectiveLanguage}>{reactCodeContent}</StandardBlock>;
            } else { // For code blocks with no language specified (e.g., ```text```)
              // We use 'children' here because it's the original <code...> element from CodeBlock,
              // which might have no className if no language was specified.
              // The <pre> gets the original props from react-markdown.
              return <pre {...props}>{children}</pre>;
            }
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
        {processedContent || content}
      </ReactMarkdown>
      </div>
    </div>
  );
};

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [theme, setTheme] = useState('light');
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const toggleButtonRef = useRef(null);
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

  // Effect to handle body scroll based on sidebar state and screen width
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      if (sidebarOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    } else {
      // Always ensure scroll is enabled on desktop
      document.body.style.overflow = '';
    }
    // Cleanup function to reset body scroll on component unmount
    return () => {
      document.body.style.overflow = '';
    }
  }, [sidebarOpen]); // Re-run when sidebarOpen changes

  // Effect to dynamically position the toggle button
  useEffect(() => {
    const button = toggleButtonRef.current;
    if (!button) return;

    const updateButtonPosition = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        if (sidebarOpen) {
          const sidebarWidth = Math.min(window.innerWidth * 0.85, 320); // Mobile sidebar width
          button.style.left = `${sidebarWidth + 10}px`; // 10px to the right of sidebar
        } else {
          button.style.left = '15px'; // Near left edge when closed
        }
      } else {
        // Desktop positioning
        if (sidebarOpen) {
          // Assuming sidebar takes up roughly 25% of viewport width (adjust if container is not full width)
          // This is an approximation. A more precise calculation might involve getting .container's offset and width.
          // For instance, if the .container has a max-width and is centered.
          // Let's use a value that likely places it right of a typical desktop sidebar.
          // Example: If container is 1152px (Bulma default for $desktop), 25% is 288px.
          // We need to calculate based on actual container, or use a simpler approach.
          // For now, let's use a calc value that might work for a common desktop layout.
          // A more robust way would be to get the actual sidebar column's getBoundingClientRect().right.
          button.style.left = `calc(${document.querySelector('.sidebar.column.is-3')?.offsetWidth || (window.innerWidth * 0.25)}px + 15px)`;
        } else {
          button.style.left = '15px'; // Near left edge when closed
        }
      }
    };

    updateButtonPosition(); // Initial position update

    window.addEventListener('resize', updateButtonPosition);
    return () => {
      window.removeEventListener('resize', updateButtonPosition);
    };
  }, [sidebarOpen]); // Re-run when sidebarOpen changes

  // Handle window resize for sidebar default state
  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state based on current window size
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array: runs only on mount and unmount

  const toggleSidebar = () => {
    const newSidebarState = !sidebarOpen;
    setSidebarOpen(newSidebarState);
    
    if (window.innerWidth <= 768) {
      document.body.style.overflow = newSidebarState ? 'hidden' : '';
    }
  };
  
  // Close sidebar when clicking on a menu item on mobile
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    
    // Auto-close sidebar on mobile when clicking a menu item
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <div className="documentation-page">
      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && window.innerWidth <= 768 && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
      
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
          {/* Sidebar Toggle Button - New Position */}
          <button 
            ref={toggleButtonRef} 
            className="button is-small sidebar-toggle"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? '«' : '»'}
          </button>
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
                        handleMenuItemClick(section.id);
                      }}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
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
                sidebarOpen={sidebarOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
