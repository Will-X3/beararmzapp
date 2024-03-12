import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/pages/self-defense/DemographicsPage.css";
import NestedNavigation from "../../components/NestedNavigation";
import VideoCard from "../../components/VideoCard";
import ArticleCard from "../../components/ArticleCard";
import { Line } from "react-chartjs-2";

// Function to generate mock demographic data dynamically
const generateMockDemographicData = () => {
  const data = [];
  // Generate mock data here...
  return data;
};

const DemographicsPage = () => {
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [demographicData, setDemographicData] = useState(null); // State to hold demographic data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesResponse = await axios.get(
          "http://localhost:5000/v1/bearhub/articles"
        );
        setArticles(articlesResponse.data);

        const videosResponse = await axios.get(
          "http://localhost:5000/v1/bearhub/videos"
        );
        setVideos(videosResponse.data);

        // Set demographic data using the generated mock data
        setDemographicData(generateMockDemographicData());

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

  return (
    <>
      <NestedNavigation />
      <div className="demographics-page">
        <div className="demographics-section">
          {/* Render the Line chart with mock demographic data */}
          <Line
            data={{
              labels: demographicData.map((data) => data.label), // Corrected variable name
              datasets: [
                {
                  label: "Population",
                  data: demographicData.map((data) => data.value), // Corrected variable name
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                },
              ],
            }}
          />
        </div>
        <div className="article-scrollable-row">
          <h2>Related Articles</h2>
          <div className="scrollable-row">
            {articles.map((article) => (
              <ArticleCard
                key={article._id}
                id={article._id}
                title={article.title}
                content={article.content}
                category={article.category}
                imageUrl={article.imageUrl}
                onClick={() => {}} // Add a placeholder onClick prop
              />
            ))}
          </div>
        </div>

        <div className="video-scrollable-row">
          <h2>Related Videos</h2>
          <div className="scrollable-row">
            {videos.map((video) => (
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
