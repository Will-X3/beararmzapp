import React from 'react';
import NestedNavigation from '../../components/NestedNavigation';
import { Button } from '@mui/material';
import '../../styles/MaintenancePage.css'; // Import CSS for styling

const MaintenancePage = () => {
  return (
    <div className="maintenance-page">
      <NestedNavigation currentPage="Firearms Maintenance" />
      <div className="maintenance-content">
        <div className="maintenance-tip">
          <div className="tip-description">
            <h2>Maintenance Tip 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <Button variant="contained" color="primary">Learn More</Button>
          </div>
          <img src="/maintenance_image1.jpg" alt="Maintenance Tip 1" />
        </div>
        <div className="maintenance-tip">
          <div className="tip-description">
            <h2>Maintenance Tip 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <Button variant="contained" color="primary">Learn More</Button>
          </div>
          <img src="/maintenance_image2.jpg" alt="Maintenance Tip 2" />
        </div>
        {/* Add more maintenance tips as needed */}
      </div>
    </div>
  );
};

export default MaintenancePage;
