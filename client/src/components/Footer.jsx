import React from 'react'
import '../CSS/Footer.css'
const Footer = () => {
  return (
    <div>
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
                    <p><a href="#">My Account</a></p>
                    <p><a href="#">Login / Register</a></p>
                    <p><a href="#">Cart</a></p>
                    <p><a href="#">Wishlist</a></p>
                    <p><a href="#">Shop</a></p>
                </div>
                <div className="footer-section">
                    <h3>Quick Link</h3>
                    <p><a href="#">Privacy Policy</a></p>
                    <p><a href="#">Terms Of Use</a></p>
                    <p><a href="#">FAQ</a></p>
                    <p><a href="#">Contact</a></p>
                </div>
                <div className="footer-section">
                    <h3>Download App</h3>
                    <p>Save $3 with App New User Only</p>
                    <div className="app-links">
                        <a href="#"><img src="google-play.png" alt="Google Play" /></a>
                        <a href="#"><img src="app-store.png" alt="App Store" /></a>
                    </div>
                </div>
                <div className="social-media">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">LinkedIn</a>
                </div>
                <div className="copyright">
                    &copy; Copyright AzizCorp 2024. All right reserved
                </div>
            </footer>
    </div>
  )
}

export default Footer