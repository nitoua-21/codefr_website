/**
 * CodeFR language definition for Prism.js
 * Based on the CodeFR language specification
 */

import Prism from 'prismjs';

// Define the CodeFR language
Prism.languages.codefr = {
  'comment': [
    {
      pattern: /\/\/.*$/m,
      greedy: true
    },
    {
      pattern: /\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true
    }
  ],
  'string': {
    pattern: /"(?:\\.|[^\\"])*"/,
    greedy: true
  },
  'keyword': [
    {
      // Program structure keywords
      pattern: /\b(?:Debut|Fin|Importer|Depuis|Module)\b/i,
      alias: 'structure'
    },
    {
      // Variable declaration and types
      pattern: /\b(?:Variable|Variables|Constante|Tableau)\b/i,
      alias: 'declaration'
    },
    {
      // Data types
      pattern: /\b(?:Entier|Decimal|Chaine|Logique)\b/i,
      alias: 'type'
    },
    {
      // Control structures
      pattern: /\b(?:Si|Alors|Sinon|SinonSi|FinSi|Selon|Cas|FinSelon|TantQue|Faire|FinTantQue|Pour|De|A|FinPour|Interrompre|Suivant)\b/i, // Added i
      alias: 'control'
    },
    {
      // Function related
      pattern: /\b(?:Fonction|FinFonction|Retourner)\b/i, // Added i
      alias: 'function-keyword'
    }
  ],
  'boolean': /\b(?:Vrai|Faux)\b/i, // Added i
  'function': [ // This is for function calls and built-ins
    {
      // Built-in functions
      pattern: /\b(?:Ecrire|Lire|Racine|Sin|Cos|Tan|Log|Log10|Arrondi|Abs|Ent|Alea|Longueur|Concatener|Comparer|Recherche|Copie)\b/i,
      alias: 'builtin'
    },
    {
      // User-defined function calls
      pattern: /\b[a-z_]\w*(?=\s*\()/i, // Matches 'funcName('
      alias: 'user-function'
    }
  ],
  // General identifiers, matched after specific keywords and function calls
  'constant': {
    pattern: /\b[A-Z_][A-Z0-9_]*\b/
  },
  'variable': {
    pattern: /\b[a-z_]\w*\b/i
  },
  'operator': [
    // Logical operators
    /\b(?:Et|Ou|Non|Oux|Mod)\b/i,
    // Arithmetic and comparison operators
    /[+\-*\/^=<>!]=?|[&|~]/
  ],
  'number': /\b\d+(?:\.\d+)?\b/,
  'punctuation': /[(){}\[\]:;,]/
};

// Add special handling for function declarations
Prism.languages.insertBefore('codefr', 'function', {
  'function-definition': {
    pattern: /\bFonction\s+([a-z_]\w*)\s*\(/i,
    inside: {
      'keyword': /\bFonction\b/i,
      'function': /[a-z_]\w*/i
    }
  }
});

// Add special handling for variable declarations
Prism.languages.insertBefore('codefr', 'keyword', {
  'variable-declaration': {
    pattern: /\b(?:Variable|Variables)\s+[a-z_]\w*(?:\s*,\s*[a-z_]\w*)*\s*:\s*(?:Entier|Decimal|Chaine|Logique)\b/i,
    inside: {
      'keyword': /\b(?:Variable|Variables)\b/i,
      'variable': /\b[a-z_]\w*\b/i,
      'punctuation': /[,:]/,
      'type': /\b(?:Entier|Decimal|Chaine|Logique)\b/i
    }
  },
  'constant-declaration': {
    pattern: /\bConstante\s+[A-Z_][A-Z0-9_]*\s*=\s*(?:\d+(?:\.\d+)?|"(?:\\.|[^\\"])*"|Vrai|Faux)/i,
    inside: {
      'keyword': /\bConstante\b/i,
      'constant': /\b[A-Z_][A-Z0-9_]*\b/,
      'operator': /=/,
      'number': /\b\d+(?:\.\d+)?\b/,
      'string': {
        pattern: /"(?:\\.|[^\\"])*"/,
        greedy: true
      },
      'boolean': /\b(?:Vrai|Faux)\b/i
    }
  },
  'array-declaration': {
    pattern: /\bTableau\s+[a-z_]\w*\s*\[\s*\^?\d+\s*\](?:\s*\[\s*\^?\d+\s*\])?:\s*(?:Entier|Decimal|Chaine|Logique)\b/i,
    inside: {
      'keyword': /\bTableau\b/i,
      'variable': /\b[a-z_]\w*\b/i,
      'number': /\b\d+\b/,
      'punctuation': /[\[\],:]/,
      'type': /\b(?:Entier|Decimal|Chaine|Logique)\b/i
    }
  }
});

// Add codefr-direct as an alias for codefr
Prism.languages['codefr-direct'] = Prism.languages.codefr;

// Export the Prism instance with CodeFR language
export default Prism;
