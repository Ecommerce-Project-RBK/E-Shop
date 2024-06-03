import React, { useEffect, useState } from 'react';
import '../CSS/Navbar.css';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const Navbar = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setRole(decodedToken.role); 
    }
  }, []);

  const handleRedirect = (path) => {
    navigate(path);
  };

  const logout = () => {
    localStorage.removeItem('cartItems');
    localStorage.removeItem('token');
    navigate('/login');
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
            {role === 'buyer' &&  <span onClick={() => handleRedirect('/favorites')}>❤️</span>}
              { role === 'buyer' &&  <span onClick={() => handleRedirect('/cart')}>🛒</span> }
              { role === 'buyer' && <span onClick={() => handleRedirect('/buyerProfile')}>👤</span> }
              {role === 'seller' && <span onClick={() => handleRedirect('/sellerProfile')}>👤</span>}
              <span onClick={logout}>
                <img src="../src/images/log-out.png" alt="Login Icon" className="icon-image" />
              </span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
