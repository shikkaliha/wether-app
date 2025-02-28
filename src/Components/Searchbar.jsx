import React, { useState } from 'react';

const SearchBar = ({ setCity, fetchWeatherData }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert("Please enter a city name.");
      return;
    }
    setCity(input);
    fetchWeatherData(input);
  };

  return (
    <form className="d-flex" id="search_bar" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Enter your city to Search"
        aria-label="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-outline-danger btn_submit" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;