import React from 'react';
import FlashSales from './Home components/FlashSales.jsx';
import Categories from './Home components/Categories.jsx';
import '../CSS/HomePage.css';
import TopProducts from './Home components/TopProducts.jsx';
import Features from './Home components/Features.jsx';
import FeaturedProducts from './Home components/FeaturedProducts .jsx';
import Footer from './Footer.jsx';


const HomePage = () => {
  return (
    <div className="home-page">
  
      <FlashSales />
      <Categories />
      <TopProducts />
      <FeaturedProducts  />
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
