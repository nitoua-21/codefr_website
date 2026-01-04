
# Tableaux en CodeFR

Les **tableaux** permettent de stocker plusieurs valeurs du même type dans une seule variable indexée. CodeFR prend en charge les tableaux à **une dimension** et à **deux dimensions**.

---

## 1. Tableaux à une dimension

Un tableau à une dimension stocke une liste de valeurs, accessibles via un indice.

### Syntaxe

```codefr
Tableau nom[taille]: Type
```

- `nom` : nom du tableau
- `taille` : nombre d’éléments
- `Type` : type des éléments (`Entier`, `Decimal`, `Chaine`, `Logique`)

### Exemple

```codefr
Tableau notes[3]: Entier

Debut
    notes[0] = 15
    notes[1] = 17
    notes[2] = 14

    Ecrire("Première note : ", notes[0], "\n")
Fin
```

---

## 2. Tableaux à deux dimensions

Utilisés pour représenter des tableaux de type **matrice** (lignes × colonnes).

### Syntaxe

```codefr
Tableau matrice[lignes][colonnes]: Type
```

### Exemple

```codefr
Tableau mat[2][2]: Decimal

Debut
    mat[0][0] = 1.5
    mat[0][1] = 2.5
    mat[1][0] = 3.5
    mat[1][1] = 4.5

    Ecrire("Élément [1][1] : ", mat[1][1], "\n")
Fin
```

---

## 3. Accès et modification

Les éléments sont accessibles par leurs **indices**. Les indices commencent toujours à **0**.

```codefr
T[0] = 10     // Affectation
x = T[2]      // Lecture d’une valeur
```

---

## 4. Parcours d’un tableau

### Exemple – Somme des éléments d’un tableau

```codefr
Tableau valeurs[4]: Entier
Variable i, somme: Entier

Debut
    valeurs[0] = 1
    valeurs[1] = 2
    valeurs[2] = 3
    valeurs[3] = 4

    somme = 0
    Pour i De 0 A 3 Faire
        somme = somme + valeurs[i]
    FinPour

    Ecrire("Somme : ", somme, "\n")
Fin
```

---

## Résumé

| Élément                  | Exemple                                 | Description                                  |
|--------------------------|-----------------------------------------|----------------------------------------------|
| Tableau à 1D             | `Tableau T[5]: Entier`                 | Stocke 5 entiers                             |
| Tableau à 2D             | `Tableau M[2][3]: Decimal`            | Matrice 2 lignes × 3 colonnes de décimaux    |
| Accès à un élément       | `T[0]`, `M[1][2]`                    | Accès par index                              |
| Affectation              | `T[1] = 42`                            | Assigne une valeur à un élément              |
| Lecture                  | `x = T[2]`                             | Récupère une valeur                          |
| Parcours avec boucle     | `Pour i De 0 A n Faire ...`            | Itération sur les éléments                   |

Les tableaux sont essentiels pour manipuler des listes, des ensembles de données, ou représenter des structures plus complexes comme des grilles ou matrices.
