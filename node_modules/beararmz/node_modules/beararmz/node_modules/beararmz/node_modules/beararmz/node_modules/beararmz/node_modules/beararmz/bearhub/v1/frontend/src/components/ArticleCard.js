import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/ArticleCard.css'; // Import your article card styling

const ArticleCard = ({ title, content, category }) => {
  return (
    <Card className="article-card">
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
    </Card>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ArticleCard;
