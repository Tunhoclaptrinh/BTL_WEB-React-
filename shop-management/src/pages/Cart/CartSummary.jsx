import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/ButtonWhite";
import ButtonBlack from "../../components/Button/ButtonBlack";


const CartSummary = ({ subtotal }) => {
  const navigate = useNavigate();

  // Đảm bảo subtotal là số
  const normalizedSubtotal = Number(subtotal) || 0;
  const shippingCost = normalizedSubtotal >= 1000000 ? 0 : 30000;
  const tax = Math.round(normalizedSubtotal * 0.1);
  const total = normalizedSubtotal + tax + shippingCost;

  const handleCheckout = () => {
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
              <td>{normalizedSubtotal.toLocaleString("it-IT")} Đ</td>
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
        {normalizedSubtotal < 1000000 && (
          <p style={{ color: "red", fontWeight: "bold" }}>
            Mua thêm {(1000000 - normalizedSubtotal).toLocaleString("it-IT")} Đ để được miễn phí ship!
          </p>
        )}
      </div>
      <div className="cart-content-right-button">
        {/* <button onClick={handleContinueShopping}>TIẾP TỤC MUA SẮM</button> */}
        {/* <button onClick={handleCheckout}>THANH TOÁN</button> */}
                  <Button
                    onClick={handleContinueShopping}
                    className="" 
                    label='TIẾP TỤC MUA SẮM'
                    style={{
                      height: '40px',
                      borderRadius: '0px',
                      fontSize: '16px',
                      padding: '6px 8px',
                      fontWeight: "bold",
                      margin: '20px',
                      display: 'inline-block'
                    }}
                  />
                  <ButtonBlack
                    onClick={handleCheckout}
                    className="" 
                    label='THANH TOÁN'
                    style={{
                      height: '40px',
                      borderRadius: '0px',
                      fontSize: '16px',
                      padding: '6px 10px',
                      fontWeight: "bold",
                      margin: '20px 0px 20px 130px',
                      display: 'inline-block',
                      border: '2px solid rgb(0, 0, 0)',
                    }}
                  />
      </div>
      <div className="cart-content-right-login">
        <p>Tài khoản NguynTUN</p>
        <p>Hãy <a href=""> login</a> tài khoản của bạn để tích điểm thành viên</p>
      </div>
    </div>
  );
};

export default CartSummary;
