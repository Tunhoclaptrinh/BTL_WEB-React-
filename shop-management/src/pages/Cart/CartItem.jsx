import React, { useEffect, useState } from "react";
import axios from "axios";

const CartItem = ({ item, updateQuantity, removeItem, onSelect }) => {
  const [productDetails, setProductDetails] = useState(null);

  // Lấy thông tin sản phẩm từ API
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${item.productId}`);
        setProductDetails(response.data);
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
      const parsedImages = Array.isArray(images) ? images : JSON.parse(images || "[]");
      return parsedImages.length > 0 ? parsedImages[0] : "https://via.placeholder.com/90x100";
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
          src={getFirstImage(productDetails.images)} // Sử dụng hình ảnh từ chi tiết sản phẩm
          alt={productDetails.name}
          style={{ width: "90px", height: "100px" }}
        />
      </td>
      <td>
        <p>{productDetails.name}</p>
      </td>
      <td>
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: productDetails.colors ? productDetails.colors[0] : "#fff",
            border: "1px solid #ccc",
          }}
          title={productDetails.colors ? productDetails.colors[0] : "Không xác định"}
        ></div>
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
      <td>{(productDetails.salePrice * item.quantity).toLocaleString("it-IT")} Đ</td>
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
