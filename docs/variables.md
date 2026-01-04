
# Types de Données, Variables et Constantes

CodeFR propose un système de typage clair et adapté aux débutants, permettant de déclarer des **variables**, des **constantes**, et de manipuler des données de manière explicite et intuitive.

---

## 1. Types de données disponibles

Voici les principaux types de données pris en charge par CodeFR :

| Type       | Description                                       | Exemples                    |
|------------|---------------------------------------------------|-----------------------------|
| `Entier`   | Nombres entiers                                   | `-10`, `0`, `42`            |
| `Decimal`  | Nombres réels (à virgule flottante)               | `3.14`, `-0.5`, `2.0`       |
| `Chaine`   | Texte (chaînes de caractères)                     | `"Bonjour"`, `"CodeFR"`     |
| `Logique`  | Booléen (`Vrai` ou `Faux`)                        | `Vrai`, `Faux`              |

---

##  2. Déclaration de variables

Les variables permettent de stocker des valeurs qui peuvent changer pendant l’exécution du programme.

### Syntaxe

```codefr
Variable nom: Type
Variables nom1, nom2: Type
```

- `Variable` ou `Variables` : mot-clé utilisé pour la déclaration.
- `nom`, `nom1`, `nom2` : noms des variables.
- `Type` : type de données associé.

### Exemple

```codefr
Variable age: Entier
Variable nom: Chaine
Variable estActif: Logique
Variable note: Decimal
```

---

## 3. Affectation de valeurs

Une fois déclarée, une variable peut recevoir une valeur avec le symbole `=` :

```codefr
Debut
    age = 18
    nom = "Alice"
    estActif = Vrai
    note = 17.5

    Ecrire(nom, " a ", age, " ans et a obtenu ", note, "/20.\n")
Fin
```

---

##  4. Déclaration de constantes

Les constantes sont des valeurs fixes, qui ne peuvent pas être modifiées une fois définies.

### Syntaxe

```codefr
Constante NOM_CONSTANTE = valeur
```

- Le nom est généralement écrit en majuscules par convention.

### Exemple

```codefr
Constante PI = 3.14159
Constante MESSAGE = "Bienvenue sur CodeFR !"

Debut
    Ecrire(MESSAGE, "\n")
    Ecrire("PI vaut ", PI, "\n")
Fin
```

---

## 5. Règles de nommage

- Un nom doit commencer par une lettre.
- Il peut contenir des lettres, des chiffres et des underscores `_`.
- Il ne doit **pas** contenir d’espaces ou de caractères spéciaux.
- Les noms sont **sensibles à la casse** (majuscules ≠ minuscules).

---

## Récapitulatif

| Élément       | Exemple                         | Description                                      |
|---------------|----------------------------------|--------------------------------------------------|
| Variable      | `Variable score: Entier`         | Crée une variable modifiable                    |
| Constante     | `Constante TAUX = 0.2`           | Crée une valeur fixe                            |
| Affectation   | `score = 100`                    | Donne une valeur à une variable                 |
| Affichage     | `Ecrire(score)`                  | Affiche le contenu d'une variable               |

---

Avec ces bases, vous êtes prêt à manipuler des données de manière structurée et lisible dans vos programmes CodeFR.
