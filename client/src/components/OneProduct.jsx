import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/OneProduct.css';
import Navbar from './Navbar';
import Footer from './Footer';
import StarRating from './rating';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`)
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch(error => {
        console.log('Error fetching the product:', error);
      });
  }, [refresh]);

  const butnow = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item.id === product.id);
    if (!existingItem) {
      cartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      navigate('/cart', { state: { id: id } });
    } else {
      toast.error(`Product with ID ${product.id} is already in the cart.`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="new-product-page">
        <div className="new-product-container">
          <div className="new-product-images">
            <img src={product.image3} alt="" />
            <img src={product.image2} alt="" />
            <img src={product.image1} alt="" />
            <img src={product.image1} alt="" />
          </div>
          <div className="new-product-main-image">
            <img src={product.image1} alt=" " />
          </div>
          <div className="new-product-details">
            <h1>{product.name}</h1>
            <div className="new-product-rating">
              <StarRating /> (150 Reviews) <span className="new-in-stock">In Stock</span>
            </div>
            <div className="new-product-price">${product.price}</div>
            <div className="new-product-description">{product.description}</div>
            <div className="new-product-options">
              <div className="new-product-colors">
                <label>Colours:</label>
                <button className="new-color-option new-color-red"></button>
                <button className="new-color-option new-color-black"></button>
              </div>
              <div className="new-product-sizes">
                <label>Size:</label>
                <button className="new-size-option">XS</button>
                <button className="new-size-option">S</button>
                <button className="new-size-option">M</button>
                <button className="new-size-option">L</button>
                <button className="new-size-option">XL</button>
              </div>
              <div className="new-product-quantity">
                <label>Quantity:</label>
                <div className="new-quantity-controls">
                  <button className="new-quantity-button" onClick={() => setQuantity(quantity - 1)}>-</button>
                  <input type="text" value={quantity} readOnly />
                  <button className="new-quantity-button" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>
            <button className="new-buy-now-button" onClick={() => butnow(product)}>Buy Now</button>
            <div className="new-delivery-info">
              <div>Free Delivery <span>Enter your postal code for Delivery Availability</span></div>
              <div>Return Delivery <span>Free 30 Days Delivery Returns. Details</span></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
