import React, { useState } from 'react';
import { Link } from "react-router-dom"; // Import Link
import ProductCard from '../components/ProductCard/ProductCard';
import 'D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css';  // Ensure the CSS file is imported

const Category = () => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const productsPerPage = 8; // Number of products to display per page

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    console.log("Filter applied:", e.target.value);
  };
  
  const handleSortChange = (e) => {
    setSort(e.target.value);
    console.log("Sort applied:", e.target.value);
  };
  


  const products = [
    { 
      id: 1, 
      name: "ĐẦM ÔM HỌA TIẾT MS12345", 
      price: "60.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 1", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL"],
    },
    { 
      id: 2, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "490.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },

    { 
      id: 3, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "1.490.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    { 
      id: 4, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "490.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },

    { 
      id: 5, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "490.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    { 
      id: 6, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "400.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    { 
      id: 7, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "490.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    { 
      id: 8, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "90.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },  
    { 
      id: 9, 
      name: "ĐẦM ÔM HỌA TIẾT MS12345", 
      price: "60.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 1", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL"],
    },
    { 
      id: 10, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "490.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },

    { 
      id: 11, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "1.490.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    { 
      id: 12, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "490.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },

    { 
      id: 13, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "490.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    { 
      id: 14, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "400.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    { 
      id: 15, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "490.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    { 
      id: 16, 
      name: "ÁO THUN CỔ TRÒN MS67890", 
      price: "90.000", 
      image: "./images/sp1.webp", 
      description: "Chi tiết sản phẩm 2", 
      color: "Xanh cổ vịt nhạt",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },

  ];

  // Ông expandedMenus đang là 1 thì dùng selectedSubMenu để chuyển expandedMenus thành 2
  const [expandedMenus, setExpandedMenus] = useState([]); // Track which submenus are expanded
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Track the currently active submenu


  const [selectedSubMenu, setSelectedSubMenu] = useState(null); // Submenu được chọn

  const toggleMenu = (menuIndex) => {
    // Toggle the activeSubMenu state
    setActiveSubMenu((prevMenu) => (prevMenu === menuIndex ? null : menuIndex)); // call back lại với giá trị trước đó,callback có thể là nhiều lần thực thi một lần render

    // Toggle trạng thái mở/đóng của menu
    setExpandedMenus((prevMenus) =>
      prevMenus.includes(menuIndex)
        ? prevMenus.filter((index) => index !== menuIndex) // Đóng menu
        : [...prevMenus, menuIndex] // Mở menu
        
    );
    setSelectedSubMenu(null); // Reset submenu được chọn khi đổi menu chính

  };
  

  const menus = [
    {
      title: 'Nữ',
      subItems: ['Hàng nữ mới về', 'Hàng nữ mới về 1', 'Hàng nữ mới về 2', 'Hàng nữ mới về 3', 'Hàng nữ mới về 4'],
    },
    {
      title: 'Nam',
      subItems: ['Hàng nam mới về', 'Hàng nam mới về 1', 'Hàng nam mới về 2', 'Hàng nam mới về 3', 'Hàng nam mới về 4'],
    },
    { title: 'Trẻ em', subItems: [] },
    { title: 'Bộ sưu tập', subItems: [] },
    { title: 'Đồ bảo hộ', subItems: [] },
  ];
  

  const filteredAndSortedProducts = products
  .filter((product) => {
    if (filter === "below") {
      return parseInt(product.price.replace(/\./g, "")) < 1000000;
    } else if (filter === "above") {
      return parseInt(product.price.replace(/\./g, "")) >= 1000000;
    }
    return true; // Không áp dụng bộ lọc nếu filter rỗng
  })
  .sort((a, b) => {
    const priceA = parseInt(a.price.replace(/\./g, ""));
    const priceB = parseInt(b.price.replace(/\./g, ""));
    if (sort === "asc") {
      return priceA - priceB;
    } else if (sort === "desc") {
      return priceB - priceA;
    }
    return 0; // Không sắp xếp nếu sort rỗng
  });


  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="category">
      <div className="container">
        <div className="category-top row">
          <p>Home</p> <span>&#10230; </span> <p>Nữ</p> <span>&#10230; </span> <p>Hàng nữ mới về</p>
        </div>
      </div>
      <div className="container">
        <div className="row">

          {/* Left Sidebar */}
          <div className="category-left">
            <ul>
              {menus.map((menu, index) => (
                <li
                  key={index}
                  className={`category-left-li ${
                    expandedMenus.includes(index) ? 'block' : ''
                  } ${activeSubMenu === index ? 'active' : ''}`}
                  onClick={() => toggleMenu(index)} // Toggle menu chính
                >
                  <a href="#">{menu.title}</a>
                  {menu.subItems.length > 0 && (
                    <ul className='sub-item'
                      style={{
                        maxHeight: expandedMenus.includes(index)
                          ? `${menu.subItems.length * 40}px`
                          : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease',
                      }}
                    >
                      {menu.subItems.map((subItem, subIndex) => (
                        <li 
                          key={subIndex}
                          className={selectedSubMenu === `${index}-${subIndex}` ? 'selected' : ''} // Đổi màu khi được chọn
                          onClick={(e) => {
                            e.stopPropagation(); // Không đóng menu cha
                            setSelectedSubMenu(`${index}-${subIndex}`); // Đặt submenu được chọn
                          }}
                        >
                          <a href="#">{subItem}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>


          {/* Right Section */}
          <div className="category-right row">

            {/* Right Sidebar */}
            <div className='filter-sort row'>
              <div className="category-right-top-item">
                <p>Hàng nữ mới về</p>
              </div>
              <div className="category-right-top-item">
                <select id="filter" value={filter} onChange={handleFilterChange}>
                  <option value=""><span>Bộ lọc</span><i className="fas fa-sort-down"></i></option>
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
            </div>

            {/* Right - product */}
            <div className="category-rigt-content row" id="products">
              <div className="category-rigt-content row" id="products">
              {/* {currentProducts.map((product) => (
                <div className="category-right-content-item" key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                    <h1>{product.name}</h1>
                    <p className="price">{product.price}<sup>Đ</sup></p>
                  </Link>
                </div>
              ))} */}
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

              
            {/*Right Others */}
            </div>
            <div className="category-right-bottom row">
              <div className="category-right-bottom-items">
                <p>Hiển thị {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, filteredAndSortedProducts.length)} của {filteredAndSortedProducts.length} sản phẩm</p>
              </div>
              <div className="category-right-bottom-items">
                <p>
                  <span>&#171;</span>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <span
                      key={index + 1}
                      onClick={() => paginate(index + 1)}
                      style={{ cursor: 'pointer', margin: '0 5px' }}
                    >
                      {index + 1}
                    </span>
                  ))}
                  <span>&#187;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;