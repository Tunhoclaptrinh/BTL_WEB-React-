import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
// import 'D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/admin-style.css';
import Header from '../../components/Header/Header';



function AdminLayout() {
  return (
    <div className="admin-container">
      {/* <header>
        <h1>TOP</h1>
      </header> */}
      <Header/>
      <section className="admin-content">
        <div className="admin-content-left">
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
                <li><Link to="/admin/product/add">Thêm loại sản phẩm</Link></li>
                <li><Link to="/admin/product/list">Danh sách loại sản phẩm</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">Sản phẩm</a>
              <ul>
                <li><Link to="/admin/product/add">Thêm sản phẩm</Link></li>
                <li><Link to="/admin/product/list">Danh sách sản phẩm</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">Sản phẩm</a>
              <ul>
                <li><Link to="/admin/product/add">Thêm sản phẩm</Link></li>
                <li><Link to="/admin/product/list">Danh sách sản phẩm</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">Sản phẩm</a>
              <ul>
                <li><Link to="/admin/product/add">Thêm sản phẩm</Link></li>
                <li><Link to="/admin/product/list">Danh sách sản phẩm</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">Sản phẩm</a>
              <ul>
                <li><Link to="/admin/product/add">Thêm sản phẩm</Link></li>
                <li><Link to="/admin/product/list">Danh sách sản phẩm</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">Sản phẩm</a>
              <ul>
                <li><Link to="/admin/product/add">Thêm sản phẩm</Link></li>
                <li><Link to="/admin/product/list">Danh sách sản phẩm</Link></li>
              </ul>
            </li>

          </ul>
        </div>
        <div className="admin-content-right">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default AdminLayout;