/**
 * Utility functions for handling code in the documentation
 */

/**
 * Process CodeFR code to handle special characters
 * - Ensures literal '\n' characters are preserved and not executed as newlines
 * - Handles other special characters that might need processing
 * 
 * @param {string} code - The raw code string
 * @returns {string} - The processed code string
 */
export const processCodeFRContent = (code) => {
  if (!code) return '';
  
  // Replace literal '\n' with '\\n' to display it as text rather than executing it
  //return code.replace(/\\n/g, '\\\\n');
  return code
};

/**
 * Determine if a code block should be treated as CodeFR
 * This helps with automatic language detection
 * 
 * @param {string} language - The language specified in the markdown
 * @param {string} code - The code content
 * @param {boolean} inline - Whether this is inline code
 * @returns {boolean} - Whether this should be treated as CodeFR code
 */
export const isCodeFRBlock = (language, code, inline) => {
  // If language is explicitly set to codefr, always return true
  if (language === 'codefr') return true;
  
  // For inline code, we need special handling
  if (inline) {
    // Don't treat simple inline code as CodeFR
    // Only if it contains a complete CodeFR statement or expression
    return false;
  }
  
  // If no language is specified for a code block, check for CodeFR keywords
  if (!language || language === '') {
    const codefrKeywords = [
      'Debut', 'Fin', 'Variable', 'Variables', 'Constante', 
      'Si', 'Alors', 'Sinon', 'FinSi', 'TantQue', 'Faire', 'FinTantQue',
      'Pour', 'FinPour', 'Ecrire', 'Lire', 'Fonction', 'FinFonction'
    ];
    
    // Check if the code contains multiple CodeFR keywords
    const keywordCount = codefrKeywords.reduce((count, keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'i');
      return count + (regex.test(code) ? 1 : 0);
    }, 0);
    
    // If it contains at least 2 CodeFR keywords, it's likely CodeFR code
    return keywordCount >= 2;
  }
  
  return false;
};
