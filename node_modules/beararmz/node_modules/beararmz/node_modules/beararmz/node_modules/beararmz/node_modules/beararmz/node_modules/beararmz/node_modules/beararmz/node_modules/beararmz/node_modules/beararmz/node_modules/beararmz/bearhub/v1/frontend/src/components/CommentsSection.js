import React from 'react';
import PropTypes from 'prop-types';

const CommentsSection = ({ comments }) => {
  // Add a check for comments
  if (!comments || !Array.isArray(comments) || comments.length === 0) {
    return <p>No comments available.</p>;
  }

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      <ul>
        {/* Map through comments if comments exist */}
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.content}</p>
            <p>Author: {comment.author}</p>
            <p>Date: {comment.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
