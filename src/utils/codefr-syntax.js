/**
 * CodeFR syntax highlighting definition for SyntaxHighlighter
 * Based on the CodeFR language specification
 */

export default {
  // Set the display name for the language
  displayName: 'CodeFR',
  
  // Define the language's case sensitivity
  case_insensitive: true,
  
  // Define keywords and built-in functions
  keywords: {
    // Program structure keywords
    keyword: 'Debut Fin Importer Depuis Module',
    
    // Variable declaration and types
    declaration: 'Variable Variables Constante Tableau',
    
    // Data types
    type: 'Entier Decimal Chaine Logique',
    
    // Control structures
    control: 'Si Alors Sinon SinonSi FinSi Selon Cas FinSelon ' +
             'TantQue Faire FinTantQue Pour De A FinPour ' +
             'Interrompre Suivant',
    
    // Function related
    function: 'Fonction FinFonction Retourner',
    
    // I/O operations
    builtin: 'Ecrire Lire',
    
    // Boolean literals
    boolean: 'Vrai Faux',
    
    // Operators
    operator: 'Et Ou Non Oux Mod',
    
    // Built-in functions
    'built_in': 'Racine Sin Cos Tan Log Log10 Arrondi Abs Ent Alea ' +
                'Longueur Concatener Comparer Recherche Copie'
  },
  
  // Define symbols and operators
  contains: [
    // Comments
    {
      className: 'comment',
      begin: '//',
      end: '$',
      contains: ['phrasal']
    },
    {
      className: 'comment',
      begin: '/\\*',
      end: '\\*/',
      contains: ['phrasal'],
      relevance: 0
    },
    
    // Strings
    {
      className: 'string',
      begin: '"',
      end: '"',
      relevance: 0,
      contains: [
        {
          begin: '\\\\[\\s\\S]',
          relevance: 0
        }
      ]
    },
    
    // Numbers
    {
      className: 'number',
      begin: '\\b\\d+(\\.\\d+)?',
      relevance: 0
    },
    
    // Function definitions
    {
      className: 'function',
      beginKeywords: 'Fonction',
      end: 'FinFonction',
      contains: [
        {
          className: 'title',
          begin: '[a-zA-Z_]\\w*',
          relevance: 0
        },
        {
          className: 'params',
          begin: '\\(',
          end: '\\)',
          contains: [
            {
              className: 'variable',
              begin: '[a-zA-Z_]\\w*'
            },
            {
              className: 'punctuation',
              begin: ':'
            },
            {
              className: 'type',
              begin: 'Entier|Decimal|Chaine|Logique'
            }
          ]
        }
      ]
    },
    
    // Variable declarations
    {
      className: 'variable.declaration',
      begin: '\\b(Variable|Variables)\\s+[a-zA-Z_]\\w*\\s*:',
      relevance: 10
    },
    
    // Constants
    {
      className: 'variable.constant',
      begin: '\\bConstante\\s+[A-Z_][A-Z0-9_]*\\s*=',
      relevance: 10
    },
    
    // Array declarations
    {
      className: 'variable.array',
      begin: '\\bTableau\\s+[a-zA-Z_]\\w*\\s*\\[',
      relevance: 10
    },
    
    // Operators
    {
      className: 'operator',
      begin: '\\b(Et|Ou|Non|Oux|Mod)\\b|[+\\-*/^=<>!]=?',
      relevance: 0
    }
  ]
};
