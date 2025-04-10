import React, { forwardRef } from 'react';
import Editor from '@monaco-editor/react';

const DocSection = forwardRef(({ id, title, content, theme }, ref) => {
  return (
    <div id={id} className="doc-section" ref={ref}>
      <h2 className="title is-3">{title}</h2>
      {content.map((item, index) => {
        if (item.type === 'paragraph') {
          return <p key={index} dangerouslySetInnerHTML={{ __html: item.content }} />;
        } else if (item.type === 'heading') {
          return <h3 key={index} className="title is-4">{item.content}</h3>;
        } else if (item.type === 'subheading') {
          return <h4 key={index} className="title is-5">{item.content}</h4>;
        } else if (item.type === 'list') {
          return (
            <ul key={index}>
              {item.items.map((listItem, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: listItem }} />
              ))}
            </ul>
          );
        } else if (item.type === 'orderedList') {
          return (
            <ol key={index}>
              {item.items.map((listItem, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: listItem }} />
              ))}
            </ol>
          );
        } else if (item.type === 'code') {
          return (
            <div key={index} className="editor-container" style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
              <Editor
                height={item.height || "200px"}
                defaultLanguage="javascript"
                defaultValue={item.content}
                theme={theme === 'dark' ? 'vs-dark' : 'vs'}
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  fontSize: 14,
                  scrollBeyondLastLine: false,
                  lineNumbers: 'on',
                  renderLineHighlight: 'none',
                  hideCursorInOverviewRuler: true,
                  overviewRulerBorder: false,
                }}
              />
            </div>
          );
        } else if (item.type === 'output') {
          return (
            <pre key={index} className="output" style={{ 
              backgroundColor: '#f5f5f5', 
              padding: '10px', 
              borderRadius: '4px',
              marginBottom: '20px',
              color: '#333'
            }}>
              {item.content}
            </pre>
          );
        } else if (item.type === 'note') {
          return (
            <div key={index} className="notification is-info is-light">
              <p><em>{item.content}</em></p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
});

export default DocSection;
