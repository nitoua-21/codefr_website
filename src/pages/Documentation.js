import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import '../styles/Documentation.css';
import '../styles/prism-codefr.css';
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

  // No debug logging needed

  useEffect(() => {
    if (codeRef.current && Prism.languages.codefr) {
      try {
        // Prism typically expects the code string without a final trailing newline for .highlight()
        const codeToHighlight = rawCode.replace(/\n$/, '');
        
        // Apply Prism.js highlighting
        const highlightedHtml = Prism.highlight(codeToHighlight, Prism.languages.codefr, 'codefr');
        codeRef.current.innerHTML = highlightedHtml;
        
        // Ensure the token classes are properly applied
        setTimeout(() => {
          // If there are no tokens, manually apply token classes
          if (codeRef.current.querySelectorAll('.token').length === 0) {
            // Force re-highlighting
            codeRef.current.innerHTML = Prism.highlight(codeToHighlight, Prism.languages.codefr, 'codefr');
            
            // If still no tokens, manually apply basic formatting
            if (codeRef.current.querySelectorAll('.token').length === 0) {
              const lines = codeToHighlight.split('\n');
              const formattedHtml = lines.map(line => {
                // Apply basic keyword highlighting
                return line
                  .replace(/(Variable|Constante|Tableau|Debut|Fin|Pour|Si|Sinon|Alors|Tantque|Repeter)/g, '<span class="token keyword">$1</span>')
                  .replace(/(".+?")/g, '<span class="token string">$1</span>')
                  .replace(/(\b\d+\b)/g, '<span class="token number">$1</span>');
              }).join('<br>');
              codeRef.current.innerHTML = formattedHtml;
            }
          }
        }, 0);
      } catch (error) {
        console.error('Error highlighting CodeFR code:', error);
        // Fallback to displaying the raw content
        codeRef.current.textContent = rawCode;
      }
    }
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
        <CodeFRBlockContent>{codeContent}</CodeFRBlockContent>
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

const DocumentationSection = ({ section, isActive, sectionRef, theme }) => {
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

  // Apply Prism.js highlighting to all CodeFR code blocks after rendering
  useEffect(() => {
    if (sectionContentRef.current && processedContent) {
      // Find all CodeFR code blocks in the rendered content
      const codefrBlocks = sectionContentRef.current.querySelectorAll('code.language-codefr');
      
      // Apply Prism.js highlighting to each block
      codefrBlocks.forEach(codeBlock => {
        if (codeBlock && !codeBlock.classList.contains('prism-highlighted')) {
          const codeText = codeBlock.textContent;
          if (codeText && Prism.languages.codefr) {
            const highlightedHtml = Prism.highlight(codeText, Prism.languages.codefr, 'codefr');
            codeBlock.innerHTML = highlightedHtml;
            codeBlock.classList.add('prism-highlighted'); // Mark as highlighted to avoid re-processing
          }
        }
      });
    }
  }, [processedContent, isActive]); // Re-run when content changes or section becomes active

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
            
            // Handle codefr-direct blocks using the InlineCodeFRDirectBlock component
            if (language === 'codefr-direct') {
              return <InlineCodeFRDirectBlock content={reactCodeContent} />;
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
