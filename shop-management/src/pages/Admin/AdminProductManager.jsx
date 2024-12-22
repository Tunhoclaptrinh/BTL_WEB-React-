import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminProductManager = () => {
  const [products, setProducts] = useState([]); // Danh sách sản phẩm
  const [formData, setFormData] = useState({
    id: null, // Thêm ID để xử lý sửa sản phẩm
    name: "",
    price: "",
    image: "",
    description: "",
    color: "",
    sizes: [],
  });
  const [isEditing, setIsEditing] = useState(false); // Trạng thái chỉnh sửa

  // Lấy danh sách sản phẩm từ API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
      }
    };
    fetchProducts();
  }, []);

  // Xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Xử lý thêm sản phẩm
  const handleAddProduct = async () => {
    try {
      const { id, ...productWithoutId } = formData; // Loại bỏ `id`
      await axios.post("http://localhost:3000/products", productWithoutId);
      alert("Thêm sản phẩm thành công!");
      resetForm();
      fetchProducts(); // Cập nhật danh sách sản phẩm
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
    }
  };

  // Xử lý sửa sản phẩm
  const handleEditProduct = (product) => {
    setFormData(product); // Hiển thị thông tin sản phẩm trong form
    setIsEditing(true); // Kích hoạt chế độ chỉnh sửa
  };

  const handleUpdateProduct = async () => {
    try {
      await axios.put(`http://localhost:3000/products/${formData.id}`, formData);
      alert("Cập nhật sản phẩm thành công!");
      resetForm();
      fetchProducts(); // Cập nhật danh sách sản phẩm
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error);
    }
  };

  // Xử lý xóa sản phẩm
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      alert("Xóa sản phẩm thành công!");
      fetchProducts(); // Cập nhật danh sách sản phẩm
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
  };

  // Reset form và trạng thái
  const resetForm = () => {
    setFormData({
      id: null,
      name: "",
      price: "",
      image: "",
      description: "",
      color: "",
      sizes: [],
    });
    setIsEditing(false);
  };

  // Lấy lại danh sách sản phẩm từ API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Lỗi khi tải sản phẩm:", error);
    }
  };

  return (
    <div>
      <h1>Quản lý sản phẩm</h1>
      <div>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
        />
        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <input
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleInputChange}
        />
        {isEditing ? (
          <button onClick={handleUpdateProduct}>Cập nhật sản phẩm</button>
        ) : (
          <button onClick={handleAddProduct}>Thêm sản phẩm</button>
        )}
        <button onClick={resetForm}>Hủy</button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => handleEditProduct(product)}>Sửa</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProductManager;
