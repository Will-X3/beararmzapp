import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2'; // Import Line component from react-chartjs-2
import ArticleCard from '../../components/ArticleCard';
import VideoCard from '../../components/VideoCard';
import '../../styles/pages/self-defense/DemographicsPage.css';
import NestedNavigation from '../../components/NestedNavigation';

const DemographicsPage = () => {
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesResponse = await axios.get('http://localhost:5000/v1/bearhub/articles');
        setArticles(articlesResponse.data);

        const videosResponse = await axios.get('http://localhost:5000/v1/bearhub/videos');
        setVideos(videosResponse.data);

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Define options for the line chart
  const options = {
    scales: {
      x: {
        type: 'category',
      },
    },
  };

  return (
    <>
      <NestedNavigation />
      <div className="demographics-page">
        <div className="demographics-section">
          {chartData && <Line data={chartData} options={options} />} {/* Render the line chart */}
        </div>

        <div className="article-scrollable-row">
          <h2>Related Articles</h2>
          <div className="scrollable-row">
            {articles.map(article => (
              <ArticleCard
                key={article._id}
                id={article._id}
                title={article.title}
                content={article.content}
                category={article.category}
                imageUrl={article.imageUrl}
              />
            ))}
          </div>
        </div>

        <div className="video-scrollable-row">
          <h2>Related Videos</h2>
          <div className="scrollable-row">
            {videos.map(video => (
              <VideoCard
                key={video._id}
                title={video.title}
                description={video.description}
                category={video.category}
                url={video.url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DemographicsPage;
