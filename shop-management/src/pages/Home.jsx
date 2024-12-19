import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider/Slider';
import 'D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css';


const Home = () => {
  const Homeproducts = [
    { id: 1, name: 'Áo thun cổ tròn', price: '490.000', img: '/images/sp1.webp' },
    { id: 2, name: 'Áo sơ mi', price: '590.000', img: '/images/sp1.webp' },
    { id: 3, name: 'Quần jeans', price: '690.000', img: '/images/sp1.webp' },
  ];

  return (
    <div className="home">
      <Slider />
      <section className="product-related">
        <h2>Featured Products</h2>
          <div className="related-items">
                {Homeproducts.map((product) => (
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