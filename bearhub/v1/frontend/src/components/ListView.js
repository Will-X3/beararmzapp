import React, { useState, useEffect } from 'react';
import { ListViewContainer } from '../styles/ListViewStyles';
import VideoCard from './VideoCard'; // Import the VideoCard component
import axios from 'axios'; // Import Axios for making HTTP requests

const ListView = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Function to fetch video data from the backend
    const fetchVideos = async () => {
      try {
        // Make an HTTP GET request to fetch video data
        const response = await axios.get('http://localhost:5000/v1/bearhub/videos');
        // Extract the video data from the response
        const videoData = response.data;
        // Set the video data in the state
        setVideos(videoData);
      } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching video data:', error);
      }
    };

    // Call the fetchVideos function to fetch video data when the component mounts
    fetchVideos();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <ListViewContainer>
      {videos.map((video) => (
        <VideoCard
          key={video._id}
          title={video.title}
          description={video.description}
          category={video.category}
          url={video.url}
          isSearchResult={true} // Assuming this prop is used in VideoCard component
        />
      ))}
    </ListViewContainer>
  );
};

export default ListView;
