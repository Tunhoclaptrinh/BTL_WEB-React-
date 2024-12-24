import React, { useState, useEffect } from "react";
import axios from "axios";
import './ProductRelated.css';
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductRelated = ({title = "Sản phẩm liên quan" , categoryId, productId }) => {





  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true); // Bắt đầu tải
    setError(null); // Xóa lỗi cũ (nếu có

    try {
      let url = "http://localhost:3000/products";
      if (categoryId) {
        // alert(categoryId)
        // Lọc theo danh mục nếu `categoryId` được truyền
        url += `?category=${categoryId}`;
      }
  
      const response = await axios.get(url);
      const allProducts = response.data.map(product => ({
        ...product,
        id: String(product.id), // Chuyển `id` thành chuỗi để nhất quán
        image: JSON.parse(product.image), // Chuyển đổi chuỗi JSON thành mảng
      }));
      
  
      const filteredProducts = allProducts.filter(
        (product) =>String(product.id) !== String(productId)// Loại bỏ sản phẩm hiện tại
      );
      console.log("Product ID hiện tại:", productId);
      console.log("Danh sách sản phẩm trước khi lọc:", allProducts);
      console.log("Danh sách sản phẩm sau khi lọc:", filteredProducts);
      

      // Chọn 4 sản phẩm ngẫu nhiên
      const randomProducts = filteredProducts
        .sort(() => 0.5 - Math.random()) // Trộn ngẫu nhiên danh sách
        .slice(0, 4); // Lấy 4 sản phẩm đầu tiên
      setRelatedProducts(randomProducts);

    } catch (error) {
      setError("Không thể tải danh sách sản phẩm.");
    } finally {
      setLoading(false);
    }
  };
  
  
// // Gọi hàm fetchProducts khi `categoryId` thay đổi
//     useEffect(() => {
//         fetchProducts();
//     }, [categoryId]);

// Gọi hàm fetchProducts khi `categoryId` hoặc `productId` thay đổi
useEffect(() => {
  // if (categoryId && productId) {
      fetchProducts(); // Gọi ngay cả khi không có `categoryId`
  // }
}, [categoryId, productId]);

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
