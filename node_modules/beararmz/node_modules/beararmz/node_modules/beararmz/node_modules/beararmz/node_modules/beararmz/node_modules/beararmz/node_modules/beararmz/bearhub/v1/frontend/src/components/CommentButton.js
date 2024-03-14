import React, { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import "../styles/CommentButton.css";
import { AuthContext } from "../auth/AuthContext.js";

const CommentButton = () => {
  const [expanded, setExpanded] = useState(false);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { userId } = useContext(AuthContext); // Access the authenticated user's user ID from context

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
      const response = await fetch("http://localhost:5000/v1/bearhub/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: comment, userId: userId }), // Include authenticated user's user ID
      });

      // Handle response...
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
