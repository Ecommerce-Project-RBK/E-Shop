
import React from 'react';
import '../../CSS/Features.css'; // Make sure this file is in the same directory

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-box">
        <div className="feature-icon">
          <img src="../src/images/homelogo1.png" alt="Free and Fast Delivery" />
        </div>
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="feature-box">
        <div className="feature-icon">
          <img src="../src/images/homelogo2.png" alt="24/7 Customer Service" />
        </div>
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="feature-box">
        <div className="feature-icon">
          <img src="../src/images/homelogo3.png" alt="Money Back Guarantee" />
        </div>
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Features;
