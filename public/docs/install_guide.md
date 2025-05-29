
# Guide d'installation et d'utilisation de CodeFR

Ce guide vous explique comment installer, compiler et exécuter des programmes écrits en **CodeFR**. Il est adapté aux débutants comme aux utilisateurs avancés souhaitant structurer des projets multi-fichiers.

---

## 1. Installation

### Étapes :

1. **Téléchargez le compilateur CodeFR** depuis le site officiel ou le dépôt GitHub.
2. **Décompressez** l’archive si nécessaire.
3. **Ajoutez le chemin du compilateur à votre variable d’environnement PATH** (optionnel, mais recommandé).

### Vérification de l’installation :

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
./codefr mon_programme.cfr
```

Cela compile et exécute le programme `mon_programme.cfr`.

###  Pour plusieurs fichiers (modules + principal) :

```bash
./codefr calculs.cfr principal.cfr
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
| `codefr --help`                | Affiche l’aide sur les options disponibles      |

---

## Bonnes pratiques

- Organisez vos fichiers en **modules** réutilisables pour les fonctions courantes.
- Testez chaque programme avec des **valeurs d’entrée réalistes**.
- Utilisez des **commentaires** pour documenter le code.
- Sauvegardez vos projets avec des **noms explicites**.

---

Avec ce guide, vous êtes prêt à développer, organiser et exécuter vos programmes CodeFR de manière efficace et professionnelle !
