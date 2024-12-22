import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import '../../styles/admin-style.css';
import Header from '../Header/Header';
import Design from './Design';
import { useState } from 'react';


function AdminLayout() {
  const [activeComponent, setActiveComponent] = useState(null);
  return (
    <div className="admin-container" >
      <header style={{ backgroundColor: 'rgb(230, 199, 199)' }}>
      <Link to="/admin">
          <img src="/images/logotun.png" alt="Logo" style={{ width: '80px', height: 'auto' }} />
        </Link>
      </header>
       {/* <Header /> */}
      <section className="admin-content">
        <div className="admin-content-right">
          {/* <Outlet /> */}
        </div>
      </section>
      
      {/* <Header/> */}
      <section className="admin-content">
        <div className="admin-content-left" style={{ backgroundColor: 'rgb(242, 212, 212)' }}>
          <ul>
            <li>
              <a href="#">Danh mục</a>
              <ul>
                <li><Link to="/admin/category/add">Thêm danh mục</Link></li>
                <li><Link to="/admin/category/list">Danh sách danh mục</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">Loại sản phẩm</a>
              <ul>
              <li><Link to="#" onClick={() => setActiveComponent('addProductType')}>Thêm loại sản phẩm</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">Sản phẩm</a>
              <ul>
                {/* <li><Link to="/admin/product/add">Thêm sản phẩm</Link></li>
                <li><Link to="/admin/product/list">Danh sách sản phẩm</Link></li> */}
              </ul>
            </li>
            
          
              

          </ul>
          <li><Link to="/admin/product/add">Thêm loại sản phẩm</Link></li>
                <li><Link to="/admin/product/list">Danh sách loại sản phẩm</Link></li>
        </div>
        <div className="admin-content-right">
        {activeComponent === 'addProductType' && <Design />}

          {/* <Outlet /> */}
        </div>
      </section>
    </div>
  );
}

export default AdminLayout;