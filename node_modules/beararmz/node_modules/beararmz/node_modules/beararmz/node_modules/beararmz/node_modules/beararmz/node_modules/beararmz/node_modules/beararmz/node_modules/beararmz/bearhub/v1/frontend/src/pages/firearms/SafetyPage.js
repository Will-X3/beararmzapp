import React from 'react';
import NestedNavigation from '../../components/NestedNavigation';
import { Button } from '@mui/material';
import '../../styles/SafetyPage.css'; // Import CSS for styling

const SafetyPage = () => {
  return (
    <div className="safety-page">
      <NestedNavigation currentPage="Firearms Safety" />
      <div className="safety-content">
        <div className="safety-tip">
          <img src="/placeholder_image1.jpg" alt="Safety Tip 1" />
          <div className="tip-description">
            <h2>Safety Tip 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <Button variant="contained" color="primary">Learn More</Button>
          </div>
        </div>
        <div className="safety-tip">
          <img src="/placeholder_image2.jpg" alt="Safety Tip 2" />
          <div className="tip-description">
            <h2>Safety Tip 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <Button variant="contained" color="primary">Learn More</Button>
          </div>
        </div>
        {/* Add more safety tips as needed */}
      </div>
    </div>
  );
};

export default SafetyPage;
