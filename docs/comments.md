
# Commentaires en CodeFR

Les **commentaires** permettent d’ajouter des notes, des explications ou de désactiver temporairement du code sans l’exécuter. Ils sont **ignorés** par l’interpréteur et servent uniquement à documenter le code.

---

## 1. Commentaire sur une ligne

Utilisez `//` au début de la ligne ou après une instruction pour ajouter un commentaire.

### Exemple

```codefr
// Ceci est un commentaire
Variable x: Entier // Déclaration d'une variable entière

Debut
    x = 10 // Affectation de la valeur 10
    Ecrire(x) // Affiche la valeur de x
Fin
```

---

## 2. Commentaire multi-lignes

Pour écrire plusieurs lignes de commentaires, entourez-les avec `/* ... */`.

### Exemple

```codefr
/* 
    Ce programme affiche une valeur.
    On utilise une variable entière nommée x.
*/

Variable x: Entier

Debut
    x = 5
    Ecrire("Valeur : ", x)
Fin
```

> Tout ce qui se trouve entre `/*` et `*/` est ignoré.

---

## 3. Désactiver temporairement du code

Les commentaires sont utiles pour tester différentes parties de votre programme sans les supprimer.

### Exemple

```codefr
Variable y: Decimal

/* y = 3.14
Ecrire(y) */

Debut
    Ecrire("Exécution sans afficher y.\n")
Fin
```

---

## Bonnes pratiques

-  Commentez les **parties complexes** de votre code.
-  Utilisez des commentaires **clairs et concis**.
-  Évitez les commentaires inutiles comme `// x = 5` s’il est évident.
-  Documentez l’**intention**, pas seulement l’action.

---

## Résumé

| Type de commentaire | Syntaxe            | Utilisation                           |
|----------------------|--------------------|----------------------------------------|
| Ligne unique         | `// commentaire`   | Pour une ligne rapide                  |
| Multi-lignes         | `/* ... */`        | Pour expliquer ou désactiver du code  |

Les commentaires sont indispensables pour écrire un code **compréhensible**, **collaboratif** et **facile à maintenir** !
