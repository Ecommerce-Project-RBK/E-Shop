import React from 'react'
import '../CSS/Navbar.css'
const Navbar = () => {
  return (
    <div>
         <header className="header">
                <div className="top-banner">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#">Shop Now</a>
                </div>
                <nav className="main-nav">
                    <div className="logo">Exclusive</div>
                    <div className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">Contact</a>
                        <a href="#">About</a>
                        <a href="#">Sign Up</a>
                        <input type="text" placeholder="What are you looking for?" />
                        <div className="icons">
                            <span>❤️</span>
                            <span>🛒</span>
                            <span>👤</span>
                        </div>
                    </div>
                </nav>
            </header>
    </div>
  )
}

export default Navbar