import React from "react";
import { Link, useNavigate } from "react-router-dom";
import 'D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css';
import ButtonWhite from '../components/Button/ButtonWhite';



const Delivery = () => {
    const navigate = useNavigate(); // Initialize the navigate function

  // Handle the button click to navigate to the payment page
    const handleCheckout = () => {
    navigate("/payment"); // Navigate to the payment page
  };
  return (
    <section className="delivery">
      <div className="container">
        <div className="delivery-top-wrap-status">
          <div className="delivery-top-status">
            <div className="cart-top-cart-status cart-top-item-status">
              <i>Cart</i>
            </div>
            <div className="delivery-top-address-status delivery-top-item-status">
              <i>Delivery</i>
            </div>
            <div className="delivery-top-payment-status delivery-top-item-status">
              <i>Payment</i>
            </div>
          </div>
        </div>
        <div className="delivery-top-wrap">
          <div className="delivery-top">
            <div className="cart-top-cart cart-top-item">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="delivery-top-address delivery-top-item">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="delivery-top-payment delivery-top-item">
              <i className="fas fa-money-check-alt"></i>
            </div>
          </div>
        </div>
        <div>
          <div className="delivey-content row">
            <div className="delivery-content-left">
              <p>Vui lòng chọn địa chỉ giao hàng</p>
              <div className="delivery-content-left-login row">
                <i className="fas fa-sign-in-alt"></i>
                <p>Đăng Nhập (nếu bạn có tài khoản của NguynTUN)</p>
              </div>
              <div className="delivery-content-left-khachle row">
                <input name="Typeofcustomer" type="radio" defaultChecked />
                <p>
                  <span style={{ fontWeight: "bold" }}> Khách lẻ </span>(nếu bạn không muốn lưu lại thông tin)
                </p>
              </div>
              <div className="delivery-content-left-dangky row">
                <input name="Typeofcustomer" type="radio" />
                <p>
                  <span style={{ fontWeight: "bold" }}> Đăng ký </span>(nếu bạn muốn lưu lại thông tin)
                </p>
              </div>
              <div className="delivery-content-left-input-top row">
                <div className="delivery-content-left-input-top-item">
                  <label>Họ và tên <span style={{ color: "red" }}>*</span></label>
                  <input type="text" />
                </div>
                <div className="delivery-content-left-input-top-item">
                  <label>Số điện thoại <span style={{ color: "red" }}>*</span></label>
                  <input type="text" />
                </div>
                <div className="delivery-content-left-input-top-item">
                  <label>Tỉnh/TP <span style={{ color: "red" }}>*</span></label>
                  <input type="text" />
                </div>
                <div className="delivery-content-left-input-top-item">
                  <label>Quận/Huyện <span style={{ color: "red" }}>*</span></label>
                  <input type="text" />
                </div>
              </div>
              <div className="delivery-content-left-input-bottom">
                <div className="delivery-content-left-input-bottom-item">
                  <label>Phường Xã <span style={{ color: "red" }}>*</span></label>
                  <input type="text" />
                </div>
                <div className="delivery-content-left-input-bottom-item">
                  <label>Địa chỉ <span style={{ color: "red" }}>*</span></label>
                  <input type="text" />
                </div>
                <div className="delivery-content-left-input-bottom-item">
                  <label>Tin nhắn</label>
                  <input type="text" placeholder="Lưu ý cho người bán/giao hàng" />
                </div>
              </div>
              <div className="delivery-content-left-button row">
                <a href="/cart">
                  <span>&#171;</span>
                  <p> Quay lại giỏ hàng</p>
                </a>
                <Link to= '/payment'>
                  <ButtonWhite 
                    className="" 
                    label='THANH TOÁN VÀ GIAO HÀNG'
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
                  /></Link>
              </div>
            </div>
            <div className="delivery-content-right">
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
                    <td style={{ fontWeight: "bold" }} colSpan="3">
                      123.456<sup>Đ</sup>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }} colSpan="3">
                      Thuế VAT
                    </td>
                    <td style={{ fontWeight: "bold" }} colSpan="3">
                      12.456<sup>Đ</sup>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }} colSpan="3">
                      Tổng tiền hàng
                    </td>
                    <td style={{ fontWeight: "bold" }} colSpan="3">
                      700.456<sup>Đ</sup>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
