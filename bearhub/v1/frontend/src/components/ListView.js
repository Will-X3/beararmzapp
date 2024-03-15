import React from 'react';
import '../styles/ListView.css'; // Import the external CSS file
import VideoCard from './VideoCard';
import LegalCard from './LegalCard';
import ArticleCard from './ArticleCard';

const ListView = ({ type, items, onSelect }) => {
  const handleItemClick = (item) => {
    onSelect(item);
  };

  return (
    <div className="listViewContainer">
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
              onClick={() => handleItemClick(item)}
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
              onClick={() => handleItemClick(item)}
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
              onClick={() => handleItemClick(item)}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default ListView;
