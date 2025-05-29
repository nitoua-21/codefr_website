
# Modules en CodeFR

Les **modules** permettent d’organiser le code en le divisant en fichiers réutilisables. Cela facilite la structuration, la maintenance et la collaboration sur de grands projets.

Un module en CodeFR est simplement un **fichier `.cfr`** contenant des **fonctions**, **constantes**, et autres éléments que vous pouvez **importer** dans d’autres programmes.

---

## 1. Création d’un module

Un module est un fichier CodeFR contenant du code réutilisable, généralement des fonctions.

### Exemple – Module `Calculs.cfr`

```codefr
Fonction addition(a: Entier, b: Entier): Entier
    Retourner a + b
FinFonction

Fonction soustraction(a: Entier, b: Entier): Entier
    Retourner a - b
FinFonction
```

> Ce fichier doit être sauvegardé sous le nom **`Calculs.cfr`**.

---

## 2. Importer un module dans un programme principal

Il existe deux façons d’importer du code depuis un module.

### a. Importer tout le module

```codefr
Importer Calculs

Debut
    Variable res: Entier
    res = Calculs.addition(4, 5)
    Ecrire("Résultat : ", res, "\n")
Fin
```

Dans ce cas, vous devez **précéder** chaque fonction par le nom du module (`Calculs.addition` par exemple).

---

### b. Importer des fonctions spécifiques

```codefr
Depuis Calculs Importer addition, soustraction

Debut
    Variable res: Entier
    res = addition(10, 2)
    Ecrire("Résultat : ", res, "\n")
Fin
```

Ici, vous **n’avez pas besoin** de préfixer les fonctions avec le nom du module.

---

## 3. Compilation avec modules

Assurez-vous de **compiler tous les fichiers** nécessaires.

```bash
./codefr Calculs.cfr main.cfr
```

- `Calculs.cfr` : fichier du module
- `main.cfr` : programme principal

Les fichiers doivent être **dans le même dossier** ou correctement référencés.

---

## Résumé

| Élément                     | Exemple                                 | Description                               |
|-----------------------------|-----------------------------------------|-------------------------------------------|
| Création de module          | `Calculs.cfr`                           | Contient des fonctions à réutiliser       |
| Import complet              | `Importer Calculs`                      | Importe toutes les fonctions              |
| Import partiel              | `Depuis Calculs Importer addition`      | Importe une ou plusieurs fonctions ciblées|
| Utilisation                 | `Calculs.fonction()` ou `fonction()`    | Appel selon le type d’import              |
| Compilation                 | `./codefr Calculs.cfr main.cfr`         | Compile avec les modules nécessaires      |

Les modules rendent votre code **plus propre**, **modulaire** et **facile à maintenir**, en particulier dans les projets de taille moyenne à grande.
