import React from 'react';
import { Link } from "react-router-dom";
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <div className="category-right-content-item" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <div className='product-card-image'>
          <img src={product.image[0]} alt={product.name} />
        </div>
        <h1>{product.name}</h1>
        <p className="price">{Number(product.price).toLocaleString("it-IT")}<sup>Đ</sup> <span style={{
          fontSize: '14px',
          color: '#000',
          marginLeft: '10px'
        }}>Số lượng: {product.quantity}</span></p>

        {/* {alert(product.images)} */}
      </Link>
    </div>
  );
};

export default ProductCard;