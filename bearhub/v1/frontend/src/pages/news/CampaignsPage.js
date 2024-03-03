import React from "react";
import "../../styles/CampaignsPage.css";
import NestedNavigation from "../../components/NestedNavigation";

const CampaignsPage = ({ currentPage }) => { // Receive currentPage prop
  return (
    <>
      <NestedNavigation currentPage={currentPage} /> {/* Pass currentPage prop */}
      <div className="campaigns container">
        <h1 className="mt-5 mb-4">Campaigns & Community Groups</h1>

        <div className="campaigns-section">
          <h2>Campaigns</h2>
          <div className="campaign1">
            <h3>Campaign Title 1</h3>
            <p>Description of Campaign 1 goes here...</p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
          <div className="campaign2">
            <h3>Campaign Title 2</h3>
            <p>Description of Campaign 2 goes here...</p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>

        <div className="community-groups-section">
          <h2>Community Groups</h2>
          <div className="community-group">
            <h3>BeararmZ Bella's</h3>
            <p>Description of BeararmZ Bella's goes here...</p>
            <a href="#" className="btn btn-primary">
              Join Group
            </a>
          </div>
          <div className="community-group">
            <h3>Community Group 2</h3>
            <p>Description of Community Group 2 goes here...</p>
            <a href="#" className="btn btn-primary">
              Join Group
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignsPage;
