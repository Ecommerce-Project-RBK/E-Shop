import React from 'react';
import '../../CSS/FlashSales.css';

import Navbar from '../Navbar'

const FlashSales = () => {
  return ( 
  <div>
    <Navbar />
   <div className="flash-sales">
  <div className="products">
         <div className="product">
          <img src="https://www.zdnet.com/a/img/resize/7e4afb161fcd6f6054150979e101e0488aca68f0/2023/09/13/7b4446f4-c204-4e26-991f-cba6241049ff/apple-watch-ultra-2-2.jpg?auto=webp&fit=crop&frame=1&height=238.5&width=459" alt="HAVIT HV-G92 Gamepad" />
          <span className="discount">-40%</span>
          <h3>HAVIT HV-G92 Gamepad</h3>
          <button>Add To Cart</button>
          <p>$120 <span>$160</span></p>
          <p>★★★★☆ (88)</p>
        </div>
        <div className="product">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhdigZh7umQZYCw7OUmE5CHBvPGvskHdN5GXGMCnUvaxC7kNXP6usx-8OECvIYLDP804&usqp=CAU" alt="AK-900 Wired Keyboard" />
          <span className="discount">-35%</span>
          <h3>AK-900 Wired Keyboard</h3>
          <button>Add To Cart</button>
          <p>$960 <span>$1160</span></p>
          <p>★★★★☆ (75)</p>
        </div>
        <div className="product">
          <img src="https://i.pinimg.com/1200x/c8/76/5b/c8765baf0327f6e1ac192512ee952dd7.jpg" alt="IPS LCD Gaming Monitor" />
          <span className="discount">-30%</span>
          <h3>IPS LCD Gaming Monitor</h3>
          <button>Add To Cart</button>
          <p>$370 <span>$400</span></p>
          <p>★★★★★ (99)</p>
        </div>
        <div className="product">
          <img src="https://www.zdnet.com/a/img/resize/fdf7c55748fa270940bbd0ead1e7a4fa76f286d8/2023/09/13/93684380-3eff-48ab-aae0-b0aa58033af6/apple-watch-ultra-2-4.jpg?auto=webp&fit=crop&height=900&width=1200" alt="S-Series Comfort Chair" />
          <span className="discount">-25%</span>
          <h3>S-Series Comfort Chair</h3>
          <button>Add To Cart</button>
          <p>$375 <span>$400</span></p>
          <p>★★★★☆ (99)</p>
        </div>
      </div>
      <button className="view-all">View All Products</button>
    </div>
    </div>
  );
};

export default FlashSales;
