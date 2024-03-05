import React, { useState, useEffect } from 'react';
import { ListViewContainer } from '../styles/ListViewStyles';
import VideoCard from './VideoCard'; // Import the VideoCard component
import LegalCard from './LegalCard'; // Import the LegalCard component
import axios from 'axios'; // Import Axios for making HTTP requests

const ListView = ({ type }) => { // Add a prop 'type' to determine whether to render videos or legal cards
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Function to fetch data from the backend based on the type
    const fetchData = async () => {
      try {
        // Make an HTTP GET request to fetch data
        const response = await axios.get(`http://localhost:5000/v1/bearhub/${type}`);
        // Extract the data from the response
        const data = response.data;
        // Set the data in the state
        setItems(data);
      } catch (error) {
        // Handle any errors that occur during the fetch
        console.error(`Error fetching ${type} data:`, error);
      }
    };

    // Call the fetchData function to fetch data when the component mounts
    fetchData();
  }, [type]); // Include 'type' in the dependency array

  return (
    <ListViewContainer>
      {items.map((item) => (
        // Render either VideoCard or LegalCard based on the type
        type === 'videos' ? (
          <VideoCard
            key={item._id}
            title={item.title}
            description={item.description}
            category={item.category}
            url={item.url}
            isSearchResult={true} // Assuming this prop is used in VideoCard component
          />
        ) : (
          <LegalCard
            key={item._id}
            title={item.title}
            description={item.description}
            category={item.category}
            imageUrl={item.imageUrl} // Assuming LegalCard requires an imageUrl prop for the image
          />
        )
      ))}
    </ListViewContainer>
  );
};

export default ListView;
