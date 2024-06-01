import React, { useState } from "react";

import axios from "axios";
import "../CSS/Login.css";
import { Link,useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'; 

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [tokn,settokn]=useState("")
  

 const navigate=useNavigate()
 //PS: aziz and ahmed changed the handleLogin to extract the token in editprofil to use it contents to display username and login using the role 
 const handleLogin = async () => {
  try {
    const payload = { email: emailOrPhone, password };
    const endpoint = "http://localhost:8080/api/auth/login";

    const response = await axios.post(endpoint, payload);
    const token = response.data.token; // Assuming your token is in response.data.token
    localStorage.setItem("token", token); // Store the token in local storage
    console.log("Login successful", response.data);
    navigate("/editProfil"); // Redirect to editProfile after successful login
  } catch (error) {
    console.error("Login error", error);
  }
};

  // const handleLogin = async () => {
  //   try {
  //     const payload = { email: emailOrPhone, password };
  //     const endpoint = "http://localhost:8080/api/auth/login";

  //     const response = await axios.post(endpoint, payload);
  //     console.log("Login successful", response.data);

  // const parsedToken = jwtDecode(response.data.token);
  //     localStorage.setItem("user", JSON.stringify(parsedToken)); 
  //     const user = JSON.parse(localStorage.getItem("user"));
       
  //    console.log("User hatha:", user);
  //   } catch (error) {
  //     console.error("Login error", error);
  //   }
  // };

  return (
    <div className="login-page">
      <header className="header">
        <div className="top-banner">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="#">Shop Now</a>
        </div>
        <nav className="main-nav">
          <div className="logo">Exclusive</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
            <Link to="/signup">Sign Up</Link>
          </div>
          <div className="search-container">
            <input type="text" placeholder="What are you looking for?" />
          </div>
        </nav>
      </header>
      <div className="login-container">
        <div className="image-section">
          <img src="../src/images/login.png" alt="Login" />
        </div>
        <div className="form-section">
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={()=>{handleLogin(),navigate("/editProfil")}}>Log In</button>
          <p>
            <a href="#">Forgot Password?</a>
          </p>
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

export default Login;