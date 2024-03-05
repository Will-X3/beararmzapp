// utils/getYouTubeThumbnailUrl.js

export const getYouTubeThumbnailUrl = (videoUrl) => {
    const videoId = extractVideoId(videoUrl);
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  };
  
  const extractVideoId = (videoUrl) => {
    // Updated regex without unnecessary escape character
    const regex = /^(?:(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11}))/;
    const match = videoUrl.match(regex);
  
    if (match && match[1]) {
      return match[1];
    }
  
    // Return null if no match found
    return null;
  };
  