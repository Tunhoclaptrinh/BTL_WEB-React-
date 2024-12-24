import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { routes } from "./routes/index"
import DefaultComponent from './components/Defaultcomponent/Defaultcomponent'
import {UserProvider } from './components/contexts/UserContext';




import Product from './pages/Product';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminLayout from './pages/Admin/AdminLayout';


// Admin

// import AdminLayout from './components/Admin/AdminLayout';
// import AddCategory from './components/Admin/AddCategory';
// import CategoryList from './components/Admin/CategoryList';
// import AddProduct from './components/Admin/AddProduct';





import { Provider } from "react-redux";
// import store from "./components/Redux/store";
// import ProductsPage from "./components/Pages/ProductsPage";
// import AddProductPage from "./components/Pages/AddProductPage";
// import EditProductPage from "./components/Pages/EditProductPage";
import "./App.css";// CSS


function App() {
  return (
    <UserProvider>
    <Router>
      <div className="App">
        {/* <Header /> */}

          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/related-products" element={<ProductRelated />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/home" element={<Home />} /> */}
            {/* <Route path="/admin" element={<AdminLayout />}></Route>
            <Route path="/admin/category/add" element={<AddCategory />} />
            <Route path="/admin/category/list" element={<CategoryList />} />
            <Route path="admin/product/add" element={<AddProduct />} /> */}
             {/* Bảo vệ đường dẫn admin */}
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminLayout />
                  </ProtectedRoute>
                }
              />




            <Route path="/product/:productId" element={
                  <DefaultComponent>
                    <Product/>
                  </DefaultComponent>
                }></Route>


            {routes.map((route) => {
              const Page = route.page
              const Layout = route.isShowHeader ? DefaultComponent : Fragment;
              return (
                <Route key={route.path} path={route.path} element={
                  <Layout>
                    <Page/>
                  </Layout>
                }></Route>
              )
            })}

          </Routes> 
        {/* <Footer /> */}
      </div>
    </Router>

    </UserProvider>

  );
}

export default App;
