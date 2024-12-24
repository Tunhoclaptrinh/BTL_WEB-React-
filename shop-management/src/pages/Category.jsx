import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom"; // Import Link
import axios from 'axios';
import ProductCard from '../components/ProductCard/ProductCard';
import 'D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css';  // Ensure the CSS file is imported

const Category = () => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [products, setProducts] = useState([]); // State for fetched products
  const [categories, setCategories] = useState([]); // State for categories
  const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category
  const [loading, setLoading] = useState(true); // Loading state
  const productsPerPage = 8; // Number of products to display per page

// Safe JSON parsing
const safeParseJSON = (str) => {
  try {
    return JSON.parse(str);
  } catch {
    return [];
  }
};

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch products
        const productResponse = await axios.get('http://localhost:3000/products');
        const fetchedProducts = productResponse.data.map(product => ({
          ...product,
          image: safeParseJSON(product.image), // Convert image string to array
        }));
        setProducts(fetchedProducts);

        // Fetch categories
        const categoryResponse = await axios.get('http://localhost:3000/categories');
        setCategories(categoryResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    console.log("Filter applied:", e.target.value);
  };
  
  const handleSortChange = (e) => {
    setSort(e.target.value);
    console.log("Sort applied:", e.target.value);
  };
  

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
  

  const filteredAndSortedProducts = products
  .filter((product) => {
    // Kiểm tra nếu `price` là số, chuỗi, hoặc null
    const rawPrice = typeof product.price === "string" ? product.price : String(product.price || "0");

    // Chuyển đổi giá sang số thực
    const price = parseFloat(rawPrice.replace(/\./g, '').replace(',', '.')) || 0;

    // Lọc theo giá
    if (filter === "below" && price >= 1000000) return false;
    if (filter === "above" && price < 1000000) return false;

    // Lọc theo danh mục
    if (selectedCategory && product.category !== selectedCategory.id) return false;

    return true;
  })
  .sort((a, b) => {
    const rawPriceA = typeof a.price === "string" ? a.price : String(a.price || "0");
    const rawPriceB = typeof b.price === "string" ? b.price : String(b.price || "0");

    // Chuyển đổi giá sang số thực
    const priceA = parseFloat(rawPriceA.replace(/\./g, '').replace(',', '.')) || 0;
    const priceB = parseFloat(rawPriceB.replace(/\./g, '').replace(',', '.')) || 0;

    if (sort === "asc") return priceA - priceB;
    if (sort === "desc") return priceB - priceA;

    return 0; // Không sắp xếp nếu `sort` rỗng
  });



  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryClick = (category) => {
    if (selectedCategory?.id === category.id) {
      setSelectedCategory(null); // Deselect category if it's already selected
    } else {
      setSelectedCategory(category); // Set selected category
    }
  };

  return (
    <section className="category">
      <div className="container">
        <div className="category-top row" >
          <p> 
            <a href="/home">Trang chủ</a>
          </p >
            <span>&#10230; </span>
          <p span> 
            <a href="/category">Danh mục</a> 
          </p>
            <span>&#10230; </span>
            <p style={{ color: "#007bff"}}>{selectedCategory ? selectedCategory.name : 'none'}
          </p> 
          {/* <span>&#10230; </span> <p>Hàng nữ mới về</p> */}
        </div>
      </div>
      <div className="container">
        <div className="row">

          {/* Left Sidebar */}
          <div className="category-left">
            <ul>
              {categories.map((menu, index) => (
                <li
                  key={index}
                  className={`category-left-li ${selectedCategory?.id === menu.id ? 'active block' : ''}`}
                  // className={`category-left-li ${expandedMenus.includes(index) ? 'block' : ''} ${activeSubMenu === index ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(menu)}
                  // onClick={() => toggleMenu(index)} // Toggle menu chính
                >
                  <a href="#">{menu.name}</a>
                  {/* <a href="#">{menu.title}</a> */}

                  {/* {menu.subItems.length > 0 && (
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
                          className={selectedSubMenu === `${index}-${subIndex}` ? 'selected' : ''} 
                          // Đổi màu khi được chọn
                          onClick={(e) => {
                            e.stopPropagation(); 
                            // Không đóng menu cha
                            setSelectedSubMenu(`${index}-${subIndex}`); 
                            // Đặt submenu được chọn
                          }}
                        >
                          <a href="#">{subItem}</a>
                        </li>
                      ))}
                    </ul>
                  )} */}
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
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
              {/* </div> */}

              
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