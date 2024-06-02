import React, { useEffect, useState } from 'react';
import '../CSS/Favorites.css'; // Import your CSS file
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Favorites = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching favorite items from localStorage or API
    const items = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    setFavoriteItems(items);
  }, []);

  const removeFromFavorites = (index) => {
    const updatedFavorites = [...favoriteItems.slice(0, index), ...favoriteItems.slice(index + 1)];
    setFavoriteItems(updatedFavorites);
    localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
 
      <div className="favorites-container">
        <table className="favorites-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {favoriteItems.map((item, index) => (
              <tr key={index}>
                <td className="product-details">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <span className="product-name"><b>{item.name}</b></span>
                </td>
                <td><b>{item.price} $</b></td>
                <td>
                  <button onClick={() => removeFromFavorites(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="favorites-actions">
          <button className="return-shop" onClick={() => navigate("/home")}>Return to Shop</button>
        </div>
      </div>
   
    </div>
  );
};

export default Favorites;
