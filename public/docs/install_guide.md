
# Guide d'installation et d'utilisation de CodeFR

Ce guide vous explique comment installer, compiler et exécuter des programmes écrits en **CodeFR**. Il est adapté aux débutants comme aux utilisateurs avancés souhaitant structurer des projets multi-fichiers.

---

## 1. Installation

### Étapes :

1. **Téléchargez l'interpréteur [CodeFrSetup.exe](http://localhost:3000/files/CodeFrSetup.exe)** depuis le site officiel.
2. **Exécutez le fichier téléchargé**
3. **Suivez les instructions de l'assistant d'installation**
4. **Une fois l'installation terminée, lancez CodeFr IDE depuis le menu Démarrer**

### Vérification de l’installation :

Ouvrez un terminal et entrez la commande suivante :
```bash
codefr --version
```

> Cette commande doit afficher le numéro de version installé.

---

## 2. Structure d’un fichier CodeFR

Un fichier CodeFR se termine par l’extension `.cfr`. Il peut contenir des déclarations, fonctions et un bloc principal `Debut ... Fin`.

```codefr
Debut
    Ecrire("Bonjour CodeFR !\n")
Fin
```

---

## 3. Compilation et exécution

### Pour un fichier unique :

```bash
codefr mon_programme.cfr
```

Cela compile et exécute le programme `mon_programme.cfr`.

###  Pour plusieurs fichiers (modules + principal) :

```bash
codefr calculs.cfr principal.cfr
```

- `calculs.cfr` : module contenant des fonctions
- `principal.cfr` : programme principal

Les fichiers doivent être dans le **même dossier** ou bien référencés par leur chemin.

---

## 4. Commandes utiles

| Commande                        | Description                                      |
|---------------------------------|--------------------------------------------------|
| `codefr fichier.cfr`            | Compile et exécute le fichier                   |
| `codefr fichier1.cfr fichier2.cfr` | Compile plusieurs fichiers ensemble         |
| `codefr --version`             | Affiche la version installée                    |

---

## Bonnes pratiques

- Organisez vos fichiers en **modules** réutilisables pour les fonctions courantes.
- Testez chaque programme avec des **valeurs d’entrée réalistes**.
- Utilisez des **commentaires** pour documenter le code.
- Sauvegardez vos projets avec des **noms explicites**.

---

Avec ce guide, vous êtes prêt à développer, organiser et exécuter vos programmes CodeFR de manière efficace et professionnelle !
