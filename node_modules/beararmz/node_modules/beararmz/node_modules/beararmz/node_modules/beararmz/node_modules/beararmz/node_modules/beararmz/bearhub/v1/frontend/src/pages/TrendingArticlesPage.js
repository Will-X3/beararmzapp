import React, { useState, useEffect } from "react";
import NestedNavigation from "../components/NestedNavigation";
import SearchBar from "../components/SearchBar";
import { ListViewContainer } from "../styles/ListViewStyles";
import SliderView from "../components/SliderView";
import ToggleButton from "../components/ToggleButton";
import ListView from "../components/ListView";
import axios from "axios";

const TrendingArticlesPage = React.memo(({ currentPage, onPageToggle }) => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/v1/bearhub/articles"
        );
        const data = response.data;
        console.log('Fetched Articles:', data); // Log fetched articles
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    console.log('Search input changed:', searchInput); // Log search input changes
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
    console.log('Filtered articles:', filtered); // Log filtered articles
    // Check if the filtered array has changed
    if (JSON.stringify(filtered) !== JSON.stringify(filteredArticles)) {
      console.log('Updating filtered articles:', filtered); // Log when filtered articles are updated
      setFilteredArticles(filtered);
    }
  }, [searchInput, articles, filteredArticles]);

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  return (
    <div className="trending-articles-page">
      <NestedNavigation currentPage={currentPage} onPageChange={() => {}} />
      <SliderView items={filteredArticles} viewType="article" />
      <SearchBar
        onSearch={handleSearch}
        placeholder="Search article categories"
      />
      <ToggleButton currentPage="articles" onPageToggle={() => {}} />
      <div className="article-list">
        <h1>Trending Articles</h1>
        <ListViewContainer>
          {filteredArticles.length > 0 ? (
            <ListView type="articles" items={filteredArticles} />
          ) : (
            <p>No articles found.</p>
          )}
        </ListViewContainer>
      </div>
    </div>
  );
});

export default TrendingArticlesPage;
