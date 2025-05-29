
# Entrées / Sorties en CodeFR

CodeFR fournit des instructions simples et intuitives pour permettre l’interaction avec l’utilisateur via des **sorties** à l’écran et des **lectures** depuis le clavier.

---

## 1. Sortie : Afficher des informations

L’instruction `Ecrire(...)` permet d’afficher du texte, des variables ou des résultats à l’écran.

### Syntaxe

```codefr
Ecrire(expression1, expression2, ..., expressionN)
```

- Chaque expression peut être une **chaîne**, une **variable**, ou une **opération**.
- Les expressions sont affichées les unes à la suite des autres.
- Utilisez `\n` pour effectuer un retour à la ligne.

### Exemple

```codefr
Variable nom: Chaine
Variable age: Entier

Debut
    nom = "Alice"
    age = 30
    Ecrire("Bonjour ", nom, ", vous avez ", age, " ans.\n")
Fin
```

---

## 2. Entrée : Lire des données utilisateur

L’instruction `Lire(...)` permet de demander une saisie clavier à l’utilisateur et de l’attribuer à une variable.

### Syntaxe

```codefr
Lire(nom_variable)
```

- La variable doit être **déclarée** au préalable avec le bon **type**.
- L'utilisateur entre une valeur qui est automatiquement affectée à la variable.

### Exemple

```codefr
Variable nom: Chaine
Variable age: Entier

Debut
    Ecrire("Entrez votre nom : ")
    Lire(nom)
    Ecrire("Entrez votre âge : ")
    Lire(age)
    Ecrire("Bonjour ", nom, ", vous avez ", age, " ans.\n")
Fin
```

---

## ⚠️ Recommandations importantes

- Assurez-vous que le type de la valeur saisie correspond au type de la variable.
  - Exemple : si `age` est un `Entier`, l'utilisateur doit entrer un nombre entier.
- En cas de type incorrect, le comportement du programme est **imprévisible** (erreur ou crash possible).
- Il est conseillé d’**informer clairement** l’utilisateur du type de donnée attendu.

---

## Résumé

| Instruction | Rôle                                  | Exemple                                       |
|-------------|----------------------------------------|-----------------------------------------------|
| `Ecrire(...)` | Affiche des données à l'écran        | `Ecrire("Bonjour !")`                         |
| `Lire(...)`   | Lit une entrée utilisateur           | `Lire(age)`                                   |

Grâce à ces deux instructions, vous pouvez facilement créer des programmes interactifs en CodeFR !
