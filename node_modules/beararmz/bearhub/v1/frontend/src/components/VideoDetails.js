import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import NestedNavigation from './NestedNavigation';
import CommentButton from "../components/CommentButton";
import CommentsSection from "../components/CommentsSection"; // Import CommentsSection component

const VideoDetails = () => {
  const { videoUrl } = useParams();
  const location = useLocation(); // Use useLocation hook to access state passed through Link

  // Access video details and comments from location state
  const { title, description, comments } = location.state.videoDetails;

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
        <h1 className="video-title">{title}</h1> {/* Display title from video details */}
        <p className="video-description">{description}</p> {/* Display description from video details */}
        <div className="video-metadata">
          <span className="metadata-item">Author: John Doe</span>
          <span className="metadata-item">Views: 1000</span>
          <span className="metadata-item">Likes: 500</span>
          <CommentButton />
        </div>
        {/* Render CommentsSection component and pass comments */}
        <CommentsSection comments={comments} />
      </div>
    </div>
  );
};

export default VideoDetails;
