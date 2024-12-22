import React from 'react';
import { Link } from "react-router-dom";
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <div className="category-right-content-item" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p className="price">{product.price}<sup>Đ</sup></p>
      </Link>
    </div>
  );
};

export default ProductCard;