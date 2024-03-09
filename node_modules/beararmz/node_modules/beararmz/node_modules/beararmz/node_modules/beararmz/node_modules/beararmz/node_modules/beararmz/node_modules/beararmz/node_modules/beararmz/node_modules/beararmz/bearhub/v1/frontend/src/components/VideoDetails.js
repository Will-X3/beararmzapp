import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../styles/VideoDetails.css';
import NestedNavigation from './NestedNavigation';

const VideoDetails = () => {
  // Access the URL parameter containing the video URL
  const { videoUrl } = useParams();

  // Render the Video Details page
  return (
    <div className="video-details-container">
        <NestedNavigation/>
      <div className="video-player-wrapper">
        <ReactPlayer
          url={decodeURIComponent(videoUrl)}
          width="100%"
          height="100%"
          controls
          playing
        />
      </div>
      <div className="video-info">
        <h1 className="video-title">Video Title</h1>
        <p className="video-description">Video Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="video-metadata">
          <span className="metadata-item">Author: John Doe</span>
          <span className="metadata-item">Views: 1000</span>
          <span className="metadata-item">Likes: 500</span>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
