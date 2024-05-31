import React from 'react';
import '../../CSS/TopProducts.css';

function TopProducts() {
  return (
    <div className="Top">
      <div className='head'>
     
      
   
      </div>
      <div className="top-label2" style={{ display: 'flex', alignItems: 'center' }}>
  <img src="https://www.clker.com/cliparts/3/R/3/7/W/R/orange-vertical-rectangle-md.png" alt="IPS LCD Gaming Monitor" style={{ width: '20px', height: 'auto', marginRight: '10px' }} />
  <h2 className='top-subtitle'>This Month</h2>
</div>

      <h1 className='top-prod'>Top Products</h1>     <button className="view-all-button">View All</button>
      <section className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.img} alt={product.name} />
            <div className="icons2">
              <span className="icon-heart2">❤️</span>
              <span className="icon-eye">👁️</span>
            </div>
            <h2>{product.name}</h2>
            <p className="price">
              <span className="current-price">{product.currentPrice}</span>
              <span className="original-price">{product.originalPrice}</span>
            </p>
            <div className="rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">({product.reviews})</span>
            </div>
          </div>
        ))}
      </section>
      <section className="music-experience">
        <h2>Enhance Your Music Experience</h2>
        <div className="timer">
          <div>23 Hours</div>
          <div>05 Days</div>
          <div>59 Minutes</div>
          <div>35 Seconds</div>
        </div>
        <button className="buy-now">Buy Now!</button>
      </section>
    </div>
  );
}

const products = [
  {
    img: 'https://katemiddletonstyle.org/wp-content/uploads/2021/03/maxco-runaway-pink-coat.jpg',
    name: 'The north coat',
    currentPrice: '$260',
    originalPrice: '$360',
    reviews: 65,
  },
  {
    img: 'https://katemiddletonstyle.org/wp-content/uploads/2021/03/maxco-runaway-pink-coat.jpg',
    name: 'Gucci duffle bag',
    currentPrice: '$960',
    originalPrice: '$1160',
    reviews: 65,
  },
  {
    img: 'https://katemiddletonstyle.org/wp-content/uploads/2021/03/maxco-runaway-pink-coat.jpg',
    name: 'RGB liquid CPU Cooler',
    currentPrice: '$160',
    originalPrice: '$170',
    reviews: 65,
  },
  {
    img: 'https://katemiddletonstyle.org/wp-content/uploads/2021/03/maxco-runaway-pink-coat.jpg',
    name: 'Small BookSelf',
    currentPrice: '$360',
    originalPrice: '',
    reviews: 65,
  },
];

export default TopProducts;
