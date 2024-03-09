// EmergencyPreparedness.js

import React from "react";
import "../../styles/pages/emergency/PreparednessPage.css";
import NestedNavigation from "../../components/NestedNavigation";

const EmergencyPreparedness = () => {
  const emergencyTips = [
    "Create an emergency kit with essentials like water, non-perishable food, flashlight, batteries, and first aid supplies.",
    "Establish a family emergency plan including meeting points and communication methods.",
    "Stay informed about potential emergencies in your area by signing up for alerts and notifications.",
    "Learn basic first aid and CPR techniques to assist others during emergencies.",
    "Practice emergency drills regularly with your family or household members.",
    "Keep important documents and contact information in a secure and easily accessible location.",
    "Ensure your home is equipped with smoke detectors and carbon monoxide detectors, and test them regularly.",
    "Know how to safely shut off utilities like gas, electricity, and water in case of emergencies.",
    "Stay connected with neighbors and community resources to offer and receive assistance during emergencies.",
    "Consider special needs of family members, pets, and individuals with disabilities in your emergency planning.",
    "Prepare for potential evacuation by having an evacuation plan and supplies ready to go.",
    "Stay vigilant and report suspicious activities or hazards to local authorities.",
  ];

  return (
    <div className="laws-by-state">
      <NestedNavigation currentPage="preparedness" /> {/* Place the NestedNavigation component */}
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

export default EmergencyPreparedness;
