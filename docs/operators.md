
# Opérateurs en CodeFR

Les **opérateurs** permettent de réaliser des calculs, des comparaisons et des opérations logiques sur les données. CodeFR prend en charge trois grandes catégories : **arithmétiques**, **logiques**, et **de comparaison**.

---

## 1. Opérateurs arithmétiques

Utilisés pour effectuer des opérations mathématiques.

| Opérateur | Fonction                 | Exemple          |
|-----------|--------------------------|------------------|
| `+`       | Addition                 | `a + b`          |
| `-`       | Soustraction             | `a - b`          |
| `*`       | Multiplication           | `a * b`          |
| `/`       | Division                 | `a / b`          |
| `Mod`     | Modulo (reste)          | `a Mod b`        |
| `^`       | Puissance                | `a ^ b`          |

### Exemple

```codefr
Variable a, b, somme, reste: Entier

Debut
    a = 10
    b = 3
    somme = a + b
    reste = a Mod b

    Ecrire("Somme : ", somme, "\n")
    Ecrire("Reste de la division : ", reste, "\n")
Fin
```

---

##  2. Opérateurs logiques

Utilisés pour combiner des expressions booléennes (`Logique`).

| Opérateur | Fonction              | Exemple                    |
|-----------|-----------------------|----------------------------|
| `Et`      | ET logique            | `condition1 Et condition2` |
| `Ou`      | OU logique            | `a Ou b`                   |
| `Non`     | Négation              | `Non condition`            |
| `Oux`     | OU exclusif (XOR)     | `a Oux b`                  |

### Exemple

```codefr
Variable a, b: Logique

Debut
    a = Vrai
    b = Faux

    Ecrire("a Et b : ", a Et b, "\n")
    Ecrire("a Ou b : ", a Ou b, "\n")
    Ecrire("Non a : ", Non a, "\n")
    Ecrire("a Oux b : ", a Oux b, "\n")
Fin
```

---

## 3. Opérateurs de comparaison

Utilisés pour comparer des valeurs. Le résultat est toujours une valeur logique (`Vrai` ou `Faux`).

| Opérateur | Signification            | Exemple        |
|-----------|--------------------------|----------------|
| `<`       | Inférieur à              | `a < b`        |
| `>`       | Supérieur à              | `a > b`        |
| `<=`      | Inférieur ou égal à      | `a <= b`       |
| `>=`      | Supérieur ou égal à      | `a >= b`       |
| `==`      | Égal à                   | `a == b`       |
| `!=`      | Différent de             | `a != b`       |

### Exemple

```codefr
Variable x, y: Entier
Variable test: Logique

Debut
    x = 5
    y = 10

    test = x < y
    Ecrire("x < y : ", test, "\n")
    Ecrire("x == y : ", x == y, "\n")
    Ecrire("x != y : ", x != y, "\n")
Fin
```

---

## Résumé

| Catégorie       | Exemple            | Résultat                         |
|------------------|--------------------|----------------------------------|
| Arithmétique     | `a * b`            | Produit de deux nombres          |
| Logique          | `a Et b`           | Résultat booléen (Vrai/Faux)     |
| Comparaison      | `a <= b`           | Vrai si `a` est ≤ `b`, sinon Faux|

Les opérateurs sont essentiels pour écrire des conditions, des expressions et des calculs dans tout programme CodeFR.
