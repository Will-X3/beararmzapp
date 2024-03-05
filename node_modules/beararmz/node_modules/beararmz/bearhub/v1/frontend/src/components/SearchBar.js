import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchInput}
        onChange={handleSearchChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired, 
};

export default SearchBar;
