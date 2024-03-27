import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Navbar.css';
import Drawer from './Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../auth/AuthContext'; // Import the useAuth hook

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();
  const { user, logout } = useAuth(); // Use the useAuth hook to access authentication state and logout function

  useEffect(() => {
    console.log("User:", user);
  }, [user]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem('token');
    logout(); // Use the logout function from the useAuth hook
    console.log("Logged out successfully.");
    history.push('/auth');
  };

  console.log("Rendering Navbar. User:", user);

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
        {user ? (
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
