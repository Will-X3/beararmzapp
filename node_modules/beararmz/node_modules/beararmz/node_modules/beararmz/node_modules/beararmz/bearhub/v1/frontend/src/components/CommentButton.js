import React, { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import "../styles/CommentButton.css";
import { AuthContext } from "../auth/AuthContext";
import axios from "axios";
import mongoose from "mongoose";

const CommentButton = ({ contentType, contentId }) => {
  const [expanded, setExpanded] = useState(false);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(AuthContext); // Access the authenticated user's data from context

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
    setError(""); // Clear any previous error when input changes
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      // Check if user data is available
      if (!user || !user._id) {
        throw new Error("User is not authenticated or user data is missing.");
      }

      // Ensure userId is in the correct format
      const userIdWithoutExtraChars = user._id.replace(/\+$/, ""); // Remove extra characters, if any
      const convertedUserId = mongoose.Types.ObjectId(userIdWithoutExtraChars); // Convert userId to ObjectId format

      let commentEndpoint = "";
      if (contentType === "article") {
        commentEndpoint = `http://localhost:5000/v1/bearhub/comment/${contentId}/article`;
      } else if (contentType === "video") {
        commentEndpoint = `http://localhost:5000/v1/bearhub/comment/${contentId}/video`;
      }

      const response = await axios.post(commentEndpoint, {
        content: comment,
        userId: convertedUserId, // Include converted userId in the request payload
      });
      // Handle response...
      console.log("Comment submitted:", response.data);
      setComment(""); // Clear the comment input after successful submission
    } catch (error) {
      console.error("Error submitting comment:", error.message);
      setError("Failed to submit comment. Please try again.");
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
          {error && <p className="comment-error">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default CommentButton;
