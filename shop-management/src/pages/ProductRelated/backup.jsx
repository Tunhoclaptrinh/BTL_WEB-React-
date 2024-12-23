import React, { useState, useEffect } from "react";
import axios from "axios";
import './ProductRelated.css';
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductRelated = ({title = "Sản phẩm liên quan" , categoryId }) => {
  // const relatedProducts = [
  //   { 
  //     id: 4, 
  //     name: "ÁO THUN CỔ TRÒN MS67890", 
  //     price: "490.000", 
  //     image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"], 
  //     description: "Chi tiết sản phẩm 2", 
  //     color: "Xanh cổ vịt nhạt",
  //     sizes: ["S", "M", "L", "XL", "XXL"],
  //   },

  //   { 
  //     id: 5, 
  //     name: "ÁO THUN CỔ TRÒN MS67890", 
  //     price: "490.000", 
  //     image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"], 
  //     description: "Chi tiết sản phẩm 2", 
  //     color: "Xanh cổ vịt nhạt",
  //     sizes: ["S", "M", "L", "XL", "XXL"],
  //   },
  //   { 
  //     id: 6, 
  //     name: "ÁO THUN CỔ TRÒN MS67890", 
  //     price: "400.000", 
  //     image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"], 
  //     description: "Chi tiết sản phẩm 2", 
  //     color: "Xanh cổ vịt nhạt",
  //     sizes: ["S", "M", "L", "XL", "XXL"],
  //   },
  //   { 
  //     id: 7, 
  //     name: "ÁO THUN CỔ TRÒN MS67890", 
  //     price: "90.000", 
  //     image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"],
  //     description: "Chi tiết sản phẩm 2", 
  //     color: "Xanh cổ vịt nhạt",
  //     sizes: ["S", "M", "L", "XL", "XXL"],
  //   },

  // ];




  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      let url = "http://localhost:3000/products";
      if (categoryId) {
        // Lọc theo danh mục nếu `categoryId` được truyền
        url += `?categoryId=${categoryId}`;
      }
  
      const response = await axios.get(url);
      const allProducts = response.data.map(product => ({
        ...product,
        id: String(product.id), // Chuyển `id` thành chuỗi để nhất quán
        image: JSON.parse(product.image), // Chuyển đổi chuỗi JSON thành mảng
      }));
      
  
      // Chọn 4 sản phẩm ngẫu nhiên
      const randomProducts = allProducts
        .sort(() => 0.5 - Math.random()) // Trộn ngẫu nhiên danh sách
        .slice(0, 4); // Lấy 4 sản phẩm đầu tiên
      setRelatedProducts(randomProducts);

    } catch (error) {
      setError("Không thể tải danh sách sản phẩm.");
    } finally {
      setLoading(false);
    }
  };
  
  
  useEffect(() => {
    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <div>Đang tải sản phẩm...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

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
