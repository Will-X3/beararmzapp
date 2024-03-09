// ListView.js

import React from 'react';
import '../styles/ListView.css'; // Import the CSS file
import VideoCard from './VideoCard';
import LegalCard from './LegalCard';
import ArticleCard from './ArticleCard';

const ListView = ({ type, items, onSelect }) => { // Added onSelect prop
  const handleItemClick = (item) => { // Added function to handle item clicks
    onSelect(item); // Invoke the onSelect callback with the clicked item
  };

  return (
    <div className="listViewContainer"> {/* Update className */}
      {items.map((item) => {
        if (type === 'videos') {
          return (
            <VideoCard
              key={item._id}
              title={item.title}
              description={item.description}
              category={item.category}
              url={item.url}
              isSearchResult={true}
              onClick={() => handleItemClick(item)} // Handle click for video card
            />
          );
        } else if (type === 'legal') {
          return (
            <LegalCard
              key={item._id}
              title={item.title}
              description={item.description}
              category={item.category}
              imageUrl={item.imageUrl}
              onClick={() => handleItemClick(item)} // Handle click for legal card
            />
          );
        } else if (type === 'articles') {
          return (
            <ArticleCard
              key={item._id}
              id={item._id}
              title={item.title}
              content={item.content}
              category={item.category}
              isSearchResult={true}
              onClick={() => handleItemClick(item)} // Handle click for article card
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default ListView;
