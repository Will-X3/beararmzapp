// Emergency/ResponsePage.js

import React from 'react';
import '../../styles/pages/emergency/ResponsePage.css'; // Import regular CSS file with .css extension
import NestedNavigation from "../../components/NestedNavigation";


const EmergencyResponse = () => {
  const emergencyTips = [
    "Remain calm and assess the situation before taking action.",
    "Call emergency services (911) or the appropriate local authorities.",
    "Provide clear and accurate information about the emergency and your location.",
    "Follow instructions from emergency responders and authorities.",
    "Check on family members, neighbors, and others who may need assistance.",
    "Stay informed about the situation through official channels and updates.",
    "Evacuate if directed to do so by authorities, and follow evacuation routes and procedures.",
    "If unable to evacuate, seek shelter in a safe location and await further instructions.",
    "Assist others in need if it can be done safely.",
    "Listen to emergency broadcasts and updates for information and instructions.",
    "Do not spread rumors or false information about the emergency.",
    "Stay away from downed power lines, floodwaters, and other hazards.",
  ];

  return (
    <div className="laws-by-state">
      <NestedNavigation currentPage="response" /> {/* Place the NestedNavigation component */}
      <div className="viewport">
        {emergencyTips.map((tip, index) => (
          <div className="flip-card" key={index}>
            <div className="card-front">
              <span>Tip {index + 1}</span>
            </div>
            <div className="card-back">
              <span>{tip}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default EmergencyResponse;
