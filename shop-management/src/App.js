import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';
import ProductRelated from './pages/ProductRelated';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment';
import Delivery from './pages/Delivery';

import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product/:productId" element={<Product />} />
          {/* <Route path="/product/" element={<Product />} />  */}
          {/* ở đây còn có cái id product/:id */}

          <Route path="/related-products" element={<ProductRelated />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/home" element={<Home />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
