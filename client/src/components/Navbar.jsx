import React from 'react';
import '../CSS/Navbar.css';

const Navbar = () => {
  const handleRedirect = (path) => {
    window.location.href = path;
  };

  return (
    <div>
      <header className="header">
        <div className="top-banner">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="/home">Shop Now</a>
        </div>
        <nav className="main-nav">
          <div className="logo">Exclusive</div>
          <div className="nav-links">
            <a href="/home">Home</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
            <a href="/signup">Sign Up</a>
            <input type="text" placeholder="What are you looking for?" />
            <div className="icons">
              <span onClick={() => handleRedirect('/contact')}>❤️</span>
              <span onClick={() => handleRedirect('/cart')}>🛒</span>
              <span onClick={() => handleRedirect('/editProfil')}>👤</span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
