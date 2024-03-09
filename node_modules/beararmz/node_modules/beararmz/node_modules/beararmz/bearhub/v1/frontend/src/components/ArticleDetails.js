// ArticleDetails.js

import React from "react";
import Paper from "@mui/material/Paper";
import "../styles/ArticleDetails.css";
import NestedNavigation from "./NestedNavigation";
import { useParams } from "react-router-dom";

const ArticleDetails = ({ article }) => {
  const { articleId } = useParams();

  console.log("Article ID from URL:", articleId);
  console.log("Article:", article); // Log the selected article

  // Check if article is defined
  if (!article) {
    return (
      <div className="article-details-wrapper">
        <NestedNavigation />
        <Paper elevation={3} className="article-details-paper">
          <div className="article-details-container">
            <h1>Article Details for ID: {articleId}</h1>
            <p>No articles found</p>
          </div>
        </Paper>
      </div>
    );
  }

  // Render the ArticleDetails component
  return (
    <div className="article-details-wrapper">
      <NestedNavigation />
      <Paper elevation={3} className="article-details-paper">
        <div className="article-details-container">
          <h1>Article Details for ID: {articleId}</h1>
          <h2>Title: {article.title}</h2>
          <p>Content: {article.content}</p>
          <p>Category: {article.category}</p>
        </div>
      </Paper>
    </div>
  );
};

export default ArticleDetails;
