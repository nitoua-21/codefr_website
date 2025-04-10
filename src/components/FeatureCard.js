import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="card feature-card">
      <div className="card-content">
        <div className="has-text-centered mb-4">
          <span className="icon is-large">
            <i className={`fas ${icon} fa-1x`} style={{ color: '#3fd2c7' }}></i>
          </span>
        </div>
        <h3 className="title is-4 has-text-centered" >{title}</h3>
        <p className="has-text-centered">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
