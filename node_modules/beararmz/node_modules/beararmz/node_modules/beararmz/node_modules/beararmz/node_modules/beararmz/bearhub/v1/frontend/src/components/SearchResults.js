import React from 'react';
import VideoCard from '../styles/VideoCard';
import ArticleCard from '../styles/ArticleCard';

const SearchResults = ({ searchResults }) => {
  console.log('Search results:', searchResults); // Log the search results

  if (searchResults.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div className="search-results">
      {searchResults.map((result) => {
        if (result.type === 'video') {
          return (
            <VideoCard
              key={result._id}
              title={result.title}
              description={result.description}
              category={result.category}
              url={result.url}
              isSearchResult={true}
            />
          );
        } else if (result.type === 'article') {
          return (
            <ArticleCard
              key={result._id}
              title={result.title}
              description={result.description}
              category={result.category}
              url={result.url}
              isSearchResult={true}
            />
          );
        } else {
          return null; // Ignore other types of results
        }
      })}
    </div>
  );
};

export default SearchResults;
