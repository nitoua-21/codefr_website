
# Structures de Contrôle en CodeFR

Les **structures de contrôle** permettent de modifier le déroulement d’un programme en fonction de **conditions** ou de **répétitions**. CodeFR prend en charge plusieurs types de structures : conditionnelles, boucles et instructions de contrôle de flux.

---

## 1. Structures conditionnelles

### a. `Si ... Alors ... FinSi`

Exécute un bloc d’instructions uniquement si une condition est vraie.

```codefr
Si condition Alors
    // instructions
FinSi
```

**Exemple :**

```codefr
Variable age: Entier

Debut
    age = 18
    Si age >= 18 Alors
        Ecrire("Vous êtes majeur.\n")
    FinSi
Fin
```

---

### b. `Si ... Sinon ... FinSi`

Ajoute un bloc d’instructions pour le cas où la condition est fausse.

```codefr
Si condition Alors
    // si vrai
Sinon
    // si faux
FinSi
```

**Exemple :**

```codefr
Variable x: Entier

Debut
    x = 3
    Si x Mod 2 == 0 Alors
        Ecrire("Pair\n")
    Sinon
        Ecrire("Impair\n")
    FinSi
Fin
```

---

### c. `Si ... SinonSi ... Sinon ... FinSi`

Permet d'enchaîner plusieurs conditions.

```codefr
Si condition1 Alors
    // instructions1
SinonSi condition2 Alors
    // instructions2
Sinon
    // instructions par défaut
FinSi
```

**Exemple :**

```codefr
Variable note: Entier

Debut
    note = 85
    Si note >= 90 Alors
        Ecrire("Excellent\n")
    SinonSi note >= 75 Alors
        Ecrire("Très bien\n")
    Sinon
        Ecrire("À améliorer\n")
    FinSi
Fin
```

---

### d. `Selon ... Cas ... FinSelon`

Équivalent du `switch` dans d'autres langages. Permet d’exécuter un bloc en fonction de la valeur d’une expression.

```codefr
Selon expression Faire
    Cas valeur1:
        // instructions
    Cas valeur2:
        // instructions
    Sinon:
        // instructions par défaut
FinSelon
```

**Exemple :**

```codefr
Variable jour: Entier

Debut
    jour = 2
    Selon jour Faire
        Cas 1:
            Ecrire("Lundi\n")
        Cas 2:
            Ecrire("Mardi\n")
        Cas 3:
            Ecrire("Mercredi\n")
        Sinon:
            Ecrire("Jour inconnu\n")
    FinSelon
Fin
```

---

## 2. Boucles (répétitions)

### a. `TantQue ... Faire ... FinTantQue`

Exécute un bloc tant qu’une condition est vraie.

```codefr
TantQue condition Faire
    // instructions
FinTantQue
```

**Exemple :**

```codefr
Variable i: Entier

Debut
    i = 0
    TantQue i < 3 Faire
        Ecrire(i, "\n")
        i = i + 1
    FinTantQue
Fin
```

---

### b. `Pour ... De ... A ... Faire ... FinPour`

Exécute un bloc un nombre déterminé de fois avec un compteur automatique.

```codefr
Pour variable De début A fin Faire
    // instructions
FinPour
```

**Exemple :**

```codefr
Pour j De 1 A 5 Faire
    Ecrire(j, "\n")
FinPour
```

---

## 3. Instructions de contrôle de boucle

### a. `Interrompre`

Permet de quitter une boucle immédiatement.

**Exemple :**

```codefr
Pour i De 1 A 5 Faire
    Si i == 3 Alors
        Interrompre
    FinSi
    Ecrire(i, "\n")
FinPour
```

**Affiche :** `1 2`

---

### b. `Suivant`

Saute le reste des instructions dans l’itération courante et passe à l’itération suivante.

**Exemple :**

```codefr
Pour i De 1 A 5 Faire
    Si i == 3 Alors
        Suivant
    FinSi
    Ecrire(i, "\n")
FinPour
```

**Affiche :** `1 2 4 5`

---

## Résumé

| Structure         | Utilité                            |
|------------------|-------------------------------------|
| `Si ... FinSi`    | Condition simple                    |
| `Si ... Sinon`    | Condition avec alternative          |
| `Si ... SinonSi`  | Conditions multiples                |
| `Selon ...`       | Choix parmi plusieurs cas           |
| `TantQue`         | Répéter tant qu’une condition est vraie |
| `Pour`            | Répéter un nombre fixe de fois      |
| `Interrompre`     | Quitter la boucle                   |
| `Suivant`         | Passer à l’itération suivante       |

Les structures de contrôle rendent vos programmes dynamiques, adaptables et interactifs !
