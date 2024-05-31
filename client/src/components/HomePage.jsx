import React from 'react';
import FlashSales from './Home components/FlashSales.jsx';
import Categories from './Home components/Categories.jsx';
import '../CSS/HomePage.css';
import TopProducts from './Home components/TopProducts.jsx';


const HomePage = () => {
  return (
    <div className="home-page">
  
      <FlashSales />
      <Categories />
      <TopProducts />
    </div>
  );
};

export default HomePage;
