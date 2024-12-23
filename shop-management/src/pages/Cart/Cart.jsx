import React, { useState } from 'react';
import CartContent from "./CartContent";
import CartSummary from "./CartSummary";
import "D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css";

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image: "/images/sp1.webp",
      name: "Quần sooc bò đen MS 23213123",
      color: "/images/color4.png",
      size: "XL",
      price: 239000,
      quantity: 2,
    },
    {
      id: 2,
      image: "/images/sp1.webp",
      name: "Quần bò đen MS 232123",
      color: "/images/color4.png",
      size: "XL",
      price: 279000,
      quantity: 2,
    },
  ]);

  const updateQuantity = (id, quantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="cart">
      <div className="container">
        <div className="cart-top-wrap-status">
          <div className="cart-top-status">
            <div className="cart-top-cart-status cart-top-item-status">
              <i>Cart</i>
            </div>
            <div className="cart-top-address-status cart-top-item-status">
              <i>Delivery</i>
            </div>
            <div className="cart-top-payment-status cart-top-item-status">
              <i>Payment</i>
            </div>
          </div>
          
        </div>
        <div class="cart-top-wrap">
                <div class="cart-top">
                    <div class="cart-top-cart cart-top-item">
                        
                        <i class="fas fa-shopping-cart "></i>
                    </div>
                    <div class="cart-top-address cart-top-item">
                        <i class="fas fa-map-marker-alt "></i>
                    </div>
                    <div class="cart-top-payment cart-top-item">
                        <i class="fas fa-money-check-alt "></i>
                    </div>
                </div>
            </div>
        <div className="cart-content row">
          <CartContent items={items} updateQuantity={updateQuantity} removeItem={removeItem} />
          <CartSummary subtotal={subtotal} />
        </div>
      </div>
    </section>
  );
};

export default Cart;
