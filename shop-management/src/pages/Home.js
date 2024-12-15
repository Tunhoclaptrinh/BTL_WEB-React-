import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider/Slider';

const Home = () => {
  const products = [
    { id: 1, name: 'Áo thun cổ tròn', price: '490.000', img: '/image/sp1.webp' },
    { id: 2, name: 'Áo sơ mi', price: '590.000', img: '/image/sp2.webp' },
    { id: 3, name: 'Quần jeans', price: '690.000', img: '/image/sp3.webp' },
  ];

  return (
    <div className="home">
      <Slider />
      <section className="product_home">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}Đ</p>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>
      <div className="view_all">
        <Link to="/category">View All Products</Link>
      </div>
    </div>
  );
};

export default Home;