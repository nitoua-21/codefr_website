import React from 'react';

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
        
        {/* Video Presentation Section */}
        <div className="columns is-centered mt-6">
          <div className="column is-8">
            <h3 className="title is-4 has-text-centered mb-4" style={{ color: '#00458b' }}>
              <span className="icon mr-2">
                <i className="fab fa-youtube"></i>
              </span>
              Présentation du Projet
            </h3>
            <div className="video-container has-text-centered">
              <div className="video-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: '2rem' }}>
                <iframe 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
                  src="https://www.youtube.com/embed/hLnkbUnFLQg?si=vk55Fs3kVtswCqgR" 
                  title="Présentation du projet CodeFR" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="has-text-grey is-size-6">
                Découvrez CodeFR en action dans cette présentation vidéo
              </p>
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
