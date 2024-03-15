import React, { useState } from 'react';
import NestedNavigation from '../../components/NestedNavigation';
import SearchBar from '../../components/SearchBar';
import ListView from '../../components/ListView';
import '../../styles/LegalUpdates.css'
import { dummyVideos } from '../../data/dummyVideos'; // Import mock data


const LegalUpdatesPage = () => {
    const [searchInput, setSearchInput] = useState('');
  
    const handleSearch = (input) => {
      setSearchInput(input); // Set the search input value
    };
  
    return (
      <div className="legal-updates-page">
        <NestedNavigation currentPage="legal-updates" />
        <SearchBar onSearch={handleSearch} placeholder="Search legal updates" /> {/* Use setSearchInput in SearchBar */}
        <div className="legal-updates-list">
          <h1>Legal Updates</h1>
            {dummyVideos.length > 0 ? (
              <ListView type="videos" items={dummyVideos} />
            ) : (
              <p>No legal updates found.</p>
            )}
        </div>
      </div>
    );
  };
  

export default LegalUpdatesPage;
