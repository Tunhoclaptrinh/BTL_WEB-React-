import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import AddCategory from './components/AddCategory';
import CategoryList from './components/CategoryList';
import AddProduct from './components/AddProduct';

function Router() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          {/* Category Routes */}
          <Route path="/admin/category/add" element={<AddCategory />} />
          <Route path="/admin/category/list" element={<CategoryList />} />

          {/* Product Routes */}
          <Route path="admin/product/add" element={<AddProduct />} />
          {/* TODO: Add Product List component */}
        </Route>
      </Routes>
    </Router>
  );
}

export default Router;