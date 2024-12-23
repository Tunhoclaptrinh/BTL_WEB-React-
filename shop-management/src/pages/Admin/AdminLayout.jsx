import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import '../../styles/admin-style.css';

import ProductManagement from '../ProductManagement/ProductManagement';
import CategoryManagement from '../CategoryManagement/CategoryManagement';
import UserDetails from '../UsersDetails/UserDetails';
import UsersManagement from '../UsersManagement/UsersMangement';
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';


function AdminLayout() {
  const [activeComponent, setActiveComponent] = useState(null);
  return (
    <div className="admin-container" >
      <header style={{ backgroundColor: '#fff' }}>
      <Link to="/home">
          <img src="/images/logotun.png" alt="Logo" style={{ width: '80px', height: 'auto' }} />
        </Link>
      </header>
      
      <section className="admin-content">
        <div className="admin-content-right">
        </div>
      </section>
  
      <section className="admin-content">
        <div className="admin-content-left" style={{ backgroundColor: '#fff' }}>
          <ul>
            <li>
              <a href="#">Danh mục</a>
              <ul>
                <li><Link to="#" onClick={() => setActiveComponent('CategoryManagement')}>Quản lý danh mục</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">Sản Phẩm</a>
              <ul>
              <li><Link to="#" onClick={() => setActiveComponent('ProductManagement')}>Quản lý sản phẩm</Link></li>
              <li><Link to="#">Thống kê .....</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">Khách Hàng</a>
              <ul>
                <li><Link to="#" onClick={() => setActiveComponent('UsersManagement')} >Thông Tin</Link></li>
                <li><Link to="#">Đơn Hàng</Link></li>
                <li><Link to="#">Giỏ Hàng</Link></li>
              </ul>
            </li>

            <li>
              <a href="#"onClick={() => setActiveComponent('UserDetails')}>Thông tin cá nhân</a>
            </li>
          </ul>
        </div>
        <div className="admin-content-right">
            {activeComponent === 'ProductManagement' && <ProductManagement />}
            {activeComponent === 'CategoryManagement' && <CategoryManagement />}
            {activeComponent === 'UsersManagement' && <UsersManagement />}
            {activeComponent === 'UserDetails' && <UserDetails />}

        </div>

        
      </section>
      <Footer></Footer>
    </div>
  );
}

export default AdminLayout;