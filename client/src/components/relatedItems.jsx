import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/RelatdItem.css';
import StarRating from './rating';
import { useNavigate } from 'react-router-dom';

const RelatedItems = ({ category }) => {
  const [related, setRelated] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      axios.get(`http://localhost:8080/api/products/category/${category}`)
        .then(response => {
          setRelated(response.data);
        })
        .catch(error => {
          console.error('Error fetching related products:', error);
        });
    }
  }, [category]);

  const handleImageClick = (id) => {
    navigate(`/OneProduct`, { state: { id: id } });
  };

  return (
    <div className="rbk-related-items">
      {related.map((product) => (
        <div className="rbk-product" key={product.id}>
          <div className="rbk-action-icons">
          </div>
          <img src={product.image} alt={product.name} onClick={() => handleImageClick(product.id)} />
          <h3 className="rbk-related-name">{product.name}</h3>
          <div className="rbk-price">
            <span className="rbk-price">${product.price}</span>
          </div>
          <div className="rbk-rating">
            <button className='relate-btn'>Add to cart</button>
            <StarRating />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedItems;
