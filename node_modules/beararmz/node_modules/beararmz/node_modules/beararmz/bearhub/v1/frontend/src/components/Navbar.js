import React, { useState } from 'react';
import '../styles/Navbar.css'; // Import the navbar CSS file
import Drawer from './Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav className="nav"> {/* Use className instead of styled components */}
      <h1 className="logo">BearHub Logo</h1>
      <div className="drawer-icon" onClick={toggleDrawer}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Drawer isOpen={drawerOpen} onClose={toggleDrawer} />
    </nav>
  );
};

export default Navbar;
