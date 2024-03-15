import React, { useState, useEffect } from "react";
import NestedNavigation from "../components/NestedNavigation";
import SearchBar from "../components/SearchBar";
import SliderView from "../components/SliderView";
import ToggleButton from "../components/ToggleButton";
import axios from "axios";
import ListView from "../components/ListView";

const TrendingArticlesPage = React.memo(({ currentPage, onPageToggle }) => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/v1/bearhub/articles"
        );
        const data = response.data;
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    const filtered = articles.filter(
      (article) =>
        (article.title &&
          article.title.toLowerCase().includes(searchInput.toLowerCase())) ||
        (article.description &&
          article.description
            .toLowerCase()
            .includes(searchInput.toLowerCase())) ||
        (article.category &&
          article.category.toLowerCase().includes(searchInput.toLowerCase()))
    );

    if (JSON.stringify(filtered) !== JSON.stringify(filteredArticles)) {
      setFilteredArticles(filtered);
    }
  }, [searchInput, articles, filteredArticles]);

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  const handleArticleSelect = (article) => {
    console.log("Selected Article:", article); // Log selected article
    setSelectedArticle(article); 
  };

  return (
    <div className="trending-articles-page">
      <NestedNavigation currentPage={currentPage} onPageChange={() => {}} />
      <SliderView items={articles} viewType="article" />
      <SearchBar
        onSearch={handleSearch}
        placeholder="Search article categories"
      />
      <ToggleButton currentPage="articles" onPageToggle={() => {}} />
      <div className="article-list">
        <h1>Trending Articles</h1>
          {filteredArticles.length > 0 ? (
            <ListView
              type="articles"
              items={filteredArticles}
              onSelect={handleArticleSelect}
            />
          ) : (
            <p>No articles found.</p>
          )}
      </div>
      {/* Pass the selected article to the ArticleDetails component */}
    </div>
  );
});

export default TrendingArticlesPage;
