import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SliderView.css"; // Import the CSS file

const SliderView = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/v1/bearhub/videos"
        );
        // Extract videoId from the URL and add it to each video object
        const updatedVideos = response.data.map(video => ({
          ...video,
          videoId: extractVideoId(video.url)
        }));
        setVideos(updatedVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos(); // Fetch videos when the component mounts
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const extractVideoId = (url) => {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
    return videoIdMatch && videoIdMatch[1];
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <div className="prev-arrow" onClick={handlePrev}>
          ❮
        </div>
        {videos.length > 0 && (
          <iframe
            src={`https://www.youtube.com/embed/${videos[currentIndex].videoId}`}
            title={videos[currentIndex].title}
            className="slide"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
        <div className="next-arrow" onClick={handleNext}>
          ❯
        </div>
        <div className="dots-container">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderView;