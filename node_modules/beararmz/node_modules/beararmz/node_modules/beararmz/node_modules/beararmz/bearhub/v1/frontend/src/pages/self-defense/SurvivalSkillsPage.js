import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SurvivalTipCard from '../../components/SurvivalTipCard';
import ArticleCard from '../../components/ArticleCard';
import NestedNavigation from '../../components/NestedNavigation';
import '../../styles/pages/self-defense/SurvivalSkillsPage.css';

const SurvivalSkills = () => {
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/v1/bearhub/articles');
        setRelatedArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching related articles:', error);
        setError('Failed to fetch related articles. Please try again later.');
        setLoading(false);
      }
    };

    fetchRelatedArticles();
  }, []); 

  return (
    <>
      <NestedNavigation />
      <div className="survival-skills-container">
        {/* First div: Survival tip image and description */}
        <div className="survival-tip">
          {/* Survival tip image and description */}
        </div>

        {/* Second div: Survival tip cards */}
        <div className="survival-tip-cards">
          {/* Flippable Survival tip cards */}
          <SurvivalTipCard 
            frontImageSrc="https://plus.unsplash.com/premium_photo-1669759293824-b3d9af13bb73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcGZpcmV8ZW58MHx8MHx8fDA%3D"
            frontText="Front text 1"
            backText="Back text 1"
          />
          <SurvivalTipCard 
            frontImageSrc="https://images.unsplash.com/photo-1551336841-32a98a5917eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhcnxlbnwwfHwwfHx8MA%3D%3D"
            frontText="Front text 2"
            backText="Back text 2"
          />
          {/* Add more SurvivalTipCard components as needed */}
        </div>

        {/* Third div: Related articles */}
        <div className="related-articles">
          <h2>Related Articles</h2>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && (
            <div className="related-articles-container">
              {relatedArticles.map(article => (
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
          )}
        </div>
      </div>
    </>
  );
};

export default SurvivalSkills;
