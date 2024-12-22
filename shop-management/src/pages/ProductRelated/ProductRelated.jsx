import React from 'react';

import './ProductRelated.css';
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductRelated = ({title = "Sản phẩm liên quan"}) => {
  const relatedProducts = [
    { 
      id: 4, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "490.000", 
      image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"], 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },

    { 
      id: 5, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "490.000", 
      image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"], 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    { 
      id: 6, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "400.000", 
      image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"], 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    { 
      id: 7, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "90.000", 
      image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"],
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },

  ];

  return (
    <section className="product-related">
      <h2 className="product-related-tittle">{title}</h2>
      <div className="related-items row" style={{
        display: "flex",
        width: 'calc(95% - 20px)',
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "",


        // padding: "0 15px",
      }}>
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} style={{
              display: "flex",
              padding: "15px",
              width: '20%',
            }} />
          ))}
      </div>
    </section>
  );
};

export default ProductRelated;
