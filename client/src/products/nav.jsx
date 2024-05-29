import React, { useEffect } from "react";
import { useState } from "react";
import $ from "jquery";
import "./nav.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = () => {
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);

  useEffect(() => {
    if (isSideNavVisible) {
      $(".side").slideDown();
    } else {
      $(".side").slideUp();
    }
  }, [isSideNavVisible]);

  const toggleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  return (
    <div className="App">
      <nav className="nav">
      <button className="toggle-btn" onClick={toggleSideNav}>
      exclusive
        </button>
        <ul className="ul">
          <li className="li"><a className="a" href="#home">Home</a></li>
          <li className="li"><a className="a" href="#about">About</a></li>
          <li className="li"><a className="a" href="#services">Services</a></li>
          <li className="li"><a className="a" href="#contact">Contact</a></li>
          <div className="search-container">
          <input type="search" className="search-input" placeholder="What are you looking for" />
          <span className="search-icon"><i className="fas fa-search"></i></span>
        </div>
        </ul>
      
      </nav>
      <div className="side">
        <ul className="sideul">
          <li className="sideli">Item 1</li>
          <li className="sideli">Item 2</li>
          <li className="sideli">Item 3</li>
          <li className="sideli">Item 4</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
