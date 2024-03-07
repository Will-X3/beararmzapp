import React, { useState } from 'react';
import '../styles/SliderView.css'; // Import the CSS file
import { dummyVideos } from '../data/dummyVideos'; // Import the dummyVideos array

const SliderView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? dummyVideos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === dummyVideos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <div className="prev-arrow" onClick={handlePrev}>
          ❮
        </div>
        <video src={dummyVideos[currentIndex].url} controls className="slide" />
        <div className="next-arrow" onClick={handleNext}>
          ❯
        </div>
        <div className="dots-container">
          {dummyVideos.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderView;
