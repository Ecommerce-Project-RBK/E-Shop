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
            <h2>{product.name}</h2>
            <div className="icons2">
            <span className="icon-heart2">❤️</span>
              <span className="icon-eye">👁️</span>
              </div>
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
    img: 'https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg',
    name: 'The north coat',
    currentPrice: '$260',
    originalPrice: '$360',
    reviews: 65,
  },
  {
    img: 'https://st4.depositphotos.com/13349494/26799/i/450/depositphotos_267998854-stock-photo-woman-virtual-reality-headset-pointing.jpg',
    name: 'Gucci duffle bag',
    currentPrice: '$960',
    originalPrice: '$1160',
    reviews: 65,
  },
  {
    img: 'https://cdsassets.apple.com/live/7WUAS350/images/social/apple-tv-4k-pair-bluetooth-beats-keyboard-social-card.jpg',
    name: 'RGB liquid CPU Cooler',
    currentPrice: '$160',
    originalPrice: '$170',
    reviews: 65,
  },
  {
    img: 'https://fs.npstatic.com/userfiles/7734655/image/Beats-Solod-4-headphones-bluetooth-specs-price-launch-w810h462.png',
    name: 'Small BookSelf',
    currentPrice: '$360',
    originalPrice: '',
    reviews: 65,
  },
];

export default TopProducts;
