export const documentationData3 = [
  {
    id: 'modules',
    title: 'Modules',
    content: [
      {
        type: 'heading',
        content: 'Création d\'un module'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> Un module est un fichier contenant des définitions de fonctions, variables ou constantes qui peuvent être utilisées dans d\'autres programmes.'
      },
      {
        type: 'paragraph',
        content: 'Les modules permettent d\'organiser le code en regroupant des fonctions liées entre elles, facilitant ainsi la maintenance et la réutilisation.'
      },
      {
        type: 'subheading',
        content: 'Exemple - Module "mathematiques.cfr"'
      },
      {
        type: 'code',
        content: `// Module mathematiques.cfr

Fonction addition(a: Entier, b: Entier): Entier
    Retourner a + b
FinFonction

Fonction soustraction(a: Entier, b: Entier): Entier
    Retourner a - b
FinFonction

Fonction multiplication(a: Entier, b: Entier): Entier
    Retourner a * b
FinFonction`,
        height: '200px'
      },
      {
        type: 'heading',
        content: 'Utilisation d\'un module'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> Pour utiliser un module dans un programme, il faut l\'importer en utilisant l\'instruction <code>Importer</code>.'
      },
      {
        type: 'code',
        content: `// Programme principal

Importer mathematiques

Debut
    Variable a: Entier = 10
    Variable b: Entier = 5
    Variable resultat: Entier
    
    resultat = mathematiques.addition(a, b)
    Ecrire("a + b = ", resultat)
    
    resultat = mathematiques.soustraction(a, b)
    Ecrire("a - b = ", resultat)
Fin`,
        height: '250px'
      },
      {
        type: 'output',
        content: 'a + b = 15\na - b = 5'
      },
      {
        type: 'subheading',
        content: 'Importer un module complet'
      },
      {
        type: 'code',
        content: `Importer Calculs  

Variables x, y, resultat_addition, resultat_soustraction: Entier  
Debut  
    x = 5  
    y = 3  
    
    resultat_addition = Calculs.addition(x, y)  
    Ecrire("5 + 3 = ", resultat_addition)  
    
    // Exemple avec soustraction  
    resultat_soustraction = Calculs.soustraction(10, 4)  
    Ecrire("10 - 4 = ", resultat_soustraction)  
    
Fin`,
        height: '250px'
      },
      {
        type: 'output',
        content: '5 + 3 = 8\n10 - 4 = 6'
      },
      {
        type: 'subheading',
        content: 'Importer des fonctions spécifiques'
      },
      {
        type: 'code',
        content: `Depuis Calculs Importer addition  

Variable x1, y1, resultatAddSpecifique: Entier 

Debut 
   x1 = 7 
   y1 = 2
   
   resultatAddSpecifique = addition(x1, y1)
   
   Ecrire(resultatAddSpecifique)
Fin`,
        height: '200px'
      },
      {
        type: 'output',
        content: '9'
      }
    ]
  },
  {
    id: 'comments',
    title: 'Commentaires',
    content: [
      {
        type: 'heading',
        content: 'Commentaire sur une ligne'
      },
      {
        type: 'code',
        content: `// Ceci est un commentaire sur une ligne`,
        height: '50px'
      },
      {
        type: 'heading',
        content: 'Commentaire multi-lignes'
      },
      {
        type: 'code',
        content: `/*
   Ceci est un commentaire
   sur plusieurs lignes
*/`,
        height: '100px'
      }
    ]
  },
  {
    id: 'installation',
    title: 'Guide d\'installation et d\'utilisation',
    content: [
      {
        type: 'heading',
        content: 'Installation'
      },
      {
        type: 'paragraph',
        content: 'Pour installer CodeFr, suivez ces étapes :'
      },
      {
        type: 'orderedList',
        items: [
          'Téléchargez la dernière version de CodeFr depuis notre site officiel.',
          'Exécutez le programme d\'installation et suivez les instructions à l\'écran.',
          'Une fois l\'installation terminée, vous pouvez lancer l\'IDE CodeFr depuis le menu Démarrer ou le raccourci sur le bureau.'
        ]
      },
      {
        type: 'heading',
        content: 'Compilation et exécution'
      },
      {
        type: 'paragraph',
        content: 'Pour compiler et exécuter un programme CodeFr :'
      },
      {
        type: 'orderedList',
        items: [
          'Créez un nouveau fichier avec l\'extension <code>.cfr</code> dans l\'IDE.',
          'Écrivez votre code.',
          'Cliquez sur le bouton "Compiler" pour vérifier la syntaxe de votre code.',
          'Si la compilation réussit, cliquez sur "Exécuter" pour lancer votre programme.'
        ]
      },
      {
        type: 'heading',
        content: 'Commandes utiles'
      },
      {
        type: 'paragraph',
        content: 'Vous pouvez également utiliser CodeFr en ligne de commande :'
      },
      {
        type: 'code',
        content: `// Compiler un programme
codefr compiler monprogramme.cfr

// Exécuter un programme compilé
codefr executer monprogramme

// Compiler et exécuter en une seule commande
codefr executer monprogramme.cfr`,
        height: '150px'
      }
    ]
  }
];
