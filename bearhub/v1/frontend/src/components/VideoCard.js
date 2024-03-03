import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import '../styles/VideoCard.css'; // Import only VideoCard.css for styling
import ReactPlayer from 'react-player';
import { getYouTubeThumbnailUrl } from '../utils';

const VideoCard = ({ title, description, url, category, isSearchResult }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Card className="video-card">
      <CardMedia component="img" alt={title} image={getYouTubeThumbnailUrl(url)} />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {isSearchResult && (
          <Typography variant="body2" color="text.secondary">
            Category: {category}
          </Typography>
        )}
      </CardContent>
      {!isPlaying && (
        <IconButton className="play-button" color="primary" aria-label="play" onClick={handlePlayClick}>
          <PlayArrowIcon />
        </IconButton>
      )}
      {isPlaying && (
        <div className="react-player-wrapper">
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            controls
            playing={true}
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      )}
    </Card>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  isSearchResult: PropTypes.bool,
};

export default VideoCard;
