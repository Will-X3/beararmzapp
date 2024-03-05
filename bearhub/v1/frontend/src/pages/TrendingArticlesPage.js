import React, { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';
import ToggleButton from '../components/ToggleButton';
import { ListViewContainer } from '../styles/ListViewStyles';
import axios from 'axios';
import NestedNavigation from '../components/NestedNavigation';

const TrendingArticlesPage = ({ onPageToggle }) => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState('articles'); // Manage current page state

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/v1/bearhub/articles');
        const data = response.data;
        console.log('Fetched Articles:', data);
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const filtered = articles.filter(
      (article) =>
        article.category &&
        article.category.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredArticles(filtered);
  }, [articles, searchInput]);

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  const handlePageToggle = () => {
    const targetPage = currentPage === 'videos' ? 'articles' : 'videos';
    setCurrentPage(targetPage); // Update current page state
    onPageToggle(targetPage);
  };

  return (
    <div className="trending-articles-page">
      <NestedNavigation currentPage={currentPage} onPageChange={() => {}} />
      <h1>Trending Articles</h1>
      <SearchBar onSearch={handleSearch} placeholder="Search article categories" />
      <ToggleButton currentPage={currentPage} onPageToggle={handlePageToggle} />
      <div className="article-list">
        <ListViewContainer>
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article._id}
              title={article.title}
              content={article.content}
              category={article.category}
            />
          ))}
        </ListViewContainer>
      </div>
    </div>
  );
};

export default TrendingArticlesPage;
