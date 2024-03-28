import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Navbar.css';
import Drawer from './Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { logout } from '../slices/authSlice'; // Import the logout action from the authSlice

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch(); // Get the dispatch function

  // Access user data from Redux store
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log("User:", user);
  }, [user]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem('token');
    dispatch(logout()); // Dispatch the logout action
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
