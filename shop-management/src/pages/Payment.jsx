import React, { useState } from "react";
import 'D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css';
import ButtonWhite from "../components/Button/ButtonWhite";
import { Link } from "react-router-dom";
import ButtonBlack from "../components/Button/ButtonBlack";

const Payment = () => {
  const [selectedDelivery, setSelectedDelivery] = useState("express");
  const [selectedPayment, setSelectedPayment] = useState("atm");

  return (
    <section className="payment">
      <div className="container">
        {/* Status Section */}
        <div className="payment-top-wrap-status">
          <div className="payment-top-status">
            <div className="cart-top-cart-status cart-top-item-status">
              <i>Cart</i>
            </div>
            <div className="delivery-top-address-status delivery-top-item-status">
              <i>Delivery</i>
            </div>
            <div className="payment-top-payment-status payment-top-item-status">
              <i>Payment</i>
            </div>
          </div>
        </div>

        {/* Icon Section */}
        <div className="payment-top-wrap">
          <div className="payment-top">
            <div className="cart-top-cart cart-top-item">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="delivery-top-address delivery-top-item">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="payment-top-payment payment-top-item">
              <i className="fas fa-money-check-alt"></i>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="payment-content row">
          <div className="payment-content-left">
            {/* Delivery Method */}
            <div className="payment-content-left-method-delivery">
              <p style={{ fontWeight: "bold" }}>Phương thức giao hàng</p>
              <div className="payment-content-left-method-delivery-item">
                <input
                  type="radio"
                  name="method-delivery"
                  checked={selectedDelivery === "express"}
                  onChange={() => setSelectedDelivery("express")}
                />
                <label>Giao hàng chuyển phát nhanh</label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="payment-content-left-method-payment">
              <p style={{ fontWeight: "bold" }}>Phương thức thanh toán</p>
              <p>
                "Mọi giao dịch được bảo mật và mã hóa. Thông tin thẻ tín dụng
                không bao giờ được lưu lại."
              </p>
              <div className="payment-content-left-method-payment-item">
                <input
                  type="radio"
                  name="method-payment"
                  checked={selectedPayment === "credit-card"}
                  onChange={() => setSelectedPayment("credit-card")}
                />
                <label>Thanh toán bằng thẻ tín dụng.</label>
              </div>
              <div className="payment-content-left-method-payment-item-img">
                <img src="/images/vcb.webp" alt="Credit Card" />
              </div>
              <div className="payment-content-left-method-payment-item">
                <input
                  type="radio"
                  name="method-payment"
                  checked={selectedPayment === "atm"}
                  onChange={() => setSelectedPayment("atm")}
                />
                <label>Thanh toán bằng thẻ ATM.</label>
              </div>
              <div className="payment-content-left-method-payment-item-img">
                <img src="/images/vcb.webp" alt="ATM" />
              </div>
              <div className="payment-content-left-method-payment-item">
                <input
                  type="radio"
                  name="method-payment"
                  checked={selectedPayment === "momo"}
                  onChange={() => setSelectedPayment("momo")}
                />
                <label>Thanh toán bằng MOMO.</label>
              </div>
              <div className="payment-content-left-method-payment-item-img">
                <img src="/images/vcb.webp" alt="MOMO" />
              </div>
              <div className="payment-content-left-method-payment-item">
                <input
                  type="radio"
                  name="method-payment"
                  checked={selectedPayment === "cash-on-delivery"}
                  onChange={() => setSelectedPayment("cash-on-delivery")}
                />
                <label>Thu tiền tận nơi.</label>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="payment-content-right">
            {/* Discount Codes */}
            <div className="payment-content-right-button">
              <input type="text" placeholder="Mã giảm giá/quà tặng" />
              <ButtonBlack
                className="fas fa-check" 
                icon=''
                style={{
                  width: '',
                  height: '40px',
                  borderRadius: '0px',
                  fontSize: '16px',
                  padding: '6px 12px',
                  justifyContent: 'space-between',
                  fontWeight: "bold",
                  marginRight: '12px',
                  display: 'inline-block'
                }}
              />
            </div>
            <div className="payment-content-right-button">
              <input type="text" placeholder="Mã cộng tác viên" />
              <ButtonBlack
                className="fas fa-check" 
                icon=''
                style={{
                  width: '',
                  height: '40px',
                  borderRadius: '0px',
                  fontSize: '16px',
                  padding: '6px 12px',
                  justifyContent: 'space-between',
                  fontWeight: "bold",
                  marginRight: '12px',
                  display: 'inline-block'
                }}
              />
              
            </div>

            {/* Employee Code */}
            <div className="payment-content-right-mnv">
              <select>
                <option value="">Chọn mã nhân viên thân thiết</option>
                <option value="1">absasdaádasssd</option>
                <option value="2">abấdsadd</option>
                <option value="3">abádasd</option>
                <option value="4">absasdasd</option>
              </select>
            </div>

            {/* Summary Table */}
            <div className="payment-content-right-bottom">
              <table>
                <thead>
                  <tr>
                    <th>Tên sản phẩm</th>
                    <th>Giảm giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Áo polo kẻ ngang MS 112233</td>
                    <td>- 30%</td>
                    <td>1</td>
                    <td>
                      <p>590.000<sup>Đ</sup></p>
                    </td>
                  </tr>
                  <tr>
                    <td>Áo thun kẻ ngang MS 112233</td>
                    <td>- 30%</td>
                    <td>1</td>
                    <td>
                      <p>123.456<sup>Đ</sup></p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }} colSpan="3">
                      Tổng
                    </td>
                    <td style={{ fontWeight: "bold" }}>
                      700.456<sup>Đ</sup>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="payment-content-right-payment">
          <ButtonWhite
            className="" 
            label='TIẾP TỤC THANH TOÁN'
            style={{
              width: '',
              height: '40px',
              borderRadius: '0px',
              fontSize: '16px',
              padding: '6px 12px',
              justifyContent: 'space-between',
              fontWeight: "bold",
              marginRight: '12px',
              display: 'inline-block'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Payment;
