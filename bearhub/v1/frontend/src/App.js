import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoriesAndVideos = async () => {
      try {
        const categoriesResponse = await fetch('http://localhost:5000/v1/bearhub/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        const videosResponse = await fetch('http://localhost:5000/v1/bearhub/videos');
        const videosData = await videosResponse.json();
        setVideos(videosData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
        setLoading(false);
      }
    };

    fetchCategoriesAndVideos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      {/* Navbar */}
      <nav>
        {/* Navbar contents */}
      </nav>

      {/* Page View */}
      <div className="page-view">
        {/* Search Bar */}
        <input type="text" placeholder="Search video categories" />

        {/* First 2 rows of videos */}
        <div className="video-rows">
          {videos.slice(0, 6).map(video => (
            <div key={video._id} className="video-card">
              {/* Video card contents */}
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              {/* Other video details */}
            </div>
          ))}
        </div>

        <hr /> {/* Break between video rows */}

        {/* Last 2 rows of videos */}
        <div className="video-rows">
          {videos.slice(6, 12).map(video => (
            <div key={video._id} className="video-card">
              {/* Video card contents */}
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              {/* Other video details */}
            </div>
          ))}
        </div>
      </div>

      {/* Generic Footer */}
      <footer>
        {/* Footer contents */}
      </footer>
    </div>
  );
};

export default App;
