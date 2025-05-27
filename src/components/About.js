import React from 'react';

const About = () => (
  <section className="section" id="about">
    <div className="container">
      <h2 className="title is-2 has-text-centered mb-6">À propos de CodeFR</h2>
      <div className="content is-medium" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p>
          Imaginez ceci : vous êtes dans une salle de classe de lycée en France, entouré d'élèves curieux qui débutent tout juste en programmation. Vous disposez d’un pseudocode écrit en français, mais à chaque démonstration, vous vous heurtez à un mur. Pourquoi ? Parce que les langages de programmation comme C, Python et C++ sont tous en anglais ! C’est comme essayer d’apprendre à cuisiner avec une recette dans une langue inconnue. Frustrant, non ?
        </p>
        <p>
          C’est ainsi que CodeFR est né. Imaginez une ampoule qui s’allume — l’idée de combler le fossé entre le pseudocode en français et les langages de programmation basés sur l’anglais prend vie. Le compilateur CodeFR agit comme un traducteur magique, permettant aux élèves d’écrire et d’exécuter des algorithmes directement en français. Fini les difficultés liées à la syntaxe anglaise — place au plaisir pur et simple de l’algorithmique !
        </p>
        <h3 className="title is-4 mt-5">À qui cela profite :</h3>
        <ul>
          <li><strong>Élèves :</strong> Ils peuvent désormais écrire des algorithmes simples en pseudocode français et voir leur logique s’animer, sans barrière linguistique.</li>
          <li><strong>Professeurs de sciences :</strong> Ils peuvent montrer comment un pseudocode se transforme en programme réel, rendant la pensée algorithmique plus concrète.</li>
          <li><strong>Élèves (encore) :</strong> Ils peuvent aborder des algorithmes complexes avec boucles et fonctions en français, les compiler et admirer les résultats, sans changer de langue.</li>
          <li><strong>Tuteurs en programmation :</strong> Ils peuvent détecter et expliquer les erreurs de compilation en pseudocode français, aidant les élèves à mieux comprendre et corriger leurs fautes.</li>
          <li><strong>Développeurs :</strong> Ils peuvent créer des exercices de programmation en français, compilables et exécutables, offrant ainsi des supports interactifs pour les élèves francophones.</li>
        </ul>
        <p>
          Que vous soyez élève, enseignant, tuteur ou proffesionnell, CodeFR est là pour rendre la programmation aussi simple que un, deux, trois ! 🚀
        </p>
      </div>
    </div>
  </section>
);

export default About;
