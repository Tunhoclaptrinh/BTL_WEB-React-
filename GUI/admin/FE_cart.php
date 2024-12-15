<?php
include "FE_header.php";

?>


<!----------------------- cart ------------------------------------------------>
<section class="cart">
        <div class="container">
            <div class="cart-top-wrap-status">
                <div class="cart-top-status">
                    <div class="cart-top-cart-status cart-top-item-status">
                        <i>Cart</i>
                    </div>
                    <div class="cart-top-address-status cart-top-item-status">
                        <i>Delivery</i>
                    </div>
                    <div class="cart-top-payment-status cart-top-item-status">
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
            <div class="cart-content row">
                <div class="cart-content-left">
                    <table>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Màu</th>
                            <th>Size</th>
                            <th>SL</th>
                            <th>Thành Tiền</th>
                            <th>Xóa</th>
                        </tr>
                        <tr>
                            <td><img src="/GUI/image/sp1.webp" alt=""></td>
                            <td><p>Quần sooc bò đen MS 23213123</p></td>
                            <td><img src="/image/color4.png" alt=""></td>
                            <td><p>XL</p></td>
                            <td><input type="number" value="2" min="0" onchange="updateCart()"></td>
                            <td>239,000 Đ</td>
                            <td><span class="remove-item" onclick="removeItem(this)">x</span></td>
                        </tr>
                        <tr>
                            <td><img src="/GUI/image/sp1.webp" alt=""></td>
                            <td><p>Quần bò đen MS 232123</p></td>
                            <td><img src="/image/color4.png" alt=""></td>
                            <td><p>XL</p></td>
                            <td><input type="number" value="2" min="0" onchange="updateCart()"></td>
                            <td>279,000 Đ</td>
                            <td><span class="remove-item" onclick="removeItem(this)">x</span></td>
                        </tr>
                        <tr>
                            <td><img src="/GUI/image/sp1.webp" alt=""></td>
                            <td><p>Quần bò đen MS 232123</p></td>
                            <td><img src="/image/color4.png" alt=""></td>
                            <td><p>XL</p></td>
                            <td><input type="number" value="2" min="0" onchange="updateCart()"></td>
                            <td>279,000 Đ</td>
                            <td><span class="remove-item" onclick="removeItem(this)">x</span></td>
                        </tr>
                    </table>
                </div>
                <div class="cart-content-right">
                    <div class="summary">
                        <table>
                            <tr>
                                <th colspan="2">TỔNG TIỀN TRONG GIỎ HÀNG</th>
                            </tr>
                            <tr>
                                <td>TỔNG SẢN PHẨM</td>
                                <td id="total-items">0</td>
                            </tr>
                            <tr>
                                <td>TỔNG TIỀN HÀNG</td>
                                <td id="subtotal">0 Đ</td>
                            </tr>
                            
                            <tr>
                                <td>VAT 10%</td>
                                <td id="tax">0 Đ</td>
                            </tr>
                            <tr>
                                <td>Phí vận chuyển</td>
                                <td id="shipping">0 Đ</td>
                            </tr>
                            <tr>
                                <td>TẠM TÍNH</td>
                                <td style="font-weight: bold;" id="total">0 Đ</td>
                            </tr>
                        
                        </table>
                    </div>
                    <div class="cart-content-right-text">
                        <p>Bạn sẽ được miễn phí vận chuyển khi đơn hàng của bạn có tổng giá trị trên <b style="color: red;">1.000.000 <sup>Đ</sup></b></p>
                        <p style="color: red; font-weight: bold;">Mua thêm <span style="font-size: large; font-weight: bold;">131.000 <sup>Đ</sup></span> để được miễn phí ship</p>
                    </div>
                    <div class="cart-content-right-button">
                        <button>TIẾP TỤC MUA SẮM</button>
                        <button>THANH TOÁN</button>
                    </div>
                    <div class="cart-content-right-login">
                        <p>Tài khoản NguynTUN</p>
                        <p>Hãy <a href=""> login</a> tài khoản của bạn để tích điểm thành viên </p>
                    </div>
                </div>
            </div>
        </div>
    </section>


<?php
include "FE_footer.php";

?>