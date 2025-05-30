import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import '../utils/prism-codefr.js'; // Import your CodeFR grammar

// Helper component for CodeFR specific highlighting logic within a <code> tag
export const CodeFRBlockContent = ({ children }) => {
  const codeRef = useRef(null);
  const rawCode = String(children || '').trim();

  useEffect(() => {
    const applyHighlighting = () => {
      if (codeRef.current && Prism.languages.codefr) {
        try {
          const codeToHighlight = rawCode.replace(/\n$/, '');
          
          const highlightedHtml = Prism.highlight(codeToHighlight, Prism.languages.codefr, 'codefr');
          
          codeRef.current.innerHTML = highlightedHtml;
          
          if (codeRef.current.querySelectorAll('.token').length === 0 && codeToHighlight.length > 0) {
            
            const lines = codeToHighlight.split('\n');
            const formattedHtml = lines.map(line => {
              return line
                .replace(/(Variable|Constante|Tableau|Debut|Fin|Pour|Si|Sinon|Alors|Tantque|Repeter)/gi, '<span class="token keyword">$1</span>')
                .replace(/(".+?")/g, '<span class="token string">$1</span>')
                .replace(/(\b\d+\b)/g, '<span class="token number">$1</span>');
            }).join('<br>');
            codeRef.current.innerHTML = formattedHtml;
          } else {
            // Prism.highlight produced tokens, or no fallback was needed.
          }
        } catch (error) {
          console.error('Error highlighting CodeFR code:', error);
          codeRef.current.textContent = rawCode; // Fallback to raw code on error
        }
      }
    };
    // Call applyHighlighting directly without timeouts for now
    applyHighlighting();
  }, [rawCode]);

  return <code ref={codeRef} className="language-codefr">{rawCode}</code>;
};

// Component for CodeFR blocks (container, label, and highlighting via CodeFRBlockContent)
export const CodeFRBlock = ({ children }) => {
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

// Component for standard language code blocks (e.g., JS, Python)
export const StandardBlock = ({ language, children }) => {
  const codeRef = useRef(null);
  const codeText = String(children || ''); 

  useEffect(() => {
    if (codeRef.current && language && Prism.languages[language]) {
      const codeToHighlight = codeText.replace(/\n$/, '');
      const highlightedHtml = Prism.highlight(codeToHighlight, Prism.languages[language], language);
      codeRef.current.innerHTML = highlightedHtml;
    } else if (codeRef.current) {
      codeRef.current.textContent = codeText;
    }
  }, [codeText, language]);

  return (
    <div className="standard-code-container" style={{ position: 'relative' }}>
      <pre className={`language-${language}`}>
        <code ref={codeRef} className={`language-${language}`}>
          {!Prism.languages[language] ? codeText : ''}
        </code>
      </pre>
    </div>
  );
};

// Custom 'pre' renderer for ReactMarkdown
export const PreRenderer = (props) => {
  // props.children is the <code> element passed by ReactMarkdown
  const { node, children: codeElement, ...rest } = props;

  

  // Check if codeElement is a valid React element with props
  if (!codeElement || typeof codeElement !== 'object' || !codeElement.props) {
    
    // Render the original children (codeElement) inside the pre if it's somewhat renderable, or just rest if not.
    return <pre {...rest}>{codeElement || null}</pre>;
  }

  
  
  const className = codeElement.props.className;
  

  const languageMatch = typeof className === 'string' && className.match(/language-(\S+)/);
  const language = languageMatch ? languageMatch[1] : null;
  

  const codeContentFromInnerProps = codeElement.props.children;
  // Ensure codeContent is a string. ReactMarkdown might pass an array if there are inline elements within the code string (rare for fenced blocks).
  const codeContent = Array.isArray(codeContentFromInnerProps) ? codeContentFromInnerProps.join('') : String(codeContentFromInnerProps || '');
  

  if (language === 'codefr' || language === 'codefr-direct') {
    
    return <CodeFRBlock>{codeContent}</CodeFRBlock>;
  }
  if (language) {
    
    return <StandardBlock language={language}>{codeContent}</StandardBlock>;
  }
  
  
  // In this fallback, we render the original codeElement (which is the <code> tag and its content) inside our <pre>
  return <pre {...rest}>{codeElement}</pre>; 
};

export const markdownComponents = {
  pre: PreRenderer,
  // You can add other custom renderers here if needed, e.g., for headings, links, etc.
};
