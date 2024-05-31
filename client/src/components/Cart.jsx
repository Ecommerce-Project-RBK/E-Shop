import React from 'react';
import '../CSS/Cart.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Cart = () => {
  return (<div>
    <Navbar/>
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="product-details">
              <img src="https://th.bing.com/th/id/OIP.wqNcJRp9rIs6-eHreAY8agHaGH?rs=1&pid=ImgDetMain" alt="LCD Monitor" className="product-image"  />
              <span className="product-name"> <b>LCD Monitor</b></span>
            </td>
            <td><b>$650</b></td>
            <td>
              <div className="quantity-control">
                <input type="number" value="1" min="1" />
              </div>
            </td>
            <td><b>$650</b></td>
          </tr>
          <tr>
            <td className="product-details">
              <img src="https://sm.ign.com/t/ign_br/photo/default/controller3-1671500852260_ue3j.1080.jpg" alt="H4 Gamepad" className="product-image" />
              <span className="product-name"> <b>H4 Gamepad</b></span>
            </td>
            <td><b>$550</b></td>
            <td>
              <div className="quantity-control">
                <input type="number" value="2" min="1" />
              </div>
            </td>
            <td><b>$1100</b></td>
          </tr>
        </tbody>
      </table>
      <div className="cart-actions">
        <button className="return-shop">Return to Shop</button>
        <button className="update-cart">Update Cart</button>
      </div>
      <div className="coupon-section">
        <input type="text" placeholder="Coupon Code" />
        <button>Apply Coupon</button>
      </div>
      <div className="cart-total">
        <p>Subtotal: $1750</p>
        <p>Shipping: Free</p>
        <p>Total: $1750</p>
        <button className="checkout">Proceed to Checkout</button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Cart;