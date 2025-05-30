import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// Components
import FeatureCard from '../components/FeatureCard';
import DownloadSection from '../components/DownloadSection';
import About from '../components/About';
import { markdownComponents } from '../components/MarkdownComponents.js';

const markdowncontent = `\`\`\`codefr
// Mon premier programme en CodeFr
Variable age: Entier

Debut
    Ecrire("Bonjour, monde !")
    
    Ecrire("Quel est votre âge ? ")
    Lire(age)
    
    Si age >= 18 Alors
        Ecrire("Vous êtes majeur.")
    Sinon
        Ecrire("Vous êtes mineur.")
    FinSi
Fin
\`\`\``

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero is-primary is-medium" style={{ backgroundColor: '#3fd2c7' }}>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-6">
                <h1 className="title is-1" style={{ color: 'white' }}>CodeFr</h1>
                <h2 className="subtitle is-3" style={{ color: 'white' }}>Programmez en français</h2>
                <p className="is-size-5 mb-5" style={{ color: 'white' }}>
                  Un langage de programmation conçu pour l'apprentissage de l'algorithmique en français.
                </p>
                <div className="has-text-centered">
                  <Link to="/documentation" className="button is-rounded mr-2" style={{ backgroundColor: '#3fd2c7', color: 'white', border: '1px solid white' }}>
                    <span className="icon">
                      <i className="fas fa-book"></i>
                    </span>
                    <span>Documentation</span>
                  </Link>
                  <a href="#download" className="button is-rounded" style={{ backgroundColor: '#99ddff', color: '#333' }}>
                    <span className="icon">
                      <i className="fas fa-download"></i>
                    </span>
                    <span>Télécharger</span>
                  </a>
                </div>
              </div>
              <div className="column is-6 has-text-left">
                <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{markdowncontent}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-6">Fonctionnalités</h2>
          <div className="columns is-multiline">
            <div className="column is-4">
              <FeatureCard
                icon="fa-language"
                title="Programmation en français"
                description="Apprenez les concepts de programmation dans votre langue maternelle, sans la barrière de l'anglais."
              />
            </div>
            <div className="column is-4">
              <FeatureCard
                icon="fa-code"
                title="Syntaxe intuitive"
                description="Une syntaxe claire et lisible, inspirée des algorithmes enseignés dans les écoles francophones."
              />
            </div>
            <div className="column is-4">
              <FeatureCard
                icon="fa-graduation-cap"
                title="Idéal pour l'apprentissage"
                description="Parfait pour les débutants et les établissements d'enseignement qui souhaitent enseigner l'algorithmique."
              />
            </div>
            <div className="column is-4">
              <FeatureCard
                icon="fa-laptop-code"
                title="IDE intégré"
                description="Un environnement de développement intégré avec coloration syntaxique et débogueur."
              />
            </div>
            <div className="column is-4">
              <FeatureCard
                icon="fa-chart-line"
                title="Maîtrise des outils low-code"
                description="CodeFr vous offre une utilisation intuitive des fonctions avancées des outils low-code tels qu'Excel, Power BI et Tableau, vous aidant ainsi à gagner en autonomie et à atteindre l'indépendance professionnelle. "
              />
            </div>
            <div className="column is-4">
              <FeatureCard
                icon="fa-book"
                title="Documentation complète"
                description="Une documentation détaillée avec des exemples et des tutoriels pour vous aider à démarrer."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />

      {/* Call to Action */}
      <section className="section" style={{ backgroundColor: '#99ddff' }}>
        <div className="container">
          <div className="has-text-centered">
            <h2 className="title is-3" style={{ color: '#333' }}>Prêt à commencer ?</h2>
            <p className="subtitle is-5 mb-5" style={{ color: '#333' }}>
              Rejoignez la communauté CodeFr et commencez à programmer en français dès aujourd'hui.
            </p>
            <Link to="/documentation" className="button is-rounded is-medium" style={{ backgroundColor: '#00458b', color: 'white' }}>
              <span className="icon">
                <i className="fas fa-book"></i>
              </span>
              <span>Consulter la documentation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
