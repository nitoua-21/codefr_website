import React from 'react';
import { Link } from 'react-router-dom';

const DownloadSection = () => {
  return (
    <section id="download" className="section">
      <div className="container">
        <h2 className="title is-2 has-text-centered mb-6">Télécharger CodeFr</h2>
        
        <div className="columns is-centered">
          <div className="column is-4">
            <div className="download-option has-text-centered">
              <span className="icon is-large mb-4">
                <i className="fab fa-windows fa-3x" style={{ color: '#00458b' }}></i>
              </span>
              <h3 className="title is-4" style={{ color: '#00458b' }}>Windows</h3>
              <p className="mb-4">Compatible avec Windows 10 et 11</p>
              <a 
                href="files/CodeFrSetup.exe" 
                className="button is-rounded" 
                style={{ backgroundColor: '#3fd2c7', color: 'white' }}
              >
                <span className="icon">
                  <i className="fas fa-download"></i>
                </span>
                <span>Télécharger pour Windows</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="box mt-6" style={{ borderColor: '#99ddff', borderWidth: '2px', borderStyle: 'solid' }}>
          <h3 className="title is-4 has-text-centered" style={{ color: '#00458b' }}>Instructions d'installation</h3>
          
          <div className="content has-text-left">
            <h4 className="title is-5" style={{ color: '#3fd2c7' }}>Windows</h4>
            <ol>
              <li>Téléchargez le fichier d'installation <code>CodeFrSetup.exe</code></li>
              <li>Exécutez le fichier téléchargé</li>
              <li>Suivez les instructions de l'assistant d'installation</li>
              <li>Une fois l'installation terminée, lancez <em>CodeFr IDE</em> depuis le menu Démarrer</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
