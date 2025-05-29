# Structure d'un programme

Un programme écrit en CodeFR suit une structure simple et intuitive, inspirée de la logique des algorithmes enseignés dans les établissements francophones. Cette structure facilite la lecture, l'écriture et la compréhension du code, notamment pour les débutants.

## 1. Structure de base

La structure minimale d'un programme comprend les sections suivantes :

```codefr
// Déclarations (variables, constantes, tableaux, fonctions...)

Debut

    // Instructions du programme

Fin
```

**Debut** marque le début du programme principal.  
**Fin** indique la fin du programme.  
Entre les deux, vous placez les instructions que vous souhaitez exécuter.

## Exemple – Affichage simple

```codefr
Debut
    Ecrire("Bonjour le monde !\n")
Fin
```

## 2. Avec déclarations de variables et constantes

Avant le bloc principal, on peut déclarer des variables, des constantes et des tableaux, qui seront utilisés dans le programme.

### Exemple – Calcul de surface

```codefr
Variable rayon: Decimal
Variable surface: Decimal
Constante PI = 3.14159

Debut
    rayon = 5
    surface = PI * rayon ^ 2
    Ecrire("Surface du cercle : ", surface, "\n")
Fin
```

## 3. Avec fonctions utilisateur

Un programme CodeFR peut contenir une ou plusieurs fonctions définies par l'utilisateur. Ces fonctions peuvent être déclarées avant le bloc principal.

### Exemple – Addition avec fonction

```codefr
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
```

## 4. Avec modules externes

CodeFR permet d'importer des modules (fichiers .cfr) contenant du code réutilisable, comme des fonctions ou constantes.

### Exemple – Utilisation d'un module

```codefr
Importer Calculs

Variables a, b, res: Entier

Debut
    a = 6
    b = 7
    res = Calculs.multiplication(a, b)
    Ecrire("Produit : ", res, "\n")
Fin
```

> Remarque : Le module Calculs doit contenir une fonction multiplication dans un fichier Calculs.cfr.

### Récapitulatif

| Élément         | Description                      |
|-----------------|-----------------------------------|
| Debut ... Fin   | Bloc principal du programme       |
| Variable        | Déclaration de variable           |
| Constante       | Déclaration de constante          |
| Fonction        | Définition de fonction utilisateur|
