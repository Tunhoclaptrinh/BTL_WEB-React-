import React, { useState, useEffect, useContext  } from 'react';
import axios from 'axios';
import { UserContext } from '../../components/contexts/UserContext';
import CartContent from "./CartContent";
import CartSummary from "./CartSummary";
import "D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css";

const Cart = () => {
  const { user } = useContext(UserContext); // Lấy thông tin người dùng từ context
  const [items, setItems] = useState([]); // Dữ liệu sản phẩm trong giỏ hàng
  const [loading, setLoading] = useState(true); // Trạng thái tải
  const [error, setError] = useState(null); // Trạng thái lỗi

 // Lấy dữ liệu giỏ hàng từ API
 useEffect(() => {
  const fetchCart = async () => {
    try {
      if (!user || !user.id) {
        setError("Người dùng chưa đăng nhập.");
        setLoading(false);
        return;
      }

      const response = await axios.get(`http://localhost:3000/cart/${user.id}`);
      const cartData = response.data;


      console.log("Dữ liệu giỏ hàng:", items);
console.log("Thông tin API trả về:",cartData);

      // Cập nhật state items
      setItems(cartData.items || []);
    } catch (err) {
      console.error("Lỗi khi tải dữ liệu giỏ hàng:", err);
      setError("Không thể tải dữ liệu giỏ hàng.");
    } finally {
      setLoading(false);
    }
  };

  fetchCart();
}, [user]);


// Cập nhật số lượng sản phẩm
const updateQuantity = async (id, quantity) => {
  setItems((prevItems) =>
    prevItems.map((item) =>
      item.productId === id ? { ...item, quantity: Math.max(1, quantity) } : item
    )
  );

  // Gửi API cập nhật số lượng
  try {
    await axios.patch(`http://localhost:3000/cart/${user.id}`, {
      items: items.map((item) =>
        item.productId === id
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      ),

      
    });
  } catch (err) {
    console.error("Lỗi khi cập nhật số lượng:", err);
  }
};

// Xóa sản phẩm khỏi giỏ hàng
const removeItem = async (id) => {
  const updatedItems = items.filter((item) => item.productId !== id);
  setItems(updatedItems);

  // Gửi API cập nhật giỏ hàng sau khi xóa
  try {
    await axios.patch(`http://localhost:3000/cart/${user.id}`, {
      items: updatedItems,
    });
  } catch (err) {
    console.error("Lỗi khi xóa sản phẩm:", err);
  }
};




// Tính tổng tiền
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  if (loading) {
    return <div>Đang tải dữ liệu giỏ hàng...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }
  // const updateQuantity = (id, quantity) => {
  //   setItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
  //     )
  //   );
  // };

  // const removeItem = (id) => {
  //   setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  // };

  // const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

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
