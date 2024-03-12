import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import '../styles/CommentButton.css'; // Import the CSS file

const CommentComponent = () => {
    const [expanded, setExpanded] = useState(false);
    const [comment, setComment] = useState('');

    const handleButtonClick = () => {
        setExpanded(!expanded);
    };

    const handleInputChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/v1/bearhub/comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: comment }), // assuming your API expects the comment content in a 'content' field
            });

            if (!response.ok) {
                throw new Error('Failed to submit comment');
            }

            // Optionally handle success, e.g., show a success message or update UI
            console.log('Comment submitted successfully');
            // Clear the input field
            setComment('');
            // Collapse the input field
            setExpanded(false);
        } catch (error) {
            console.error('Error submitting comment:', error);
            // Optionally handle error, e.g., show an error message or update UI
        }
    };

    return (
        <div className="comment-container">
            <IconButton className="comment-button" onClick={handleButtonClick}>
                <CommentIcon />
            </IconButton>
            {expanded && (
                <div>
                    <textarea
                        className="comment-input"
                        placeholder="Write your comment..."
                        value={comment}
                        onChange={handleInputChange}
                    />
                    <button className="comment-submit-button" onClick={handleSubmit}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default CommentComponent;
