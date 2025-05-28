import React from 'react';
import BenefitCard from './BenefitCard';

const benefits = [
  {
    iconClass: 'fa-user-graduate',
    iconColor: '#3fd2c7',
    title: 'Élèves',
    description: `Écrivez des algorithmes simples en pseudocode français et voyez votre logique s’animer, sans barrière linguistique.`
  },
  {
    iconClass: 'fa-chalkboard-teacher',
    iconColor: '#99ddff',
    title: 'Professeurs de sciences',
    description: `Montrez comment un pseudocode se transforme en programme réel, rendant la pensée algorithmique plus concrète.`
  },
  {
    iconClass: 'fa-project-diagram',
    iconColor: '#00458b',
    title: 'Élèves (avancés)',
    description: `Abordez des algorithmes complexes avec boucles et fonctions en français executez-les et admirez les résultats.`
  },
  {
    iconClass: 'fa-user-cog',
    iconColor: '#3fd2c7',
    title: 'Tuteurs en programmation',
    description: `Détectez et expliquez les erreurs de compilation en pseudocode français, aidez les élèves à mieux comprendre et corriger leurs fautes.`
  },
  {
    iconClass: 'fa-code',
    iconColor: '#99ddff',
    title: 'Développeurs',
    description: `Créez des exercices de programmation en français, compilables et exécutables, pour des supports interactifs destinés aux élèves francophones.`
  }
];

const About = () => (
  <>
    {/* Main Content */}
    <section className="section" id="about">
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="box" style={{ borderRadius: '1.5rem', boxShadow: '0 4px 32px rgba(0,0,0,0.05)', border: '1px solid #e0f3fa' }}>
          <h1 className="title is-1" style={{ fontWeight: 800, letterSpacing: '1px' }}>À propos de CodeFR</h1>
          <div className="columns is-vcentered">
            <div className="column is-2 has-text-centered">
              <span className="icon is-large">
                <i className="fas fa-chalkboard-teacher fa-2x" style={{ color: '#00458b' }}></i>
              </span>
            </div>
            <div className="column is-10">
              <p className="is-size-5 mb-4" style={{ lineHeight: 1.7 }}>
                Imaginez ceci : vous êtes dans une salle de classe de lycée en France, entouré d'élèves curieux qui débutent tout juste en programmation. Vous disposez d’un pseudocode écrit en français, mais à chaque démonstration, vous vous heurtez à un mur. Pourquoi ? Parce que les langages de programmation comme C, Python et C++ sont tous en anglais ! C’est comme essayer d’apprendre à cuisiner avec une recette dans une langue inconnue. Frustrant, non ?
              </p>
            </div>
          </div>
          <div className="columns is-vcentered mt-2">
            <div className="column is-2 has-text-centered">
              <span className="icon is-large">
                <i className="fas fa-magic fa-2x" style={{ color: '#3fd2c7' }}></i>
              </span>
            </div>
            <div className="column is-10">
              <p className="is-size-5 mb-4" style={{ lineHeight: 1.7 }}>
                C’est ainsi que CodeFR est né. Imaginez une ampoule qui s’allume — l’idée de combler le fossé entre le pseudocode en français et les langages de programmation basés sur l’anglais prend vie. Le compilateur CodeFR agit comme un traducteur magique, permettant aux élèves d’écrire et d’exécuter des algorithmes directement en français. Fini les difficultés liées à la syntaxe anglaise — place au plaisir pur et simple de l’algorithmique !
              </p>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="mt-5">
            <h3 className="title is-4 has-text-centered mb-4" style={{ color: '#00458b' }}>À qui cela profite&nbsp;?</h3>
            <div className="columns is-multiline is-centered">
              {benefits.map((benefit, idx) => (
                <div className="column is-6-tablet is-4-desktop" key={idx}>
                  <BenefitCard iconClass={benefit.iconClass} iconColor={benefit.iconColor} title={benefit.title}>
                    {benefit.description}
                  </BenefitCard>
                </div>
              ))}
            </div>
          </div>

          <div className="has-text-centered mt-6">
            <p className="is-size-5" style={{ fontWeight: 600, color: '#00458b' }}>
              Que vous soyez élève, enseignant, tuteur ou professionnel, CodeFR est là pour rendre la programmation aussi simple que un, deux, trois ! <span role="img" aria-label="rocket">🚀</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
