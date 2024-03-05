// LegalCard.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/LegalCard.css';

const LegalCard = ({ title, description, imageUrl }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`legal-card ${isFullScreen ? 'fullscreen' : ''}`}>
      <div className="legal-card-header">
        <h2>{title}</h2>
        <img src={imageUrl} alt="Legal Update" />
        {isFullScreen && (
          <button className="exit-fullscreen" onClick={toggleFullScreen}>
            <span>&times;</span>
          </button>
        )}
      </div>
      <div className="legal-card-body">
        <p>{description}</p>
        {!isFullScreen && (
          <button className="read-more" onClick={toggleFullScreen}>
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

LegalCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default LegalCard;
