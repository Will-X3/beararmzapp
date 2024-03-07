import React from 'react';
import NestedNavigation from '../../components/NestedNavigation';
import { dummyVideos } from '../../data/dummyVideos';
import VideoCard from '../../components/VideoCard'; // Import VideoCard component

const TrainingVideosPage = () => {
  return (
    <div className="training-videos-page">
      <NestedNavigation currentPage="Training Videos" />
      <h1>Training Videos</h1>
      <div className="video-list">
        {dummyVideos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            description={video.description}
            url={video.url}
            category={video.category}
          />
        ))}
      </div>
    </div>
  );
};

export default TrainingVideosPage;
