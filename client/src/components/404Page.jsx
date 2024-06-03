import React from 'react';
import '../CSS/404Page.css';
import Navbar from './Navbar';
import Footer from './Footer';

const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <div className="not-found-container">
        <div className="notfound-breadcrumb">
          Home / <span className="breadcrumb-error">404 Error</span>
        </div>
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <button className="back-home-button">Back to home page</button>
      </div>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
