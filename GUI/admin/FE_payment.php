<?php
include "FE_header.php";

?>


<!----------------------- payment ------------------------------------------------>

    
<section class="payment">
        <div class="container">
            <div class="payment-top-wrap-status">
                <div class="payment-top-status">
                    <div class="cart-top-cart-status cart-top-item-status">
                        <i>Cart</i>
                    </div>
                    <div class="delivery-top-address-status delivery-top-item-status">
                        <i>Delivery</i>
                    </div>
                    <div class="payment-top-payment-status payment-top-item-status">
                        <i>Payment</i>
                    </div>
                </div>
            </div>
            <div class="payment-top-wrap">
                <div class="payment-top">
                    <div class="cart-top-cart cart-top-item">
                        
                        <i class="fas fa-shopping-cart "></i>
                    </div>
                    <div class="delivery-top-address delivery-top-item">
                        <i class="fas fa-map-marker-alt "></i>
                    </div>
                    <div class="payment-top-payment payment-top-item">
                        <i class="fas fa-money-check-alt "></i>
                    </div>
                </div>
            </div>
            <div class="payment-content row">
                <div class="payment-content-left">
                    <div class="payment-content-left-method-delivery">
                        <p style="font-weight: bold;">Phương thức giao hàng</p>
                        <div class="payment-content-left-method-delivery-item">
                            <input checked type="radio" name="method-delivery">
                            <label for="">Giao hàng chuyển phát nhanh</label>
                        </div>
                    </div>
                    <div class="payment-content-left-method-payment">
                        <p style="font-weight: bold;">Phương thức thanh toán</p>
                        <p>"Mọi giao dịch được bảo mật và mã hóa. Thông tin thẻ tín dụng không bao giờ được lưu lại."</p>
                        <div class="payment-content-left-method-payment-item">
                            <input type="radio" name="method-payment">
                            <label for="">Thanh toán bằng thẻ tín dụng.</label>
                        </div>
                        <div class="payment-content-left-method-payment-item-img">
                            <img src="/GUI/image/vcb.webp" alt="">
                        </div>
                        <div class="payment-content-left-method-payment-item">
                            <input checked type="radio" name="method-payment">
                            <label for="">Thanh toán bằng thẻ ATM.</label>
                        </div>
                        <div class="payment-content-left-method-payment-item-img">
                            <img src="/GUI/image/vcb.webp" alt="">
                        </div>
                        <div class="payment-content-left-method-payment-item">
                            <input type="radio" name="method-payment">
                            <label for="">Thanh toán bằng MOMO.</label>
                        </div>
                        <div class="payment-content-left-method-payment-item-img">
                            <img src="/GUI/image/vcb.webp" alt="">
                        </div>
                        <div class="payment-content-left-method-payment-item">
                            <input type="radio" name="method-payment">
                            <label for="">Thu tiền tận nơi.</label>
                        </div>
                    </div>
                </div>
                <div class="payment-content-right">
                    <div class="payment-content-right-button">
                        <input type="text" placeholder="Mã giảm giá/quà tặng">
                        <button><i class="fas fa-check"></i></button>
                    </div>
                    <div class="payment-content-right-button">
                        <input type="text" placeholder="Mã cộng tác viên">
                        <button><i class="fas fa-check"></i></button>
                    </div>
                    <div class="payment-content-right-mnv">
                        <select name="" id="">
                            <option value="">Chọn mã nhân viên thân thiết</option>
                            <option value="">absasdaádasssd</option>
                            <option value="">abấdsadd</option>
                            <option value="">abádasd</option>
                            <option value="">absasdasd</option>
                        </select>
                    </div>
                    <div class="payment-content-right-bottom">
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
            <div class="payment-content-right-payment">
                <button>TIẾP TỤC THANH TOÁN</button>
            </div>
        </div>
    </section>



<?php
include "FE_footer.php";

?>