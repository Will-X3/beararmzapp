import React, { useState, useEffect } from "react";
import NestedNavigation from "../components/NestedNavigation";
import SearchBar from "../components/SearchBar";
import { ListViewContainer } from "../styles/ListViewStyles";
import SliderView from "../components/SliderView";
import ToggleButton from "../components/ToggleButton";
import ListView from "../components/ListView";
import axios from "axios";

// Function to compare two arrays for equality
const arraysAreEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const TrendingVideosPage = React.memo(({ currentPage, onPageToggle }) => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/v1/bearhub/videos"
        );
        const data = response.data;
        console.log("Fetched videos:", data);
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    console.log("Search input changed:", searchInput);
    const filtered = videos.filter(
      (video) =>
        (video.title &&
          video.title.toLowerCase().includes(searchInput.toLowerCase())) ||
        (video.description &&
          video.description
            .toLowerCase()
            .includes(searchInput.toLowerCase())) ||
        (video.category &&
          video.category.toLowerCase().includes(searchInput.toLowerCase()))
    );

    // Check if the filtered array has changed
    if (!arraysAreEqual(filtered, filteredVideos)) {
      console.log("Updating filtered videos:", filtered); // Log updating filtered videos
      setFilteredVideos(filtered);
    }
  }, [searchInput, videos, filteredVideos]);

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  return (
    <div className="trending-videos-page">
      <NestedNavigation currentPage={currentPage} onPageChange={() => {}} />
      <SliderView items={videos} viewType="video" />
      <SearchBar
        onSearch={handleSearch}
        placeholder="Search video categories"
      />
      <ToggleButton currentPage="videos" onPageToggle={() => {}} />
      <div className="video-list">
        <h1>Trending Videos</h1>
        <ListViewContainer>
          {filteredVideos.length > 0 ? (
            <ListView type="videos" items={filteredVideos} />
          ) : (
            <p>No videos found.</p>
          )}
        </ListViewContainer>
      </div>
    </div>
  );
});

export default TrendingVideosPage;
