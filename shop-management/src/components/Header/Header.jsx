import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import throttle from 'lodash/throttle';
import 'D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { UserContext } from "../../components/contexts/UserContext";





const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);




    const { user} = useContext(UserContext); // Lấy user và hàm setUser từ context


    // Xử lý thay đổi input


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll event listener to handle sticky header
  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsSticky(window.pageYOffset > 0);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamic menu data
  const menuItems = [
    {
      name: 'ORDER',
      subItems: [
        { name: 'Recent', children: ['7 days', '15 days', '30 days', '3 months', '6 months'] },
        { name: 'All' },
      ],
    },
    {
      name: 'CATEGORY',
      subItems: [
        { name: 'Type', children: ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5'] },
        { name: 'All' },
      ],
    },
    {
      name: 'SUPPLIER',
      subItems: [
        { name: 'Area', children: ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5'] },
        { name: 'All' },
      ],
    },
    {
      name: 'WAREHOUSE',
      subItems: [
        { name: 'Type', children: ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5'] },
        { name: 'All' },
      ],
    },
    {
      name: 'SHIPPING',
      subItems: [
        { name: 'Type', children: ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5'] },
        { name: 'All' },
      ],
    },
    {
      name: 'RECEIPT',
      subItems: [
        { name: 'Recent', children: ['7 days', '15 days', '30 days', '3 months', '6 months'] },
        { name: 'All' },
      ],
    },
    {
      name: 'DELIVERY',
      subItems: [
        { name: 'Recent', children: ['7 days', '15 days', '30 days', '3 months', '6 months'] },
        { name: 'All' },
      ],
    },
  ];

  return (
    <header className={`${isSticky ? 'sticky' : ''}`}>
      <div className="logo">
        
      <Link to="/home"><img src="./images/logotun (2).png" alt="Logo" /></Link>        

        
      </div>

      <div
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <i className="fas fa-bars"></i>
      </div>

      <nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.name}>
              <Link to={`/${menu.name.toLowerCase()}`}>{menu.name}</Link>
              {menu.subItems && (
                <ul className="sub-menu">
                  {menu.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link to={`/${menu.name.toLowerCase()}/${subItem.name.toLowerCase()}`}>
                        {subItem.name}
                      </Link>
                      {subItem.children && (
                        <ul>
                          {subItem.children.map((child) => (
                            <li key={child}>
                              <Link to={`/${menu.name.toLowerCase()}/${subItem.name.toLowerCase()}/${child.replace(' ', '-').toLowerCase()}`}>
                                {child}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="others">
        <li>
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </li>
        <li><Link to="/wishlist" className="fa fa-paw"></Link></li>
        {/* <li><Link to={`/user-details/${user.id}`} className="fa fa-user"></Link></li> */}
        <li><Link to="/user-details" className="fa fa-user"></Link></li>

        <li><Link to="/cart" className="fa fa-shopping-bag"></Link></li>
      </div>
    </header>
  );
};

export default Header;
