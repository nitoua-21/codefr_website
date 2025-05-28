export const documentationData = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: [
      {
        type: 'paragraph',
        content: `CodeFR est un langage de programmation éducatif conçu pour rendre l’apprentissage de l’algorithmique et de la programmation plus accessible aux francophones, notamment aux débutants. Il permet d’écrire des programmes en utilisant une syntaxe claire et des mots-clés exclusivement en français, éliminant ainsi l’une des principales barrières d’entrée : la langue anglaise omniprésente dans les langages classiques comme Python, C ou Java.`
      },
      {
        type: 'paragraph',
        content: `CodeFR s’adresse à tous les apprenants : élèves, étudiants, enseignants, tuteurs, mais aussi professionnels en reconversion ou autodidactes. Il leur permet de se concentrer pleinement sur la logique algorithmique, sans être freinés par une syntaxe étrangère ou complexe.`
      },
      {
        type: 'paragraph',
        content: `Ce langage pédagogique agit comme une passerelle vers des langages plus techniques, tout en étant suffisamment complet pour développer des algorithmes avancés incluant des boucles, des fonctions, des modules, des structures de données comme les tableaux, et bien plus encore.`
      },
      {
        type: 'paragraph',
        content: `En outre, CodeFR contribue aussi à l’autonomisation des professionnels. Grâce à sa logique algorithmique claire, il favorise une meilleure compréhension des concepts fondamentaux qui sous-tendent des outils low-code comme Excel, Power BI ou Tableau, leur permettant ainsi d’utiliser ces outils de manière plus efficace, intuitive et indépendante.`
      },
      {
        type: 'paragraph',
        content: `En résumé, CodeFR vise à démocratiser la programmation en langue française, en rendant les concepts informatiques accessibles, concrets et motivants pour tous.`
      },
      {
        type: 'heading',
        content: 'Structure d\'un programme'
      },
      {
        type: 'paragraph',
        content: 'Un programme CodeFr est composé d\'une section principale qui commence par <strong>Debut</strong> et se termine par <strong>Fin</strong>. Entre ces deux mots-clés, vous écrivez les instructions de votre programme.'
      },
      {
        type: 'code',
        content: '// Structure de base d\'un programme CodeFr\nDebut\n    // Instructions du programme\nFin',
        height: '100px'
      },
      {
        type: 'subheading',
        content: 'Exemple - Hello World :'
      },
      {
        type: 'code',
        content: '// Mon premier programme\nDebut\n    Ecrire("Bonjour, monde !")\nFin',
        height: '100px'
      },
      {
        type: 'output',
        content: 'Bonjour, monde !'
      }
    ]
  },
  {
    id: 'variables',
    title: 'Types et Variables',
    content: [
      {
        type: 'heading',
        content: 'Types de données'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> CodeFr prend en charge plusieurs types de données fondamentaux qui permettent de stocker différentes sortes d\'informations.'
      },
      {
        type: 'list',
        items: [
          '<code>Entier</code> : Nombres entiers (ex: -3, 0, 42)',
          '<code>Decimal</code> : Nombres à virgule flottante (ex: 3.14, -0.5)',
          '<code>Booleen</code> : Valeurs logiques (Vrai ou Faux)',
          '<code>Caractere</code> : Un seul caractère (ex: \'a\', \'Z\', \'5\')',
          '<code>Chaine</code> : Séquence de caractères (ex: "Bonjour")',
        ]
      },
      {
        type: 'heading',
        content: 'Déclaration de variables'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> Une variable est un espace de stockage nommé qui contient une valeur d\'un type spécifique.'
      },
      {
        type: 'code',
        content: '// Syntaxe de déclaration\nVariable nom: Type\n\n// Exemples\nVariable age: Entier\nVariable prix: Decimal\nVariable estActif: Booleen\nVariable lettre: Caractere\nVariable nom: Chaine',
        height: '150px'
      },
      {
        type: 'heading',
        content: 'Affectation de valeurs'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> L\'affectation consiste à attribuer une valeur à une variable.'
      },
      {
        type: 'code',
        content: '// Syntaxe d\'affectation\nnom = valeur\n\n// Exemples\nage = 25\nprix = 19.99\nestActif = Vrai\nlettre = \'A\'\nnom = "Jean Dupont"',
        height: '150px'
      },
      {
        type: 'heading',
        content: 'Déclaration et affectation combinées'
      },
      {
        type: 'code',
        content: '// Syntaxe combinée\nVariable nom: Type = valeur\n\n// Exemples\nVariable age: Entier = 25\nVariable prix: Decimal = 19.99\nVariable estActif: Booleen = Vrai\nVariable lettre: Caractere = \'A\'\nVariable nom: Chaine = "Jean Dupont"',
        height: '150px'
      },
      {
        type: 'heading',
        content: 'Exemple complet'
      },
      {
        type: 'code',
        content: 'Debut\n    // Déclaration de variables\n    Variable age: Entier\n    Variable nom: Chaine\n    Variable taille: Decimal\n    Variable estEtudiant: Booleen\n    \n    // Affectation de valeurs\n    age = 20\n    nom = "Pierre"\n    taille = 1.75\n    estEtudiant = Vrai\n    \n    // Affichage des valeurs\n    Ecrire("Nom : ", nom)\n    Ecrire("Age : ", age, " ans")\n    Ecrire("Taille : ", taille, " m")\n    Ecrire("Est étudiant : ", estEtudiant)\nFin',
        height: '300px'
      },
      {
        type: 'output',
        content: 'Nom : Pierre\nAge : 20 ans\nTaille : 1.75 m\nEst étudiant : Vrai'
      }
    ]
  },
  {
    id: 'io',
    title: 'Entrées/Sorties',
    content: [
      {
        type: 'heading',
        content: 'Affichage à l\'écran'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> L\'instruction <code>Ecrire</code> permet d\'afficher du texte ou des valeurs à l\'écran.'
      },
      {
        type: 'code',
        content: '// Syntaxe\nEcrire(expression1, expression2, ..., expressionN)\n\n// Exemples\nEcrire("Bonjour")\nEcrire("La valeur est : ", 42)\nEcrire("Nom : ", nom, ", Age : ", age)',
        height: '150px'
      },
      {
        type: 'heading',
        content: 'Saisie utilisateur'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> L\'instruction <code>Lire</code> permet de récupérer une entrée utilisateur et de la stocker dans une variable.'
      },
      {
        type: 'code',
        content: '// Syntaxe\nLire(variable)\n\n// Exemples\nLire(age)\nLire(nom)',
        height: '100px'
      },
      {
        type: 'heading',
        content: 'Exemple complet'
      },
      {
        type: 'code',
        content: 'Debut\n    Variable nom: Chaine\n    Variable age: Entier\n    \n    // Demande d\'informations à l\'utilisateur\n    Ecrire("Entrez votre nom : ")\n    Lire(nom)\n    \n    Ecrire("Entrez votre âge : ")\n    Lire(age)\n    \n    // Affichage des informations\n    Ecrire("Bonjour, ", nom, " !")\n    Ecrire("Vous avez ", age, " ans.")\n    \n    Si age >= 18 Alors\n        Ecrire("Vous êtes majeur.")\n    Sinon\n        Ecrire("Vous êtes mineur.")\n    FinSi\nFin',
        height: '300px'
      },
      {
        type: 'output',
        content: 'Entrez votre nom : Jean\nEntrez votre âge : 25\nBonjour, Jean !\nVous avez 25 ans.\nVous êtes majeur.'
      },
      {
        type: 'note',
        content: 'Les valeurs saisies par l\'utilisateur sont indiquées en italique dans cet exemple.'
      }
    ]
  },
  {
    id: 'operators',
    title: 'Opérateurs',
    content: [
      {
        type: 'heading',
        content: 'Opérateurs arithmétiques'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> Les opérateurs arithmétiques sont utilisés pour effectuer des opérations mathématiques de base sur des nombres.'
      },
      {
        type: 'list',
        items: [
          '<code>+</code> : Addition',
          '<code>-</code> : Soustraction',
          '<code>*</code> : Multiplication',
          '<code>/</code> : Division',
          '<code>%</code> : Modulo (reste de la division)'
        ]
      },
      {
        type: 'code',
        content: 'Debut\n    Variable a: Entier = 10\n    Variable b: Entier = 3\n    Variable resultat: Entier\n    Variable resultatDecimal: Decimal\n    \n    // Addition\n    resultat = a + b\n    Ecrire("Addition : ", resultat)\n    \n    // Soustraction\n    resultat = a - b\n    Ecrire("Soustraction : ", resultat)\n    \n    // Multiplication\n    resultat = a * b\n    Ecrire("Multiplication : ", resultat)\n    \n    // Division entière\n    resultat = a / b\n    Ecrire("Division entière : ", resultat)\n    \n    // Division décimale\n    resultatDecimal = a / b\n    Ecrire("Division décimale : ", resultatDecimal)\nFin',
        height: '300px'
      },
      {
        type: 'output',
        content: 'Addition : 13\nSoustraction : 7\nMultiplication : 30\nDivision entière : 3\nDivision décimale : 3.33333'
      },
      {
        type: 'heading',
        content: 'Opérateurs logiques'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> Les opérateurs logiques sont utilisés pour combiner ou inverser des expressions booléennes.'
      },
      {
        type: 'list',
        items: [
          '<code>ET</code> : Et logique (les deux conditions doivent être vraies)',
          '<code>OU</code> : Ou logique (au moins une condition doit être vraie)',
          '<code>NON</code> : Négation (inverse la valeur de la condition)'
        ]
      },
      {
        type: 'code',
        content: 'Debut\n    Variable a: Booleen = Vrai\n    Variable b: Booleen = Faux\n    Variable resultat: Booleen\n    \n    // ET logique\n    resultat = a ET b\n    Ecrire("a ET b : ", resultat)\n    \n    // OU logique\n    resultat = a OU b\n    Ecrire("a OU b : ", resultat)\n    \n    // NON logique\n    resultat = NON a\n    Ecrire("NON a : ", resultat)\nFin',
        height: '250px'
      },
      {
        type: 'output',
        content: 'a ET b : Faux\na OU b : Vrai\nNON a : Faux'
      }
    ]
  }
]
