import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminProductManager = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    color: "",
    sizes: [],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = async () => {
    try {
      await axios.post("http://localhost:3000/products", formData);
      alert("Product added successfully!");
      setFormData({
        name: "",
        price: "",
        image: "",
        description: "",
        color: "",
        sizes: [],
      });
    } catch (error) {
      console.error("Error adding product:", error);
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
        <button onClick={handleAddProduct}>Thêm sản phẩm</button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProductManager;
