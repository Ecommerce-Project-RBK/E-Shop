import React, { useEffect, useState } from 'react';
import '../CSS/Cart.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [cat, setCat] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUsername(decodedToken.name);
    }

    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);

    const concatenatedName = items.map(item => item.name).join(' | ');
    const concatenatedPrice = items.map(item => item.price).reduce((acc, price) => acc + price, 0);
    const concatenatedCategory = items.map(item => item.category).join(' | ');

    setName(concatenatedName);
    setPrice(concatenatedPrice);
    setCat(concatenatedCategory);
  }, [token]);

  const buy = () => {
    if (!username) {
      alert("You don't have an account");
      return;
    }

    axios.post("http://localhost:8080/api/cart/add", {
      nameOfproduct: name,
      total: price,
      category: cat,
      username: username 
    }).then((response) => {
      console.log(response);
      localStorage.removeItem("cartItems");
    }).catch((err) => {
      console.log(err);
      alert("An error occurred while processing your request");
    });
  };

  const delet = (index) => {
    const updatedCartItems = cartItems.slice(0, index).concat(cartItems.slice(index + 1));
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="product-details">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <span className="product-name"><b>{item.name}</b></span>
                </td>
                <td><b>{item.price} $</b></td>
                <td>
                  <div className="quantity-control">
                    <input type="number" value="1" min="1" readOnly />
                  </div>
                </td>
                <td><b>{item.price} $</b></td>
                <td>
                  <button onClick={() => delet(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-actions">
          <button className="return-shop" onClick={() => { navigate("/home") }}>Return to Shop</button>
          <button className="update-cart">Update Cart</button>
        </div>
        <div className="cart-total">
          <p>Subtotal: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
          <p>Shipping: Free</p>
          <p>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
          <button className="checkout" onClick={buy}>Proceed to Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
