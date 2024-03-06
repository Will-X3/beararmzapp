import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SliderView.css'; // Import the CSS file
import { dummyVideos } from '../data/dummyVideos'; // Import the dummyVideos array

const SliderView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();

  const CustomPrevArrow = ({ onClick }) => (
    <div className="prev-arrow" onClick={onClick}>
      ❮
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="next-arrow" onClick={onClick}>
      ❯
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index) => setCurrentIndex(index),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };


  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        {dummyVideos.map((video, index) => (
          <div key={index}>
            <img src={video.url} alt={video.title} />
          </div>
        ))}
      </Slider>
      <div className="dots-container">
        {dummyVideos.map((_, index) => (
          <div
            key={index}
            className="dot"
            onClick={() => setCurrentIndex(index)}
            style={{ backgroundColor: index === currentIndex ? '#000' : '#ccc' }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderView;
