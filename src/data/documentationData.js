export const documentationData = [
  {
    id: 'introduction',
    title: 'Introduction',
    markdown: `
# Introduction à CodeFR

CodeFR est un langage de programmation éducatif conçu pour rendre l'apprentissage de l'algorithmique et de la programmation plus accessible aux francophones, notamment aux débutants. Il permet d'écrire des programmes en utilisant une syntaxe claire et des mots-clés exclusivement en français, éliminant ainsi l'une des principales barrières d'entrée : la langue anglaise omniprésente dans les langages classiques comme Python, C ou Java.

CodeFR s'adresse à tous les apprenants : élèves, étudiants, enseignants, tuteurs, mais aussi professionnels en reconversion ou autodidactes. Il leur permet de se concentrer pleinement sur la logique algorithmique, sans être freinés par une syntaxe étrangère ou complexe.

Ce langage pédagogique agit comme une passerelle vers des langages plus techniques, tout en étant suffisamment complet pour développer des algorithmes avancés incluant des boucles, des fonctions, des modules, des structures de données comme les tableaux, et bien plus encore.

En outre, CodeFR contribue aussi à l'autonomisation des professionnels. Grâce à sa logique algorithmique claire, il favorise une meilleure compréhension des concepts fondamentaux qui sous-tendent des outils low-code comme Excel, Power BI ou Tableau, leur permettant ainsi d'utiliser ces outils de manière plus efficace, intuitive et indépendante.

En résumé, CodeFR vise à démocratiser la programmation en langue française, en rendant les concepts informatiques accessibles, concrets et motivants pour tous.
`
  },
  {
    id: 'structure',
    title: 'Structure d\'un programme',
    markdown: `
# Structure d'un programme

Un programme écrit en CodeFR suit une structure simple et intuitive, inspirée de la logique des algorithmes enseignés dans les établissements francophones. Cette structure facilite la lecture, l'écriture et la compréhension du code, notamment pour les débutants.

## 1. Structure de base

La structure minimale d'un programme comprend les sections suivantes :

\`\`\`codefr
// Déclarations (variables, constantes, tableaux, fonctions...)

Debut

    // Instructions du programme

Fin
\`\`\`

**Debut** marque le début du programme principal.  
**Fin** indique la fin du programme.  
Entre les deux, vous placez les instructions que vous souhaitez exécuter.

## Exemple – Affichage simple

\`\`\`codefr
Debut
    Ecrire("Bonjour le monde !\n")
Fin
\`\`\`

## 2. Avec déclarations de variables et constantes

Avant le bloc principal, on peut déclarer des variables, des constantes et des tableaux, qui seront utilisés dans le programme.

### Exemple – Calcul de surface

\`\`\`codefr
Variable rayon: Decimal
Variable surface: Decimal
Constante PI = 3.14159

Debut
    rayon = 5
    surface = PI * rayon ^ 2
    Ecrire("Surface du cercle : ", surface, "\n")
Fin
\`\`\`

## 3. Avec fonctions utilisateur

Un programme CodeFR peut contenir une ou plusieurs fonctions définies par l'utilisateur. Ces fonctions peuvent être déclarées avant le bloc principal.

### Exemple – Addition avec fonction

\`\`\`codefr
Fonction Addition(a: Entier, b: Entier): Entier
    Retourner a + b
FinFonction

Variables x, y, resultat: Entier

Debut
    x = 10
    y = 15
    resultat = Addition(x, y)
    Ecrire("Résultat : ", resultat, "\n")
Fin
\`\`\`

## 4. Avec modules externes

CodeFR permet d'importer des modules (fichiers .cfr) contenant du code réutilisable, comme des fonctions ou constantes.

### Exemple – Utilisation d'un module

\`\`\`codefr
Importer Calculs

Variables a, b, res: Entier

Debut
    a = 6
    b = 7
    res = Calculs.multiplication(a, b)
    Ecrire("Produit : ", res, "\n")
Fin
\`\`\`

> Remarque : Le module Calculs doit contenir une fonction multiplication dans un fichier Calculs.cfr.

### ✅ Récapitulatif

| Élément         | Description                      |
|-----------------|-----------------------------------|
| Debut ... Fin   | Bloc principal du programme       |
| Variable        | Déclaration de variable           |
| Constante       | Déclaration de constante          |
| Fonction        | Définition de fonction utilisateur|
| Importer        | Chargement d'un module externe    |
| Ecrire / Lire   | Entrées et sorties               |
`
  },
  {
    id: 'variables',
    title: 'Variables et Types',
    markdown: `
# Variables et Types

## Déclaration et utilisation des variables

En CodeFR, les variables doivent être déclarées avant d'être utilisées. La déclaration spécifie le nom et le type de la variable.

### Syntaxe de base

\`\`\`codefr
Variable nom: Type
\`\`\`

### Types de base

| Type      | Description                           | Exemple                |
|-----------|---------------------------------------|--------------------------|
| Entier    | Nombre entier                         | 42, -7, 0              |
| Decimal   | Nombre à virgule flottante            | 3.14, -0.5, 2.0        |
| Booleen   | Valeur logique (vrai ou faux)         | Vrai, Faux             |
| Caractere | Un seul caractère                     | 'a', '5', '$'          |
| Chaine    | Séquence de caractères                | "Bonjour", "CodeFR"    |

### Exemple d'utilisation

\`\`\`codefr
Variable age: Entier
Variable nom: Chaine
Variable estEtudiant: Booleen

Debut
    age = 25
    nom = "Marie"
    estEtudiant = Vrai
    
    Ecrire("Nom: ", nom, "\n")
    Ecrire("Age: ", age, " ans\n")
    Ecrire("Est étudiant: ", estEtudiant, "\n")
Fin
\`\`\`

## Constantes

Les constantes sont des valeurs qui ne peuvent pas être modifiées après leur initialisation.

\`\`\`codefr
Constante PI = 3.14159
Constante TAUX_TVA = 0.20
Constante TITRE = "Mon Application"

Debut
    Ecrire("Aire d'un cercle de rayon 5: ", PI * 5 * 5, "\n")
Fin
\`\`\`

## Tableaux

Les tableaux permettent de stocker plusieurs valeurs du même type.

\`\`\`codefr
Tableau notes[5]: Entier  // Tableau de 5 entiers (indices 0 à 4)

Debut
    notes[0] = 15
    notes[1] = 12
    notes[2] = 18
    notes[3] = 10
    notes[4] = 14
    
    Ecrire("Moyenne: ", (notes[0] + notes[1] + notes[2] + notes[3] + notes[4]) / 5, "\n")
Fin
\`\`\`

## Conversion de types

CodeFR permet de convertir des valeurs d'un type à un autre avec les fonctions de conversion.

\`\`\`codefr
Variable texteNombre: Chaine
Variable nombre: Entier
Variable decimal: Decimal

Debut
    texteNombre = "42"
    nombre = EntierDepuis(texteNombre)  // Convertit "42" en 42
    decimal = DecimalDepuis(nombre)     // Convertit 42 en 42.0
    
    Ecrire("Nombre + 8 = ", nombre + 8, "\n")  // Affiche 50
Fin
\`\`\`
`
  },
  {
    id: 'operators',
    title: 'Opérateurs',
    markdown: `
# Opérateurs

## Opérateurs arithmétiques

Les opérateurs arithmétiques permettent d'effectuer des calculs mathématiques sur des valeurs numériques.

| Opérateur | Description             | Exemple       | Résultat |
|-----------|-------------------------|---------------|----------|
| +         | Addition                | 5 + 3         | 8        |
| -         | Soustraction            | 5 - 3         | 2        |
| *         | Multiplication          | 5 * 3         | 15       |
| /         | Division                | 10 / 2        | 5        |
| %         | Modulo (reste)          | 10 % 3        | 1        |
| ^         | Puissance               | 2 ^ 3         | 8        |

### Exemple

\`\`\`codefr
Variable a: Entier = 10
Variable b: Entier = 3
Variable resultat: Entier

Debut
    resultat = a + b    // 13
    Ecrire("a + b = ", resultat, "\n")
    
    resultat = a - b    // 7
    Ecrire("a - b = ", resultat, "\n")
    
    resultat = a * b    // 30
    Ecrire("a * b = ", resultat, "\n")
    
    resultat = a / b    // 3 (division entière)
    Ecrire("a / b = ", resultat, "\n")
    
    resultat = a % b    // 1 (reste de la division)
    Ecrire("a % b = ", resultat, "\n")
    
    resultat = a ^ 2    // 100 (10 au carré)
    Ecrire("a ^ 2 = ", resultat, "\n")
Fin
\`\`\`

## Opérateurs de comparaison

Les opérateurs de comparaison permettent de comparer deux valeurs et renvoient un résultat booléen (Vrai ou Faux).

| Opérateur | Description                  | Exemple     | Résultat |
|-----------|------------------------------|-------------|----------|
| ==        | Égal à                       | 5 == 5      | Vrai     |
| !=        | Différent de                 | 5 != 3      | Vrai     |
| <         | Inférieur à                  | 3 < 5       | Vrai     |
| >         | Supérieur à                  | 5 > 3       | Vrai     |
| <=        | Inférieur ou égal à          | 5 <= 5      | Vrai     |
| >=        | Supérieur ou égal à          | 3 >= 5      | Faux     |

### Exemple

\`\`\`codefr
Variable a: Entier = 5
Variable b: Entier = 10
Variable resultat: Booleen

Debut
    resultat = a == b
    Ecrire("a == b : ", resultat, "\n")  // Faux
    
    resultat = a != b
    Ecrire("a != b : ", resultat, "\n")  // Vrai
    
    resultat = a < b
    Ecrire("a < b : ", resultat, "\n")   // Vrai
    
    resultat = a > b
    Ecrire("a > b : ", resultat, "\n")   // Faux
Fin
\`\`\`

## Opérateurs logiques

Les opérateurs logiques permettent de combiner des expressions booléennes.

| Opérateur | Description                  | Exemple                  | Résultat |
|-----------|------------------------------|--------------------------|----------|
| ET        | ET logique                   | Vrai ET Vrai             | Vrai     |
| OU        | OU logique                   | Vrai OU Faux             | Vrai     |
| NON       | Négation                     | NON Vrai                 | Faux     |

### Exemple

\`\`\`codefr
Variable a: Booleen = Vrai
Variable b: Booleen = Faux
Variable resultat: Booleen

Debut
    resultat = a ET b
    Ecrire("a ET b : ", resultat, "\n")  // Faux
    
    resultat = a OU b
    Ecrire("a OU b : ", resultat, "\n")  // Vrai
    
    resultat = NON a
    Ecrire("NON a : ", resultat, "\n")   // Faux
    
    resultat = (a OU b) ET (NON b)
    Ecrire("(a OU b) ET (NON b) : ", resultat, "\n")  // Vrai
Fin
\`\`\`
`
  },
  {
    id: 'control',
    title: 'Structures de contrôle',
    markdown: `
# Structures de contrôle

## Conditions (Si-Alors-Sinon)

Les structures conditionnelles permettent d'exécuter différentes portions de code selon qu'une condition est vraie ou fausse.

### Syntaxe de base

\`\`\`codefr
Si condition Alors
    // Instructions exécutées si la condition est vraie
Sinon
    // Instructions exécutées si la condition est fausse
FinSi
\`\`\`

### Exemple simple

\`\`\`codefr
Variable age: Entier

Debut
    Ecrire("Quel est votre âge ? ")
    Lire(age)
    
    Si age >= 18 Alors
        Ecrire("Vous êtes majeur.\n")
    Sinon
        Ecrire("Vous êtes mineur.\n")
    FinSi
Fin
\`\`\`

### Conditions multiples (Si-SinonSi-Sinon)

\`\`\`codefr
Variable note: Entier

Debut
    Ecrire("Entrez votre note : ")
    Lire(note)
    
    Si note >= 16 Alors
        Ecrire("Très bien !\n")
    SinonSi note >= 14 Alors
        Ecrire("Bien.\n")
    SinonSi note >= 12 Alors
        Ecrire("Assez bien.\n")
    SinonSi note >= 10 Alors
        Ecrire("Passable.\n")
    Sinon
        Ecrire("Insuffisant.\n")
    FinSi
Fin
\`\`\`

## Boucles

Les boucles permettent de répéter un bloc d'instructions plusieurs fois.

### Boucle Pour

La boucle Pour est utilisée lorsque le nombre d'itérations est connu à l'avance.

\`\`\`codefr
Pour variable De valeurInitiale A valeurFinale [Pas pas] Faire
    // Instructions à répéter
FinPour
\`\`\`

#### Exemple

\`\`\`codefr
Variable i: Entier
Variable somme: Entier = 0

Debut
    // Calcul de la somme des nombres de 1 à 10
    Pour i De 1 A 10 Faire
        somme = somme + i
    FinPour
    
    Ecrire("La somme des nombres de 1 à 10 est : ", somme, "\n")  // 55
    
    // Affichage des nombres pairs de 10 à 0
    Pour i De 10 A 0 Pas -2 Faire
        Ecrire(i, " ")
    FinPour
    Ecrire("\n")  // Affiche: 10 8 6 4 2 0
Fin
\`\`\`

### Boucle TantQue

La boucle TantQue est utilisée lorsque le nombre d'itérations n'est pas connu à l'avance et dépend d'une condition.

\`\`\`codefr
TantQue condition Faire
    // Instructions à répéter
FinTantQue
\`\`\`

#### Exemple

\`\`\`codefr
Variable nombre: Entier
Variable essais: Entier = 0
Variable nombreMystere: Entier = 42

Debut
    Ecrire("Devinez le nombre mystère entre 1 et 100.\n")
    
    TantQue nombre != nombreMystere Faire
        Ecrire("Votre proposition : ")
        Lire(nombre)
        essais = essais + 1
        
        Si nombre < nombreMystere Alors
            Ecrire("C'est plus !\n")
        SinonSi nombre > nombreMystere Alors
            Ecrire("C'est moins !\n")
        FinSi
    FinTantQue
    
    Ecrire("Bravo ! Vous avez trouvé en ", essais, " essais.\n")
Fin
\`\`\`

### Boucle Répéter-Jusqu'à

La boucle Répéter-Jusqu'à exécute le bloc d'instructions au moins une fois, puis continue tant que la condition n'est pas vérifiée.

\`\`\`codefr
Repeter
    // Instructions à répéter
Jusqu'a condition
\`\`\`

#### Exemple

\`\`\`codefr
Variable choix: Caractere

Debut
    Repeter
        Ecrire("Menu principal\n")
        Ecrire("1. Jouer\n")
        Ecrire("2. Options\n")
        Ecrire("3. Quitter\n")
        Ecrire("Votre choix : ")
        Lire(choix)
        
        Si choix == '1' Alors
            Ecrire("Lancement du jeu...\n")
        SinonSi choix == '2' Alors
            Ecrire("Ouverture des options...\n")
        SinonSi choix != '3' Alors
            Ecrire("Choix invalide, veuillez réessayer.\n")
        FinSi
    Jusqu'a choix == '3'
    
    Ecrire("Au revoir !\n")
Fin
\`\`\`
`
  }
];
