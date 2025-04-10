import React from 'react';
import { Link } from 'react-router-dom';

const DownloadSection = () => {
  return (
    <section id="download" className="section">
      <div className="container">
        <h2 className="title is-2 has-text-centered mb-6">Télécharger CodeFr</h2>
        
        <div className="columns is-multiline">
          <div className="column is-4">
            <div className="download-option has-text-centered">
              <span className="icon is-large mb-4">
                <i className="fab fa-windows fa-3x" style={{ color: '#00458b' }}></i>
              </span>
              <h3 className="title is-4" style={{ color: '#00458b' }}>Windows</h3>
              <p className="mb-4">Compatible avec Windows 10 et 11</p>
              <a 
                href="https://example.com/download" 
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
          
          <div className="column is-4">
            <div className="download-option has-text-centered">
              <span className="icon is-large mb-4">
                <i className="fab fa-apple fa-3x" style={{ color: '#00458b' }}></i>
              </span>
              <h3 className="title is-4" style={{ color: '#00458b' }}>macOS</h3>
              <p className="mb-4">Compatible avec macOS 11 et plus récent</p>
              <a 
                href="https://example.com/download" 
                className="button is-rounded" 
                style={{ backgroundColor: '#3fd2c7', color: 'white' }}
              >
                <span className="icon">
                  <i className="fas fa-download"></i>
                </span>
                <span>Télécharger pour macOS</span>
              </a>
            </div>
          </div>
          
          <div className="column is-4">
            <div className="download-option has-text-centered">
              <span className="icon is-large mb-4">
                <i className="fab fa-linux fa-3x" style={{ color: '#00458b' }}></i>
              </span>
              <h3 className="title is-4" style={{ color: '#00458b' }}>Linux</h3>
              <p className="mb-4">Compatible avec les distributions majeures</p>
              <a 
                href="https://example.com/download" 
                className="button is-rounded" 
                style={{ backgroundColor: '#3fd2c7', color: 'white' }}
              >
                <span className="icon">
                  <i className="fas fa-download"></i>
                </span>
                <span>Télécharger pour Linux</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="box mt-6" style={{ borderColor: '#99ddff', borderWidth: '2px', borderStyle: 'solid' }}>
          <h3 className="title is-4 has-text-centered" style={{ color: '#00458b' }}>Instructions d'installation</h3>
          
          <div className="content has-text-left">
            <h4 className="title is-5" style={{ color: '#3fd2c7' }}>Windows</h4>
            <ol>
              <li>Téléchargez le fichier d'installation <code>codefr-setup.exe</code></li>
              <li>Exécutez le fichier téléchargé</li>
              <li>Suivez les instructions de l'assistant d'installation</li>
              <li>Une fois l'installation terminée, lancez CodeFr depuis le menu Démarrer</li>
            </ol>
            
            <h4 className="title is-5" style={{ color: '#3fd2c7' }}>macOS</h4>
            <ol>
              <li>Téléchargez le fichier <code>codefr.dmg</code></li>
              <li>Ouvrez le fichier DMG téléchargé</li>
              <li>Faites glisser l'application CodeFr dans votre dossier Applications</li>
              <li>Lancez CodeFr depuis le Launchpad ou le dossier Applications</li>
            </ol>
            
            <h4 className="title is-5" style={{ color: '#3fd2c7' }}>Linux</h4>
            <ol>
              <li>Téléchargez le fichier <code>codefr.AppImage</code></li>
              <li>Rendez le fichier exécutable : <code>chmod +x codefr.AppImage</code></li>
              <li>Exécutez l'application : <code>./codefr.AppImage</code></li>
            </ol>
          </div>
        </div>
        
        <div className="mt-4">
          <a href="https://example.com/release-notes" className="has-text-primary">Notes de version</a>
        </div>
        
        <div className="box mt-5">
          <h3 className="title is-4">Installation rapide</h3>
          <div className="content has-text-left">
            <ol>
              <li>Téléchargez le fichier d'installation CodeFr pour Windows</li>
              <li>Exécutez le fichier .exe téléchargé</li>
              <li>Suivez les instructions de l'assistant d'installation</li>
              <li>Lancez CodeFr depuis le menu Démarrer ou le raccourci créé</li>
            </ol>
            <p>
              Pour plus d'informations sur l'installation et la configuration, consultez notre{' '}
              <Link to="/documentation#installation" className="has-text-primary">
                guide d'installation
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
