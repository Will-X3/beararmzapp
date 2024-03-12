import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from '../../components/ArticleCard';
import VideoCard from '../../components/VideoCard';
import '../../styles/pages/self-defense/NonLethalPage.css';
import NestedNavigation from '../../components/NestedNavigation';

const NonLethalPage = () => {
    const [articles, setArticles] = useState([]);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const articlesResponse = await axios.get('http://localhost:5000/v1/bearhub/articles');
                setArticles(articlesResponse.data);

                const videosResponse = await axios.get('http://localhost:5000/v1/bearhub/videos');
                setVideos(videosResponse.data);

                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData(); // Call fetchData function when component mounts

    }, []); // Empty dependency array to run effect only once when component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <NestedNavigation />
            <div className="non-lethal-page">
                <div className="non-lethal-section">
                    <div className="example-container">
                        <img src="example-image.jpg" alt="" className="example-image" />
                        <p className="example-text">Non-lethal defense refers to a spectrum of products and techniques designed to deter, disarm, or immobilize an aggressor without causing fatal harm. These alternatives to lethal force are particularly valuable in scenarios where avoiding injury or death is crucial.</p>
                    </div>
                </div>

                <div className="article-scrollable-row">
                    <h2>Related Articles</h2>
                    <div className="scrollable-row">
                        {articles.map(article => (
                            <ArticleCard
                                key={article._id}
                                id={article._id}
                                title={article.title}
                                content={article.content}
                                category={article.category}
                                imageUrl={article.imageUrl}
                            />
                        ))}
                    </div>
                </div>

                <div className="video-scrollable-row">
                    <h2>Related Videos</h2>
                    <div className="scrollable-row">
                        {videos.map(video => (
                            <VideoCard
                                key={video._id}
                                title={video.title}
                                description={video.description}
                                category={video.category}
                                url={video.url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NonLethalPage;
