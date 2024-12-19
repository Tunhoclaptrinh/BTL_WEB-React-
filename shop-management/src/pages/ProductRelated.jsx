import React from 'react';
import { Link } from 'react-router-dom';
import 'D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css';

const ProductRelated = () => {
  const relatedProducts = [
    { id: 1, img: '/images/sp1.webp', name: 'Áo thun cổ tròn', price: '490.000' },
    { id: 2, img: '/images/sp1.webp', name: 'Áo sơ mi', price: '590.000' },
    { id: 3, img: "/images/sp1.webp",  name: 'Quần jeans', price: '690.000' },
    { id: 4, img: '/images/sp1.webp', name: 'Áo thun cổ tròn', price: '490.000' },
    { id: 5, img: '/images/sp1.webp', name: 'Áo sơ mi', price: '590.000' },
    { id: 6, img: "/images/sp1.webp",  name: 'Quần jeans', price: '690.000' },
  ];

  return (
    <section className="product-related">
      <h2>Sản phẩm liên quan</h2>
      <div className="related-items">
        {relatedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}Đ</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductRelated;
