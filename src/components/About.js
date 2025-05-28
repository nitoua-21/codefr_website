import React from 'react';

const About = () => (
  <>

    {/* Main Content */}
    <section className="section" id="about" style={{ background: '#f8fafc' }}>
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
              <div className="column is-6-tablet is-4-desktop">
                <div className="card has-background-white-ter" style={{ borderRadius: '1rem', border: '1px solid #e0f3fa', minHeight: 180 }}>
                  <div className="card-content has-text-centered">
                    <span className="icon is-medium mb-2"><i className="fas fa-user-graduate fa-lg" style={{ color: '#3fd2c7' }}></i></span>
                    <p><strong>Élèves</strong><br />Écrivez des algorithmes simples en pseudocode français et voyez votre logique s’animer, sans barrière linguistique.</p>
                  </div>
                </div>
              </div>
              <div className="column is-6-tablet is-4-desktop">
                <div className="card has-background-white-ter" style={{ borderRadius: '1rem', border: '1px solid #e0f3fa', minHeight: 180 }}>
                  <div className="card-content has-text-centered">
                    <span className="icon is-medium mb-2"><i className="fas fa-chalkboard-teacher fa-lg" style={{ color: '#99ddff' }}></i></span>
                    <p><strong>Professeurs de sciences</strong><br />Montrez comment un pseudocode se transforme en programme réel, rendant la pensée algorithmique plus concrète.</p>
                  </div>
                </div>
              </div>
              <div className="column is-6-tablet is-4-desktop">
                <div className="card has-background-white-ter" style={{ borderRadius: '1rem', border: '1px solid #e0f3fa', minHeight: 180 }}>
                  <div className="card-content has-text-centered">
                    <span className="icon is-medium mb-2"><i className="fas fa-project-diagram fa-lg" style={{ color: '#00458b' }}></i></span>
                    <p><strong>Élèves (avancés)</strong><br />Abordez des algorithmes complexes avec boucles et fonctions en français, compilez-les et admirez les résultats.</p>
                  </div>
                </div>
              </div>
              <div className="column is-6-tablet is-4-desktop">
                <div className="card has-background-white-ter" style={{ borderRadius: '1rem', border: '1px solid #e0f3fa', minHeight: 180 }}>
                  <div className="card-content has-text-centered">
                    <span className="icon is-medium mb-2"><i className="fas fa-user-cog fa-lg" style={{ color: '#3fd2c7' }}></i></span>
                    <p><strong>Tuteurs en programmation</strong><br />Détectez et expliquez les erreurs de compilation en pseudocode français, aidez les élèves à mieux comprendre et corriger leurs fautes.</p>
                  </div>
                </div>
              </div>
              <div className="column is-6-tablet is-4-desktop">
                <div className="card has-background-white-ter" style={{ borderRadius: '1rem', border: '1px solid #e0f3fa', minHeight: 180 }}>
                  <div className="card-content has-text-centered">
                    <span className="icon is-medium mb-2"><i className="fas fa-code fa-lg" style={{ color: '#99ddff' }}></i></span>
                    <p><strong>Développeurs</strong><br />Créez des exercices de programmation en français, compilables et exécutables, pour des supports interactifs destinés aux élèves francophones.</p>
                  </div>
                </div>
              </div>
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
