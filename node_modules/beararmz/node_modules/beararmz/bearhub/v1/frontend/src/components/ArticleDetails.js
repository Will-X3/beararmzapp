import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NestedNavigation from "./NestedNavigation";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentIcon from "@mui/icons-material/Comment";

const ArticleDetails = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/v1/bearhub/articles/${articleId}`);
        setArticle(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
        <>
          <NestedNavigation />
          <div className="article-details-wrapper">
            <Paper elevation={3} className="article-details-paper">
              <div className="article-details-container">
                <h1>Article Details for ID: {articleId}</h1>
                {article ? (
                  <>
                  <div>
                    <h2>Title: {article.title}</h2>
                    <p>Content: {article.content}</p>
                    <p>Category: {article.category}</p>
                    {article.imageUrl && ( // Conditionally render the image if imageUrl exists
                      <img src={article.imageUrl} alt={article.title} />
                    )}
                    </div>
                  </>
                ) : (
                  <p>No article found.</p>
                )}
                <div className="article-icons">
                  <IconButton aria-label="Like">
                    <ThumbUpIcon />
                  </IconButton>
                  <IconButton aria-label="Dislike">
                    <ThumbDownIcon />
                  </IconButton>
                  <IconButton aria-label="Comment">
                    <CommentIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>
        </>
      );
      
};

export default ArticleDetails;
