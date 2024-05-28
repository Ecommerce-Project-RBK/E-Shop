import React, { useEffect } from "react";
import { useState } from "react";
import $ from "jquery";
import "./nav.css";

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
        <ul className="ul">
          <li className="li"><a className="a" href="#home">Home</a></li>
          <li className="li"><a className="a" href="#about">About</a></li>
          <li className="li"><a className="a" href="#services">Services</a></li>
          <li className="li"><a className="a" href="#contact">Contact</a></li>
        </ul>
        <button className="toggle-btn" onClick={toggleSideNav}>
          ☰
        </button>
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
