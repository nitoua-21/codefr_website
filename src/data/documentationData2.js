export const documentationData2 = [
  {
    id: 'control',
    title: 'Structures de contrôle',
    content: [
      {
        type: 'heading',
        content: 'Structures conditionnelles'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> Les structures conditionnelles permettent d\'exécuter différentes parties de code en fonction de conditions spécifiques.'
      },
      {
        type: 'subheading',
        content: 'Si-Alors-Sinon'
      },
      {
        type: 'code',
        content: `// Syntaxe
Si condition Alors
    // Instructions si la condition est vraie
Sinon
    // Instructions si la condition est fausse
FinSi

// Exemple
Si age >= 18 Alors
    Ecrire("Vous êtes majeur.")
Sinon
    Ecrire("Vous êtes mineur.")
FinSi`,
        height: '200px'
      },
      {
        type: 'subheading',
        content: 'Si-Alors-SinonSi-Sinon'
      },
      {
        type: 'code',
        content: `// Syntaxe
Si condition1 Alors
    // Instructions si condition1 est vraie
SinonSi condition2 Alors
    // Instructions si condition2 est vraie
SinonSi condition3 Alors
    // Instructions si condition3 est vraie
Sinon
    // Instructions si aucune condition n'est vraie
FinSi

// Exemple
Si note >= 16 Alors
    Ecrire("Très bien")
SinonSi note >= 14 Alors
    Ecrire("Bien")
SinonSi note >= 12 Alors
    Ecrire("Assez bien")
SinonSi note >= 10 Alors
    Ecrire("Passable")
Sinon
    Ecrire("Insuffisant")
FinSi`,
        height: '300px'
      },
      {
        type: 'heading',
        content: 'Structures de boucle'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> Les structures de boucle permettent de répéter l\'exécution d\'un bloc d\'instructions plusieurs fois.'
      },
      {
        type: 'subheading',
        content: 'Boucle Pour'
      },
      {
        type: 'code',
        content: `// Syntaxe
Pour variable De valeurInitiale A valeurFinale [Pas pas] Faire
    // Instructions à répéter
FinPour

// Exemple - Compter de 1 à 5
Pour i De 1 A 5 Faire
    Ecrire(i)
FinPour

// Exemple - Compter de 10 à 2 par pas de -2
Pour i De 10 A 2 Pas -2 Faire
    Ecrire(i)
FinPour`,
        height: '250px'
      },
      {
        type: 'output',
        content: '1\n2\n3\n4\n5'
      },
      {
        type: 'output',
        content: '10\n8\n6\n4\n2'
      },
      {
        type: 'subheading',
        content: 'Boucle TantQue'
      },
      {
        type: 'code',
        content: `// Syntaxe
TantQue condition Faire
    // Instructions à répéter
FinTantQue

// Exemple
Variable compteur: Entier = 1
TantQue compteur <= 5 Faire
    Ecrire(compteur)
    compteur = compteur + 1
FinTantQue`,
        height: '200px'
      },
      {
        type: 'output',
        content: '1\n2\n3\n4\n5'
      },
      {
        type: 'subheading',
        content: 'Boucle Repeter-Jusqu\'a'
      },
      {
        type: 'code',
        content: `// Syntaxe
Repeter
    // Instructions à répéter
Jusqu'a condition

// Exemple
Variable compteur: Entier = 1
Repeter
    Ecrire(compteur)
    compteur = compteur + 1
Jusqu'a compteur > 5`,
        height: '200px'
      },
      {
        type: 'output',
        content: '1\n2\n3\n4\n5'
      },
      {
        type: 'note',
        content: 'La différence principale entre TantQue et Repeter-Jusqu\'a est que la boucle Repeter-Jusqu\'a exécute toujours les instructions au moins une fois, puis vérifie la condition.'
      }
    ]
  },
  {
    id: 'arrays',
    title: 'Tableaux',
    content: [
      {
        type: 'heading',
        content: 'Tableaux à une dimension'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> Un tableau est une collection ordonnée d\'éléments du même type, accessibles par un indice.'
      },
      {
        type: 'subheading',
        content: 'Déclaration et initialisation'
      },
      {
        type: 'code',
        content: `// Syntaxe
Variable nom: Tableau[taille] de Type

// Exemple
Variable notes: Tableau[5] de Entier
Variable noms: Tableau[3] de Chaine

// Initialisation
notes[0] = 15
notes[1] = 12
notes[2] = 18
notes[3] = 10
notes[4] = 14

noms[0] = "Alice"
noms[1] = "Bob"
noms[2] = "Charlie"`,
        height: '250px'
      },
      {
        type: 'subheading',
        content: 'Accès aux éléments'
      },
      {
        type: 'code',
        content: `// Exemple d'accès aux éléments
Variable premiereNote: Entier = notes[0]
Variable dernierNom: Chaine = noms[2]

Ecrire("Première note : ", premiereNote)
Ecrire("Dernier nom : ", dernierNom)`,
        height: '150px'
      },
      {
        type: 'output',
        content: 'Première note : 15\nDernier nom : Charlie'
      },
      {
        type: 'subheading',
        content: 'Parcourir un tableau'
      },
      {
        type: 'code',
        content: `// Parcourir un tableau avec une boucle Pour
Pour i De 0 A 4 Faire
    Ecrire("Note ", i + 1, " : ", notes[i])
FinPour`,
        height: '100px'
      },
      {
        type: 'output',
        content: 'Note 1 : 15\nNote 2 : 12\nNote 3 : 18\nNote 4 : 10\nNote 5 : 14'
      },
      {
        type: 'heading',
        content: 'Tableaux à deux dimensions (matrices)'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> Un tableau à deux dimensions, ou matrice, est un tableau de tableaux, organisé en lignes et colonnes.'
      },
      {
        type: 'subheading',
        content: 'Déclaration et initialisation'
      },
      {
        type: 'code',
        content: `// Syntaxe
Variable nom: Tableau[lignes][colonnes] de Type

// Exemple - Matrice 3x3
Variable matrice: Tableau[3][3] de Entier

// Initialisation
Pour i De 0 A 2 Faire
    Pour j De 0 A 2 Faire
        matrice[i][j] = i * 3 + j
    FinPour
FinPour`,
        height: '200px'
      },
      {
        type: 'subheading',
        content: 'Parcourir une matrice'
      },
      {
        type: 'code',
        content: `// Affichage de la matrice
Pour i De 0 A 2 Faire
    Pour j De 0 A 2 Faire
        Ecrire(matrice[i][j], " ")
    FinPour
    Ecrire("\\n")
FinPour`,
        height: '150px'
      },
      {
        type: 'output',
        content: '0 1 2 \n3 4 5 \n6 7 8'
      }
    ]
  },
  {
    id: 'functions',
    title: 'Fonctions',
    content: [
      {
        type: 'heading',
        content: 'Fonctions intégrées'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> Les fonctions intégrées sont des fonctions prédéfinies dans le langage qui effectuent des opérations courantes.'
      },
      {
        type: 'subheading',
        content: 'Fonctions Mathématiques'
      },
      {
        type: 'list',
        items: [
          '<code>Abs(x)</code> : Valeur absolue de x',
          '<code>Racine(x)</code> : Racine carrée de x',
          '<code>Sin(x)</code> : Sinus de x (en radians)',
          '<code>Cos(x)</code> : Cosinus de x (en radians)',
          '<code>Tan(x)</code> : Tangente de x (en radians)',
          '<code>Log(x)</code> : Logarithme naturel (base e) de x',
          '<code>Log10(x)</code> : Logarithme en base 10 de x',
          '<code>Arrondi(x)</code> : Arrondit x à l\'entier le plus proche',
          '<code>Ent(x)</code> : Retourne la partie entière de x (tronque la partie décimale)',
          '<code>Alea()</code> : Génère un nombre aléatoire décimal entre 0 et 1',
          '<code>Alea(min, max)</code> : Génère un nombre entier aléatoire entre min et max'
        ]
      },
      {
        type: 'code',
        content: `Variable x, racineCarree, nombreAleatoire: Decimal
Variable nombreAleatoireEntre1et10: Entier

Debut
    x = 25.0
    racineCarree = Racine(x)
    Ecrire("La racine carrée de ", x, " est : ", racineCarree, "\\n")

    nombreAleatoire = Alea()
    Ecrire("Nombre aléatoire entre 0 et 1 : ", nombreAleatoire, "\\n")

    nombreAleatoireEntre1et10 = Alea(1, 10)
    Ecrire("Nombre aléatoire entre 1 et 10 : ", nombreAleatoireEntre1et10, "\\n")
Fin`,
        height: '250px'
      },
      {
        type: 'output',
        content: 'La racine carrée de 25.0 est : 5.0\nNombre aléatoire entre 0 et 1 : 0.7384\nNombre aléatoire entre 1 et 10 : 7'
      },
      {
        type: 'note',
        content: 'Les valeurs aléatoires peuvent varier à chaque exécution.'
      },
      {
        type: 'subheading',
        content: 'Opérations sur les Chaînes'
      },
      {
        type: 'list',
        items: [
          '<code>Longueur(chaine)</code> : Nombre de caractères dans la chaîne',
          '<code>SousChaine(chaine, debut, longueur)</code> : Extrait une sous-chaîne',
          '<code>Majuscule(chaine)</code> : Convertit la chaîne en majuscules',
          '<code>Minuscule(chaine)</code> : Convertit la chaîne en minuscules',
          '<code>Concatener(str1, str2)</code> : Concatène (assemble) les chaînes',
          '<code>Comparer(str1, str2)</code> : Compare les chaînes',
          '<code>Recherche(str1, str2)</code> : Recherche la première occurrence d\'une sous-chaîne',
          '<code>Copie(str, pos, n)</code> : Extrait une sous-chaîne'
        ]
      },
      {
        type: 'code',
        content: `Variable nomComplet, sousChaine: Chaine
Variable longueurNom: Entier
Variable positionSousChaine: Entier

Debut
    nomComplet = Concatener("Normich", " ITOUA")
    Ecrire("Nom complet : ", nomComplet, "\\n")

    longueurNom = Longueur(nomComplet)
    Ecrire("Longueur du nom complet : ", longueurNom, "\\n")

    positionSousChaine = Recherche(nomComplet, "ITO")
    Ecrire("Position de 'ITO' dans le nom : ", positionSousChaine, "\\n")

    sousChaine = Copie(nomComplet, 9, 5) // Extrait "ITOUA"
    Ecrire("Sous-chaîne extraite : ", sousChaine, "\\n")
Fin`,
        height: '250px'
      },
      {
        type: 'output',
        content: 'Nom complet : Normich ITOUA\nLongueur du nom complet : 14\nPosition de \'ITO\' dans le nom : 9\nSous-chaîne extraite : ITOUA'
      },
      {
        type: 'heading',
        content: 'Fonctions Utilisateur'
      },
      {
        type: 'paragraph',
        content: '<strong>Définition :</strong> Les fonctions utilisateur sont des blocs de code réutilisables définis par le programmeur pour effectuer des tâches spécifiques.'
      },
      {
        type: 'subheading',
        content: 'Fonction sans retour'
      },
      {
        type: 'code',
        content: `Fonction Saluer(nom: Chaine)
    Ecrire("Bonjour ", nom, "!\\n")
FinFonction

Debut
    Saluer("Normich") // Appel de la fonction Saluer
Fin`,
        height: '150px'
      },
      {
        type: 'output',
        content: 'Bonjour Normich!'
      },
      {
        type: 'subheading',
        content: 'Fonction avec retour'
      },
      {
        type: 'code',
        content: `Fonction Ajouter(a: Entier, b: Entier): Entier
    Retourner a + b
FinFonction

Variables x, y, resultat: Entier

Debut
    x = 5
    y = 10
    resultat = Ajouter(x, y) // Appel de la fonction Ajouter
    Ecrire(resultat, "\\n")
Fin`,
        height: '200px'
      },
      {
        type: 'output',
        content: '15'
      }
    ]
  }
];
