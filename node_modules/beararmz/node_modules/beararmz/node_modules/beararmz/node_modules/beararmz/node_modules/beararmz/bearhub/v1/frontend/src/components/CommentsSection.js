import React from 'react';
import PropTypes from 'prop-types';

const CommentsSection = ({ comments }) => {
  // Check if comments exist and are non-empty
  if (!comments || !comments.length) {
    return <p>No comments available.</p>;
  }

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      <ul>
        {/* Map through comments */}
        {comments.map((comment, index) => (
          <li key={index}>
            {/* Render comment content, author, and date */}
            <p>{comment.content}</p>
            <p>Author: {comment.author}</p>
            <p>Date: {comment.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Prop types validation
CommentsSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired
    })
  )
};

export default CommentsSection;
