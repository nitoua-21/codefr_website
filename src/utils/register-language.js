/**
 * Register the CodeFR language with SyntaxHighlighter
 */

import { Light as LightSyntaxHighlighter } from 'react-syntax-highlighter';
import codefrSyntax from './codefr-syntax';

// Register CodeFR as a language for SyntaxHighlighter
LightSyntaxHighlighter.registerLanguage('codefr', () => codefrSyntax);

// Export a function to handle special characters in CodeFR code blocks
export const processCodeFRContent = (code) => {
  // Ensure literal '\n' characters are preserved and not executed as newlines
  return code.replace(/\\n/g, '\\\\n');
};
