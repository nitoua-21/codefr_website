import React from 'react';

const BenefitCard = ({ iconClass, iconColor, title, children }) => (
  <div className="card" style={{ borderRadius: '1rem', border: '1px solid #e0f3fa', minHeight: 180 }}>
    <div className="card-content has-text-centered">
      <span className="icon is-medium mb-2">
        <i className={`fas ${iconClass} fa-lg`} style={{ color: iconColor }}></i>
      </span>
      <p>
        <strong>{title}</strong><br />
        {children}
      </p>
    </div>
  </div>
);

export default BenefitCard;
