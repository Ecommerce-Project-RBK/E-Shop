import React, { useState, useEffect } from 'react';
import '../../CSS/FlashSales.css';
import axios from 'axios';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';

const FlashSales = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});
  const [addedToFavorites, setAddedToFavorites] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/api/products/getAll')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log('Error fetching the product:', error);
      });
  }, []);

  useEffect(() => {
    // Load cart items from localStorage on component mount
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const addedToCartObj = cartItems.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {});
    setAddedToCart(addedToCartObj);

    // Load favorite items from localStorage on component mount
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    const addedToFavoritesObj = favoriteItems.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {});
    setAddedToFavorites(addedToFavoritesObj);
  }, []);

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item.id === product.id);
    if (!existingItem) {
      cartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      setAddedToCart(prevState => ({
        ...prevState,
        [product.id]: true
      }));
    } else {
      console.log(`Product with ID ${product.id} is already in the cart.`);
    }
  };

  const addToFavorites = (product) => {
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    const existingItem = favoriteItems.find(item => item.id === product.id);
    if (!existingItem) {
      favoriteItems.push(product);
      localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
      setAddedToFavorites(prevState => ({
        ...prevState,
        [product.id]: true
      }));
    } else {
      console.log(`Product with ID ${product.id} is already in favorites.`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flash-sales">
        {data.map((el) => (
          <div className="products" key={el.id}>
            <div className="product">
              <img onClick={() => { navigate('/oneproduct', { state: { id: el.id } }); }} src={el.image} alt={el.name} />
              <span className="discount">-40%</span>
              <h3>{el.name}</h3>
              <button onClick={() => addToCart(el)} disabled={addedToCart[el.id]}>
                {addedToCart[el.id] ? 'Added to Cart' : 'Add To Cart'}
              </button>
              <span className="icon-heart2" onClick={() => addToFavorites(el)}>❤️</span>
              <p><span>{el.price}</span></p>
              <p>★★★★☆ (88)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSales;
