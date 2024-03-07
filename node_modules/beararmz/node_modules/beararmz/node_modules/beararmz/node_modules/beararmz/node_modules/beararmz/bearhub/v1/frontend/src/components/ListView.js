import React from 'react';
import { ListViewContainer } from '../styles/ListViewStyles';
import VideoCard from './VideoCard';
import LegalCard from './LegalCard';
import ArticleCard from './ArticleCard'; // Import the ArticleCard component

const ListView = ({ type, items }) => {
  return (
    <ListViewContainer>
      {items.map((item) => {
        // Render either VideoCard, LegalCard, or ArticleCard based on the type
        if (type === 'videos') {
          return (
            <VideoCard
              key={item._id}
              title={item.title}
              description={item.description}
              category={item.category}
              url={item.url}
              isSearchResult={true} // Assuming this prop is used in VideoCard component
            />
          );
        } else if (type === 'legal') {
          return (
            <LegalCard
              key={item._id}
              title={item.title}
              description={item.description}
              category={item.category}
              imageUrl={item.imageUrl} // Assuming LegalCard requires an imageUrl prop for the image
            />
          );
        } else if (type === 'articles') {
          return (
            <ArticleCard
              key={item._id}
              title={item.title}
              content={item.content}
              category={item.category}
              isSearchResult={true} // Add isSearchResult prop for consistency
            />
          );
        }
        
        // Add a default return statement if none of the conditions are met
        return null;
      })}
    </ListViewContainer>
  );
};

export default ListView;
