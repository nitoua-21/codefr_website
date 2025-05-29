# Structures de contrôle

## Conditions (Si-Alors-Sinon)

Les structures conditionnelles permettent d'exécuter différentes portions de code selon qu'une condition est vraie ou fausse.

### Syntaxe de base

```codefr
Si condition Alors
    // Instructions exécutées si la condition est vraie
Sinon
    // Instructions exécutées si la condition est fausse
FinSi
```

### Exemple simple

```codefr
Variable age: Entier

Debut
    Ecrire("Quel est votre âge ? ")
    Lire(age)
    
    Si age >= 18 Alors
        Ecrire("Vous êtes majeur.\n")
    Sinon
        Ecrire("Vous êtes mineur.\n")
    FinSi
Fin
```

### Conditions multiples (Si-SinonSi-Sinon)

```codefr
Variable note: Entier

Debut
    Ecrire("Entrez votre note : ")
    Lire(note)
    
    Si note >= 16 Alors
        Ecrire("Très bien !\n")
    SinonSi note >= 14 Alors
        Ecrire("Bien.\n")
    SinonSi note >= 12 Alors
        Ecrire("Assez bien.\n")
    SinonSi note >= 10 Alors
        Ecrire("Passable.\n")
    Sinon
        Ecrire("Insuffisant.\n")
    FinSi
Fin
```

## Boucles

Les boucles permettent de répéter un bloc d'instructions plusieurs fois.

### Boucle Pour

La boucle Pour est utilisée lorsque le nombre d'itérations est connu à l'avance.

```codefr
Pour variable De valeurInitiale A valeurFinale [Pas pas] Faire
    // Instructions à répéter
FinPour
```

#### Exemple

```codefr
Variable i: Entier
Variable somme: Entier = 0

Debut
    // Calcul de la somme des nombres de 1 à 10
    Pour i De 1 A 10 Faire
        somme = somme + i
    FinPour
    
    Ecrire("La somme des nombres de 1 à 10 est : ", somme, "\n")  // 55
    
    // Affichage des nombres pairs de 10 à 0
    Pour i De 10 A 0 Pas -2 Faire
        Ecrire(i, " ")
    FinPour
    Ecrire("\n")  // Affiche: 10 8 6 4 2 0
Fin
```

### Boucle TantQue

La boucle TantQue est utilisée lorsque le nombre d'itérations n'est pas connu à l'avance et dépend d'une condition.

```codefr
TantQue condition Faire
    // Instructions à répéter
FinTantQue
```

#### Exemple

```codefr
Variable nombre: Entier
Variable essais: Entier = 0
Variable nombreMystere: Entier = 42

Debut
    Ecrire("Devinez le nombre mystère entre 1 et 100.\n")
    
    TantQue nombre != nombreMystere Faire
        Ecrire("Votre proposition : ")
        Lire(nombre)
        essais = essais + 1
        
        Si nombre < nombreMystere Alors
            Ecrire("C'est plus !\n")
        SinonSi nombre > nombreMystere Alors
            Ecrire("C'est moins !\n")
        FinSi
    FinTantQue
    
    Ecrire("Bravo ! Vous avez trouvé en ", essais, " essais.\n")
Fin
```

### Boucle Répéter-Jusqu'à

La boucle Répéter-Jusqu'à exécute le bloc d'instructions au moins une fois, puis continue tant que la condition n'est pas vérifiée.

```codefr
Repeter
    // Instructions à répéter
Jusqu'a condition
```

#### Exemple

```codefr
Variable choix: Caractere

Debut
    Repeter
        Ecrire("Menu principal\n")
        Ecrire("1. Jouer\n")
        Ecrire("2. Options\n")
        Ecrire("3. Quitter\n")
        Ecrire("Votre choix : ")
        Lire(choix)
        
        Si choix == '1' Alors
            Ecrire("Lancement du jeu...\n")
        SinonSi choix == '2' Alors
            Ecrire("Ouverture des options...\n")
        SinonSi choix != '3' Alors
            Ecrire("Choix invalide, veuillez réessayer.\n")
        FinSi
    Jusqu'a choix == '3'
    
    Ecrire("Au revoir !\n")
Fin
```
