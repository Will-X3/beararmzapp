import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import "../styles/CommentButton.css";
import { useDispatch, useSelector } from "react-redux";
import { submitComment } from "../slices/commentSlice"; // Import the submitComment action from your comment slice

const CommentButton = ({ contentType, contentId }) => {
  const [expanded, setExpanded] = useState(false);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch(); // Get the dispatch function

  // Access user data from Redux store
  const user = useSelector((state) => state.auth.user);

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitting comment:", comment);
      console.log("User:", user);
      setIsLoading(true);
  
      // Check if user is authenticated
      if (!user) {
        throw new Error("User is not authenticated."); // Throw error if user is not authenticated
      }
  
      // Assuming the first user object in the array is the logged-in user
      const loggedInUser = user[0]; // Accessing the first user object in the array
  
      // Dispatch the submitComment action with comment data and user ID
      dispatch(submitComment({ contentType, contentId, comment, userId: loggedInUser._id }));
  
      // Clear the comment input after submission
      setComment("");
    } catch (error) {
      console.error("Error submitting comment:", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="comment-container">
      <IconButton
        className="comment-button"
        onClick={handleButtonClick}
        disabled={isLoading}
      >
        <CommentIcon />
      </IconButton>
      {expanded && (
        <div className="comment-input-container">
          <textarea
            className="comment-input"
            placeholder="Write your comment..."
            value={comment}
            onChange={handleInputChange}
          />
          <button
            className="comment-submit-button"
            onClick={handleSubmit}
            disabled={isLoading || !comment.trim()}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentButton;
