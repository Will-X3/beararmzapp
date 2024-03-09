import React from 'react';
import NestedNavigation from '../../components/NestedNavigation';
import { dummyVideos } from '../../data/dummyVideos';
import VideoCard from '../../components/VideoCard';
import '../../styles/pages/self-defense/SelfDefenseVideos.css';

const SelfDefenseVideos = () => {
  return (
    <div className="self-defense-videos">
      <NestedNavigation currentPage="Training Videos" />
      <h1>Self Defense Videos</h1>
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

export default SelfDefenseVideos;
