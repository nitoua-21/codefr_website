
# Fonctions intégrées en CodeFR

CodeFR offre un ensemble de fonctions intégrées prêtes à l’emploi, permettant de réaliser facilement des opérations courantes.

---

## Fonctions Mathématiques

| Fonction      | Description                                  | Exemple                 |
|---------------|----------------------------------------------|-------------------------|
| `Racine(x)`   | Racine carrée de `x`                         | `Racine(9)` → `3`       |
| `Sin(x)`      | Sinus (en radians) de `x`                    | `Sin(0)` → `0`          |
| `Cos(x)`      | Cosinus (en radians) de `x`                  | `Cos(0)` → `1`          |
| `Tan(x)`      | Tangente (en radians) de `x`                 | `Tan(0)` → `0`          |
| `Log(x)`      | Logarithme naturel de `x`                    | `Log(1)` → `0`          |
| `Log10(x)`    | Logarithme base 10 de `x`                    | `Log10(100)` → `2`      |
| `Arrondi(x)`  | Arrondit `x` à l'entier le plus proche       | `Arrondi(2.6)` → `3`    |
| `Abs(x)`      | Valeur absolue de `x`                        | `Abs(-5)` → `5`         |
| `Alea()`      | Génère un nombre aléatoire entre 0 et 1      | `Alea()` → `0.432`      |
| `Ent(x)`      | Partie entière de `x`                        | `Ent(5.9)` → `5`        |

### Exemple d’utilisation :

```codefr
Variable resultat: Decimal

Debut
    resultat = Racine(16)
    Ecrire("La racine carrée de 16 est : ", resultat, "\n")
Fin
```

---

## Fonctions de Manipulation de Chaînes de caractères

| Fonction              | Description                                             | Exemple                               |
|-----------------------|---------------------------------------------------------|---------------------------------------|
| `Longueur(chaine)`    | Renvoie la longueur d'une chaîne                        | `Longueur("CodeFR")` → `6`            |
| `Concatener(ch1,ch2)` | Concatène deux chaînes                                  | `Concatener("Code","FR")` → `"CodeFR"`|
| `Copie(ch, debut, longueur)`| Copie une sous-chaîne à partir d'une position     | `Copie("CodeFR",1,4)` → `"Code"`      |
| `Comparer(ch1,ch2)`   | Compare deux chaînes (0 égales, 1 différentes)          | `Comparer("ABC","DEF")` → `1`         |
| `Recherche(ch, sous_ch)` | Cherche une sous-chaîne dans une chaîne              | `Recherche("CodeFR","FR")` → `4`      |

### Exemple d’utilisation :

```codefr
Variable taille: Entier

Debut
    taille = Longueur("Bonjour")
    Ecrire("Taille : ", taille, "\n")
Fin
```

---

## Récapitulatif rapide

| Type                   | Exemple                      | Retourne            |
|------------------------|------------------------------|---------------------|
| Mathématique           | `Sin(0)`                     | `0`                 |
| Manipulation de chaîne | `Longueur("test")`           | `4`                 |

Ces fonctions intégrées simplifient le développement et rendent le code plus lisible et efficace en CodeFR.
