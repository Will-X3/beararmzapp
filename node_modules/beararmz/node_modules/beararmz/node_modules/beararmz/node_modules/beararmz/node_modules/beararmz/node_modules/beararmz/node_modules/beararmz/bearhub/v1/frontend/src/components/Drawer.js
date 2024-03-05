// components/Drawer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Drawer.css';

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-header">
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="drawer-content">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
