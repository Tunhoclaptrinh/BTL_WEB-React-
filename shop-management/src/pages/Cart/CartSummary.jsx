import React from "react";
import { useNavigate } from "react-router-dom";


const CartSummary = ({ subtotal }) => {
  const navigate = useNavigate();
  const shippingCost = subtotal >= 1000000 ? 0 : 30000;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax + shippingCost;

  const handleCheckout = () => {
    // Navigate to the delivery page when the checkout button is clicked
    navigate("/delivery");
  };

  const handleContinueShopping = () => {
    navigate("/home");
  };

  return (
    <div className="cart-content-right">
      <div className="summary">
        <table>
          <thead>
            <tr>
              <th colSpan="2">TỔNG TIỀN TRONG GIỎ HÀNG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TỔNG SẢN PHẨM</td>
              <td>{subtotal.toLocaleString("it-IT")} Đ</td>
            </tr>
            <tr>
              <td>VAT 10%</td>
              <td>{tax.toLocaleString("it-IT")} Đ</td>
            </tr>
            <tr>
              <td>Phí vận chuyển</td>
              <td>{shippingCost.toLocaleString("it-IT")} Đ</td>
            </tr>
            <tr>
              <td>TẠM TÍNH</td>
              <td style={{ fontWeight: "bold" }}>
                {total.toLocaleString("it-IT")} Đ
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cart-content-right-text">
        <p>Bạn sẽ được miễn phí ship khi đơn hàng của bạn có tổng giá trị trên <b>1.000.000 <sup>Đ</sup></b></p>
        {subtotal < 1000000 && (
          <p style={{ color: "red", fontWeight: "bold" }}>
            Mua thêm {(1000000 - subtotal).toLocaleString("it-IT")} Đ để được miễn phí ship!
          </p>
        )}
      </div>
      <div className="cart-content-right-button">
        <button onClick={handleContinueShopping}>TIẾP TỤC MUA SẮM</button>
        <button onClick={handleCheckout}>THANH TOÁN</button>
      </div>
      <div className="cart-content-right-login">
        <p>Tài khoản NguynTUN</p>
        <p>Hãy <a href=""> login</a> tài khoản của bạn để tích điểm thành viên</p>
      </div>
    </div>
  );
};

export default CartSummary;
