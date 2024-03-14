import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Navbar.css';
import Drawer from './Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // Perform any side effects or updates based on the value of isLoggedIn here
    // For example, you can trigger some action when the authentication status changes
  }, [isLoggedIn]);
  

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogout(); // Notify parent component of logout
    history.push('/auth');
  };

  return (
    <nav className="nav">
      <div className="logo-container">
        <h1 className="logo">BearHub Logo</h1>
      </div>
      <div className="drawer-icon" onClick={toggleDrawer}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Drawer isOpen={drawerOpen} onClose={toggleDrawer} />
      <ul className="nav-links">
        {isLoggedIn ? (
          <li>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/auth">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
