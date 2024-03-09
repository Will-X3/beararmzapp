// ArticleCard.js

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/ArticleCard.css'; // Import your article card styling

const ArticleCard = ({ id, title, content, category, imageUrl, onClick }) => {
  const handleClick = () => {
    onClick({ id, title, content, category, imageUrl });
  };

  return (
    <div className="article-card-container" onClick={handleClick}>
      <Card className="article-card">
        {imageUrl && (
          <img src={imageUrl} className="card-image" alt={title} />
        )}
        <CardContent>
          <Typography variant="h6" component="div" className="card-title">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="card-content">
            {content}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="card-category">
            Category: {category}
          </Typography>
        </CardContent>
        {/* Use Link component to navigate to ArticleDetails page */}
        <Link to={`/article/${id}`} className="article-details-link">
          View Details
        </Link>
      </Card>
    </div>
  );
};

ArticleCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ArticleCard;
