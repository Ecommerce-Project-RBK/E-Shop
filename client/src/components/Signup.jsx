import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import "../CSS/Signup.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const payload = { name, email: emailOrPhone, password };
      let endpoint;

      if (role === "buyer") {
        endpoint = "http://localhost:8080/api/auth/register/buyer";
      } else {
        endpoint = "http://localhost:8080/api/auth/register/seller";
      }

      const response = await axios.post(endpoint, payload);
      console.log("Signup successful", response.data);
      navigate("/editProfil")
    } catch (error) {
      console.error("Signup error", error);
    }
  };

  return (
    <div className="signup-page">
      <header className="header">
        <div className="top-banner">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="#">Shop Now</a>
        </div>
        <nav className="main-nav">
          <div className="logo">Exclusive</div>
          <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
          </div>
          <div className="search-container">
            <input type="text" placeholder="What are you looking for?" />
          </div>
        </nav>
      </header>
      <div className="signup-container">
        <div className="image-section">
          <img src="../src/images/login.png" alt="signup" />
        </div>
        <div className="form-section">
          <h2>Create an account</h2>
          <p>Enter your details below</p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="form-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-input"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <button onClick={()=>{handleSignUp()}} className="signup-button">
            Sign Up
          </button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-section">
          <h3>Exclusive</h3>
          <p>Subscribe to get 10% off your first order</p>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <p>111 , Ariana, TN 24, Tunisie.</p>
          <p>exclusive@gmail.com</p>
          <p>+99-999-999</p>
        </div>
        <div className="footer-section">
          <h3>Account</h3>
          <p>
            <a href="#">My Account</a>
          </p>
          <p>
            <a href="#">Login / Register</a>
          </p>
          <p>
            <a href="#">Cart</a>
          </p>
          <p>
            <a href="#">Wishlist</a>
          </p>
          <p>
            <a href="#">Shop</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Link</h3>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
          <p>
            <a href="#">Terms Of Use</a>
          </p>
          <p>
            <a href="#">FAQ</a>
          </p>
          <p>
            <a href="#">Contact</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="app-links">
            <a href="#">
              <img src="../src/images/googlePlay.png" alt="Google Play" />
            </a>
            <a href="#">
              <img src="../src/images/appStore.png" alt="App Store" />
            </a>
          </div>
        </div>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
        <div className="copyright">
          &copy; Copyright Rimel 2022. All right reserved
        </div>
      </footer>
    </div>
  );
};

export default SignUp;