import React from 'react';
import '../../CSS/Categories.css';

const Categories = () => {
  return (
    <div className="categories">
      <div className="category-heading">
        <img src="https://www.clker.com/cliparts/3/R/3/7/W/R/orange-vertical-rectangle-md.png" alt="IPS LCD Gaming Monitor" />
        <h2>Categories</h2>
      </div>
      <h1 className='title-category'>Browse By Category</h1>
      <div className="category-list">
        <div className="category">Phones</div>
        <div className="category">Computers</div>
        <div className="category">SmartWatch</div>
        <div className="category active">Camera</div>
        <div className="category">HeadPhones</div>
        <div className="category">Gaming</div>
      </div>
    </div>
  );
};

export default Categories;
