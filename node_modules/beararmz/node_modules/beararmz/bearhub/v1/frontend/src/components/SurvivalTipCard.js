import React, { useState } from 'react';
import '../styles/SurvivalTipCard.css'; // Import CSS for styling

const SurvivalTipCard = ({ frontImageSrc, frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`survival-tip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-front">
        <img src={frontImageSrc} alt="Front" />
        <p>{frontText}</p>
      </div>
      <div className="card-back">
        <p>{backText}</p>
      </div>
    </div>
  );
};

export default SurvivalTipCard;
