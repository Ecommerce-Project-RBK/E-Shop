import React, { useEffect, useState } from 'react';
import '../CSS/Cart.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const[name,setname]=useState("")
  const[price,setprice]=useState("")
  const[cat,setcat]=useState("")
  const[nae,setna]=useState("")
  

  const user = JSON.parse(localStorage.getItem("user"));
  const items = JSON.parse(localStorage.getItem('cartItems')) || [];



 const buy=()=>{
  axios.post("http://localhost:8080/api/cart/add",{
    nameOfproduct:name,
    total:price,
    category:cat,
    username:nae

  }).then((response)=>{console.log(response) 
    // localStorage.removeItem("cartItems");
  }).catch((err)=>{
    console.log(err)
   
  })
 }

  useEffect(() => {
    
    setCartItems(items);
    console.log(items)
    const concatenatedName = items.map(item => item.name).join(',');
    const concatenatedPrice = items.map(item => item.price).reduce((acc, price) => acc + price, 0)
    const concatenatedCategory = items.map(item => item.category).join(',');

    setname(concatenatedName);
    setprice(concatenatedPrice);
    setcat(concatenatedCategory);
    setna(user.name);
   
   
  }, []);

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
                <td><b>{item.price}</b></td>
                <td>
                  <div className="quantity-control">
                    <input type="number" value="1" min="1" readOnly />
                  </div>
                </td>
                <td><b>{item.price}</b></td>
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
          <button className="checkout" onClick={()=>{buy()}}>Proceed to Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;