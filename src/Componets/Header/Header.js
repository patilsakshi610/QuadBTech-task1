import React from "react";
import "./Header.css";
import search from "../../Assets/search.svg";
const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-nav">
        <p className="nav-links">Home</p>
        <p className="nav-links">Contact</p>
        <p className="nav-links">About</p>
      </div>
      <div className="search">
        <input
          className="nav-search-input"
          type="text"
          placeholder="Type hear to search..."
        />
        <div className="search-icon">
          <img src={search} />
        </div>
      </div>
    </div>
  );
};

export default Header;
