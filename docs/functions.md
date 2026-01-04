
# Fonctions en CodeFR

Les **fonctions** permettent de structurer le code, de le rendre plus lisible, modulaire et réutilisable. En CodeFR, il existe deux types principaux : **fonctions sans retour** (procédures) et **fonctions avec retour** (valeurs renvoyées).

---

## 1. Fonction sans retour (Procédure)

Ces fonctions exécutent un ensemble d’instructions sans renvoyer de valeur.

### Syntaxe

```codefr
Fonction NomFonction(param1: Type1, param2: Type2)
    // Instructions
FinFonction
```

### Exemple

```codefr
Fonction AfficherMessage(message: Chaine)
    Ecrire("Message : ", message, "\n")
FinFonction

Debut
    AfficherMessage("Bienvenue dans CodeFR !")
Fin
```

---

## 2. Fonction avec retour

Ces fonctions renvoient une valeur de type défini via l’instruction `Retourner`.

### Syntaxe

```codefr
Fonction NomFonction(param1: Type1, param2: Type2): TypeRetour
    // Instructions
    Retourner valeur
FinFonction
```

### Exemple

```codefr
Fonction Addition(a: Entier, b: Entier): Entier
    Retourner a + b
FinFonction

Variable res: Entier

Debut
    res = Addition(5, 3)
    Ecrire("Résultat : ", res, "\n")
Fin
```

---

## 3. Portée des variables

- Les variables déclarées **dans une fonction** sont locales à celle-ci.
- Elles ne peuvent pas être utilisées **en dehors** de la fonction.

---

## 4. Appel de fonction

- Une fonction est appelée simplement par son **nom** suivi de ses **arguments** entre parenthèses.
- Elle peut être appelée depuis le bloc `Debut ... Fin` ou depuis une autre fonction.

```codefr
NomFonction(argument1, argument2)
```

---

## Résumé

| Élément                | Exemple                                      | Description                                |
|------------------------|----------------------------------------------|--------------------------------------------|
| Fonction sans retour   | `Fonction Afficher(...)`                     | Exécute un bloc d’instructions              |
| Fonction avec retour   | `Fonction Calcul(...): Entier`              | Renvoie une valeur                         |
| Appel de fonction      | `Afficher("Salut")`                          | Appelle une fonction                       |
| Retour de valeur       | `Retourner a + b`                            | Renvoie le résultat                        |

Les fonctions rendent vos programmes plus lisibles, organisés et réutilisables. C’est un outil essentiel pour écrire du code propre et maintenable en CodeFR !
