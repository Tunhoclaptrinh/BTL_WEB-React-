import React, { useEffect, useState } from "react";
import axios from "axios";

const CartItem = ({ item, updateQuantity, removeItem, onSelect }) => {
  const [productDetails, setProductDetails] = useState(null);

  const normalizeProduct = (product) => {
    try {
      return {
        ...product,
        // Chuẩn hóa image thành mảng
        image: Array.isArray(product.image) ? product.image : JSON.parse(product.image || "[]"),
  
        // Chuẩn hóa sizes thành mảng
        sizes: Array.isArray(product.sizes) ? product.sizes : JSON.parse(product.sizes || "[]"),
  
        // Chuẩn hóa price thành số nguyên hoặc số thực
        price: parseFloat(product.price),
  
        // Chuẩn hóa quantity thành số nguyên
        quantity: parseInt(product.quantity, 10),
      };
    } catch (error) {
      console.error("Lỗi khi chuẩn hóa sản phẩm:", error);
      return product; // Trả về sản phẩm gốc nếu xảy ra lỗi
    }
  };
  
  // Lấy thông tin sản phẩm từ API
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${item.productId}`);
        
        // Chuẩn hóa dữ liệu sản phẩm
        const normalizedData = normalizeProduct(response.data);
        setProductDetails(normalizedData);
      } catch (error) {
        console.error("Lỗi khi tải thông tin sản phẩm:", error);
      }
    };
  
    if (item.productId) {
      fetchProductDetails();
    }
  }, [item.productId]);
  

  // Lấy hình ảnh đầu tiên từ mảng hoặc sử dụng hình ảnh mặc định
  const getFirstImage = (images) => {
    try {
      const parsedImages = images
      return parsedImages;

    } catch (error) {
      console.error("Lỗi khi phân tích hình ảnh:", error);
      return "https://via.placeholder.com/90x100"; // Hình ảnh mặc định nếu xảy ra lỗi
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    updateQuantity(item.id, value);
  };

  const handleCheckboxChange = (e) => {
    onSelect(item.id, e.target.checked);
  };

  if (!productDetails) {
    return (
      <tr>
        <td colSpan="8">Đang tải thông tin sản phẩm...</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={item.isSelected || false}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
      <img
          src={productDetails.image[0]} // Hiển thị hình ảnh đầu tiên
          alt={productDetails.name}
          style={{ width: "90px", height: "100px" }}
        />
      </td>
      <td>
        <p>{productDetails.name}</p>
      </td>
      <td >
        <div style={{
            backgroundColor: "#fff",
            fontWeight: "bold",
            borderRadius: "10px",
          }}>{item.color }</div>
      </td>
      <td>
        <p>{item.size}</p>
      </td>
      <td>
        <input
          type="number"
          value={item.quantity}
          min="1"
          onChange={handleQuantityChange}
        />
      </td>
      <td>{(Number(productDetails.price) * Number(item.quantity)).toLocaleString("it-IT")} Đ</td>
      <td>
        <span
          className="remove-item"
          onClick={() => removeItem(item.id)}
          style={{ cursor: "pointer", color: "red" }}
        >
          x
        </span>
      </td>
    </tr>
  );
};

export default CartItem;
