import React from 'react';
import NestedNavigation from '../../components/NestedNavigation';
import '../../styles/AmmoPage.css'; // Import CSS for styling

const AmmoPage = () => {
  return (
    <div className="ammo-page">
      <NestedNavigation currentPage="Ammo Guide" />
      <div className="ammo-content">
        <h1 className="section-title">Ammo Guide</h1>
        <div className="section">
          <h2 className="subsection-title">Ammo Safety</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <img src="/ammo_safety.jpg" alt="Ammo Safety" className="section-image" />
        </div>
        <div className="section">
          <h2 className="subsection-title">Ammo Storage</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <img src="/ammo_storage.jpg" alt="Ammo Storage" className="section-image" />
        </div>
        <div className="section">
          <h2 className="subsection-title">Ammo Types</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <img src="/ammo_types.jpg" alt="Ammo Types" className="section-image" />
        </div>
        {/* Add more ammo sections as needed */}
      </div>
    </div>
  );
};

export default AmmoPage;
