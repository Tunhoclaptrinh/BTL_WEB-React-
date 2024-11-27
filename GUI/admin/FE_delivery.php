<?php
include "FE_header.php";

?>

<!----------------------- delivery ------------------------------------------------>

    
<section class="delivery">
        <div class="container">
            <div class="delivery-top-wrap-status">
                <div class="delivery-top-status">
                    <div class="cart-top-cart-status cart-top-item-status">
                        <i>Cart</i>
                    </div>
                    <div class="delivery-top-address-status delivery-top-item-status">
                        <i>Delivery</i>
                    </div>
                    <div class="delivery-top-payment-status delivery-top-item-status">
                        <i>Payment</i>
                    </div>
                </div>
            </div>
            <div class="delivery-top-wrap">
                <div class="delivery-top">
                    <div class="cart-top-cart cart-top-item">
                        <i class="fas fa-shopping-cart "></i>
                    </div>
                    <div class="delivery-top-address delivery-top-item">
                        <i class="fas fa-map-marker-alt "></i>
                    </div>
                    <div class="delivery-top-payment delivery-top-item">
                        <i class="fas fa-money-check-alt "></i>
                    </div>
                </div>
            </div>
            <div>
                <div class="delivey-content row">
                    <div class="delivery-content-left">
                        <p>Vui lòng chọn địa chỉ giao hàng</p>
                        <div class="delivery-content-left-login row">
                            <i class="fas fa-sign-in-alt "></i>
                            <p>Đăng Nhập (nếu bạn có tài khoản của NguynTUN)</p>
                        </div>
                        <div class="delivery-content-left-khachle row">
                            <input name="Typeofcustomer" type="radio" checked>
                            <p><span style="font-weight: bold;"> Khách lẻ </span>(nếu bạn không muốn lưu lại thông tin)</p>
                        </div>
                        <div class="delivery-content-left-dangky row">
                            <input name="Typeofcustomer" type="radio">
                            <p><span style="font-weight: bold;"> Đăng ký </span>(nếu bạn muốn lưu lại thông tin)</p>
                        </div>
                        <div class="delivery-content-left-input-top row">
                            <div class="delivery-content-left-input-top-item">
                                <label for="">Họ và tên <span style="color: red;">*</span></label>
                                <input type="text">
                            </div>
                            <div class="delivery-content-left-input-top-item">
                                <label for="">Số điện thoại <span style="color: red;">*</span></label>
                                <input type="text">
                            </div>
                            <div class="delivery-content-left-input-top-item">
                                <label for="">Tỉnh/TP <span style="color: red;">*</span></label>
                                <input type="text">
                            </div>
                            <div class="delivery-content-left-input-top-item">
                                <label for="">Quận/Huyện <span style="color: red;">*</span></label>
                                <input type="text">
                            </div>
                        </div>
                        <div class="delivery-content-left-input-bottom">
                            <div class="delivery-content-left-input-bottom-item">
                                <label for="">Phường Xã <span style="color: red;">*</span></label>
                                <input type="text">
                            </div>
                            <div class="delivery-content-left-input-bottom-item">
                                <label for="">Địa chỉ <span style="color: red;">*</span></label>
                                <input type="text">
                            </div>
                            <div class="delivery-content-left-input-bottom-item">
                                <label for="">Tin nhắn</label>
                                <input type="text" placeholder="Lưu ý cho người bán/giao hàng">
                            </div>
                        </div>
                        <div class="delivery-content-left-button row">
                            <a href=""> <span>&#171;</span><p> Quay lại giỏ hàng</p></a>
                            <button><p style="font-weight: bold;">THANH TOÁN VÀ GIAO HÀNG</p></button>
                        </div>
                    </div>
                    <div class="delivery-content-right">
                        <table>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Giảm giá</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                            </tr>
                            <tr>
                                <td>Áo polo kẻ ngang MS 112233</td>
                                <td>- 30%</td>
                                <td>1</td>
                                <td><p>590.000<sup>Đ</sup></p></td>
                            </tr>
                            <tr>
                                <td>Áo pthun kẻ ngang MS 112233</td>
                                <td>- 30%</td>
                                <td>1</td>
                                <td><p>123.456<sup>Đ</sup></p></td>
                            </tr>
                            <tr>
                                <td>Áo thun kẻ ngang MS 112233</td>
                                <td>- 30%</td>
                                <td>1</td>
                                <td><p>123.456<sup>Đ</sup></p></td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold;" colspan="3">Tổng</td>
                                <td style="font-weight: bold;" colspan="3">123.456<sup>Đ</sup></p></td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold;" colspan="3">Thuế VAT</td>
                                <td style="font-weight: bold;" colspan="3">12.456<sup>Đ</sup></p></td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold;" colspan="3">Tổng tiền hàng</td>
                                <td style="font-weight: bold;" colspan="3">700.456<sup>Đ</sup></p></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>


<?php
include "FE_footer.php";

?>