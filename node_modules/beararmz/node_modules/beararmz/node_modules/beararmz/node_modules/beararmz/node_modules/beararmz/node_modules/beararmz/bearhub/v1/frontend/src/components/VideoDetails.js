import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import NestedNavigation from "./NestedNavigation";
import CommentButton from "../components/CommentButton";
import CommentsSection from "../components/CommentsSection";
import axios from "axios";
import "../styles/VideoDetails.css"; // Import the CSS file

const VideoDetails = () => {
  const { videoUrl } = useParams();
  console.log("Video URL:", videoUrl);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Fetch all comments
        const response = await axios.get('http://localhost:5000/v1/bearhub/comment');
        const allComments = response.data;
  
        // Filter comments based on videoId
        const filteredComments = allComments.filter(comment => comment.videoId === videoUrl);
        console.log('Filtered comments:', filteredComments);
  
        setComments(filteredComments);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchComments();
  }, [videoUrl]);
  

  return (
    <div className="video-details-container" >
      <NestedNavigation />
      <div className="video-player-wrapper">
        <ReactPlayer
          url={decodeURIComponent(videoUrl)}
          width="100%"
          height="600px"
          controls
          playing
        />
      </div>
      <div className="video-info">
        {/* Render CommentsSection component and pass comments */}
        <CommentsSection comments={comments} />
        <CommentButton />
      </div>
    </div>
  );
};

export default VideoDetails;
