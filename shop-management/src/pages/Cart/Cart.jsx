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
  const [cartId, setCartId] = useState(null); // Lưu `cartId` để sử dụng

 // Lấy dữ liệu giỏ hàng từ API
 useEffect(() => {
//   const fetchCart = async () => {
//     try {
//       if (!user || !user.id) {
//         setError("Người dùng chưa đăng nhập.");
//         setLoading(false);
//         return;
//       }

//       const response = await axios.get(`http://localhost:3000/cart/${user.id}`);
//       const cartData = response.data;

//       console.log("Thông tin API trả về:", cartData);

//       // Xử lý dữ liệu để đảm bảo các trường hợp hợp lệ
//       const processedItems = cartData.items.map((item) => ({
//         ...item,
//         price: Number(item.price) || 0, // Chuyển price thành số, mặc định là 0 nếu không hợp lệ
//         quantity: Number(item.quantity) || 0, // Chuyển quantity thành số, mặc định là 0 nếu không hợp lệ
//         image: JSON.parse(item.image || "[]"), // Parse image nếu là JSON string
//       }));

//       console.log("Dữ liệu sau khi xử lý:", processedItems);
//       setItems(processedItems);
//     } catch (err) {
//       console.error("Lỗi khi tải dữ liệu giỏ hàng:", err);
//       setError("Không thể tải dữ liệu giỏ hàng.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchCart();
// }, [user]);

const fetchCart = async () => {
  try {
    if (!user || !user.id) {
      setError("Hãy đăng nhập tài khoản của bạn");
      setLoading(false);
      return;
    }

    // Gọi API lấy danh sách giỏ hàng
    const response = await axios.get(`http://localhost:3000/cart`);
    const allCarts = response.data;

    // Tìm giỏ hàng của người dùng hiện tại
    const userCart = allCarts.find(cart => cart.userId === user.id);

    if (userCart) {
      setCartId(userCart.id); // Lưu `cartId` để sử dụng
      const processedItems = userCart.items.map((item) => ({
        ...item,
        price: Number(item.price) || 0,
        quantity: Number(item.quantity) || 0,
        image: JSON.parse(item.image || "[]"),
      }));
      setItems(processedItems);
    } else {
      console.log("Không tìm thấy giỏ hàng. Tạo mới...");
      const newCart = await axios.post(`http://localhost:3000/cart`, {
        userId: user.id,
        items: [],
        updatedAt: new Date().toISOString(),
      });
      setCartId(newCart.data.id);
      setItems([]);
    }
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
  const updatedItems = items.map((item) =>
    item.productId === id ? { ...item, quantity: Math.max(1, quantity) } : item
  );
  setItems(updatedItems);

  try {
    alert(cartId)
    await axios.patch(`http://localhost:3000/cart/${cartId}`, {
      items: updatedItems.map((item) => ({
        ...item,
        image: JSON.stringify(item.image),
      })),
    });
  } catch (err) {
    console.error("Lỗi khi cập nhật số lượng:", err);
    setError("Không thể cập nhật số lượng sản phẩm.");
  }
};

// Xóa sản phẩm khỏi giỏ hàng
const removeItem = async (id) => {
  
  const updatedItems = items.filter((item) => item.productId !== id);
  setItems(updatedItems);

  try {
    await axios.patch(`http://localhost:3000/cart/${cartId}`, {
      items: updatedItems.map((item) => ({
        ...item,
        image: JSON.stringify(item.image),
      })),
    });
  } catch (err) {
    console.error("Lỗi khi xóa sản phẩm:", err);
    setError("Không thể xóa sản phẩm.");
  }
};

// Tính tổng tiền

 const subtotal = items.reduce((total, item) => {
  const validPrice = Number(item.price) || 0;
  const validQuantity = Number(item.quantity) || 0;
  return total + validPrice * validQuantity;
}, 0);


console.log("Subtotal:", subtotal);


if (loading) {
  return <div>Đang tải dữ liệu giỏ hàng...</div>;
}

if (error) {
  return <div className="error-message" style={{margin: "300px", fontSize: "50px"}}>{error}</div>;
}

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
