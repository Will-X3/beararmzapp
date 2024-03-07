import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchBar.css'; // Import the CSS file

const SearchBar = ({ onSearch, placeholder }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Call the onSearch prop with the current search input
    onSearch(searchInput);
  };

  return (
    <form className="search-container" onSubmit={handleSearchSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder={placeholder}
        value={searchInput}
        onChange={handleSearchChange}
      />
      <button className="search-button" type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired, 
};

export default SearchBar;
