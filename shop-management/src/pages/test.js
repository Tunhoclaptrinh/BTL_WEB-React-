import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css";

const Category = () => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  // Danh sách sản phẩm
  const products = [
    { id: 1, name: "ĐẦM ÔM HỌA TIẾT MS12345", price: "60.000", image: "./images/sp1.webp" },
    { id: 2, name: "ÁO THUN CỔ TRÒN MS67890", price: "490.000", image: "./images/sp1.webp" },
    { id: 3, name: "QUẦN JEANS NAM MS34567", price: "890.000", image: "./images/sp1.webp" },
    { id: 4, name: "ÁO KHOÁC NỮ MS45678", price: "1.200.000", image: "./images/sp1.webp" },
  ];

  return (
    <section className="category">
      <div className="container">
        <div className="category-top row">
          <p>Home</p> <span>&#10230; </span> <p>Nữ</p> <span>&#10230; </span> <p>Hàng nữ mới về</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="category-left">
            {/* Bộ lọc danh mục */}
            <ul>
              <li className="category-left-li">
                <a href="#">Nữ</a>
                <ul>
                  <li><a href="">Hàng nữ mới về</a></li>
                  <li><a href="">Hàng nữ mới về 1</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="category-right row">
            <div className="category-right-top-item">
              <p>Hàng nữ mới về</p>
            </div>
            <div className="category-right-top-item">
              <select id="filter" value={filter} onChange={handleFilterChange}>
                <option value="">Bộ lọc</option>
                <option value="below">Dưới 1,000,000</option>
                <option value="above">Trên 1,000,000</option>
              </select>
            </div>
            <div className="category-right-top-item">
              <select id="sort" value={sort} onChange={handleSortChange}>
                <option value="">Sắp xếp</option>
                <option value="asc">Giá thấp đến cao</option>
                <option value="desc">Giá cao đến thấp</option>
              </select>
            </div>

            <div className="category-right-content row">
              {products.map((product) => (
                <div className="category-right-content-item" key={product.id}>
                  {/* Link đến trang Product */}
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                    <h1>{product.name}</h1>
                    <p className="price">
                      {product.price}
                      <sup>Đ</sup>
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
