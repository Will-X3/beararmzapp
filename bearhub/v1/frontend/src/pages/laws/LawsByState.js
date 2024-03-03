import React, { useState } from 'react';
import LawsDropdown from '../../components/LawsDropdown';
import { laws } from '../../data/lawData';
import { states } from '../../data/stateData';
import '../../styles/LawsByState.css';
import NestedNavigation from '../../components/NestedNavigation'; 


const LawsByState = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedLaw, setSelectedLaw] = useState('');

  const handleStateChange = (selectedStateId) => {
    setSelectedState(selectedStateId);
  };

  const handleLawChange = (selectedLawId) => {
    setSelectedLaw(selectedLawId);
  };

  const renderTextBasedOnSelection = () => {
    const selectedStateObject = states.find(state => state.id === selectedState);
    const selectedLawObject = laws.find(law => law.id === selectedLaw);
  
    if (!selectedStateObject || !selectedLawObject) {
      return "Nothing available.";
    }
  
  
    let stateName = selectedStateObject.name;
    let lawName = selectedLawObject.name;
  
    if (stateName === 'California') {
      if (lawName === 'Speed Limit Law') {
        return "This is California Speed Limit Law text.";
      } else if (lawName === 'Seat Belt Law') {
        return "This is California Seat Belt Law text.";
      } else if (lawName === 'DUI Law') {
        return "This is California DUI Law text.";
      }
    } else if (stateName === 'New York') {
      if (lawName === 'Speed Limit Law') {
        return "This is New York Speed Limit Law text.";
      } else if (lawName === 'Seat Belt Law') {
        return "This is New York Seat Belt Law text.";
      } else if (lawName === 'DUI Law') {
        return "This is New York DUI Law text.";
      }
    }
  
    return "Nothing available.";
  };
  
  
  
  

  return (
    <div className="laws-by-state">
      <NestedNavigation currentPage="laws" /> {/* 2. Place the NestedNavigation component */}
      <LawsDropdown
        stateData={states}
        lawData={laws}
        onStateChange={handleStateChange}
        onLawChange={handleLawChange}
      />
      <div className="body-section">
        <h2>Law Information</h2>
        <p>{renderTextBasedOnSelection()}</p>
      </div>
    </div>
  );
};

export default LawsByState;
