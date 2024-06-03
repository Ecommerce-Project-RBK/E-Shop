import React, { useState, useEffect } from 'react';
import '../../CSS/FlashSales.css';
import axios from 'axios';
import StarRating from '../rating';
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

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const addedToCartObj = cartItems.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {});
    setAddedToCart(addedToCartObj);

  
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    const addedToFavoritesObj = favoriteItems.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {});
    setAddedToFavorites(addedToFavoritesObj);
  }, []);

  const getRandomDiscount = () => {
    const randomPercentage = Math.floor(Math.random() * 11) + 10; 
    if (randomPercentage <= 20) {
      return `-${randomPercentage}%`;
    } else {
      const randomPercentage2 = Math.floor(Math.random() * 11) + 30;
      return `-${randomPercentage2}%`;
    }
  };

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
         <h1 className='top-prod'>Top Products</h1> 
           <div className="top-label2" style={{ display: 'flex', alignItems: 'center' }}>
  <img src="https://www.clker.com/cliparts/3/R/3/7/W/R/orange-vertical-rectangle-md.png" alt="IPS LCD Gaming Monitor" style={{ width: '20px', height: 'auto', marginRight: '10px' }} />
  <h2 className='top-subtitle'>This Month</h2>
</div>
      <div className="flash-sales">
        {data.map((el) => (
          <div className="products" key={el.id}>
            <div className="product">
              <img onClick={() => { navigate('/oneproduct', { state: { id: el.id } }); }} src={el.image} alt={el.name} />
              <span className="discount">{getRandomDiscount()}</span>
              <h3>{el.name}</h3>
              <button onClick={() => addToCart(el)} disabled={addedToCart[el.id]}>
                {addedToCart[el.id] ? 'Added to Cart' : 'Add To Cart'}
              </button>
              <span className="icon-heart2" onClick={() => addToFavorites(el)}>❤️</span>
              <p className='price-color'><span>${el.price}</span></p>
              <StarRating/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSales;
