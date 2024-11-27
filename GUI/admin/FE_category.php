<?php
include "FE_header.php";

?>


<!----------------------- Category ------------------------------------------------>

    <section class="category">
        <div class="container">
            <div class="category-top row">
                <p>Home</p> <span>&#10230; </span> <p>Nữ</p> <span>&#10230; </span> <p>Hàng nữ mới về</p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="category-left">
                    <ul>
                        <li class="category-left-li"><a href="#" >Nữ</a>
                            <ul>
                                <li><a href="">Hàng nữ mới về</a></li>
                                <li><a href="">Hàng nữ mới về 1</a></li>
                                <li><a href="">Hàng nữ mới về 2</a></li>
                                <li><a href="">Hàng nữ mới về 3</a></li>
                                <li><a href="">Hàng nữ mới về 4</a></li>
                            </ul>
                        </li>
                        <li class="category-left-li"><a href="#" >Nam</a>
                            <ul>
                                <li><a href="">Hàng nam mới về</a></li>
                                <li><a href="">Hàng nam mới về 1</a></li>
                                <li><a href="">Hàng nam mới về 2</a></li>
                                <li><a href="">Hàng nam mới về 3</a></li>
                                <li><a href="">Hàng nam mới về 4</a></li>
                            </ul></li>
                        <li class="category-left-li"><a href="#" >Trẻ em</a>
                        <li class="category-left-li"><a href="#" >Bộ sưu tập</a>
                        <li class="category-left-li"><a href="#" >Đồ bảo hộ</a>
                    </ul>
                </div>
                <div class="category-right row">
                    <div class="category-right-top-item">
                        <p>Hàng nữ mới về</p>
                    </div>
                    <!-- <div class="category-right-top-item">
                        <button><span>Bộ lọc</span><i class="fas fa-sort-down"></i></button>
                    </div> -->
                    <div class="category-right-top-item">
                        <select id="filter" onchange="filterProducts()">
                            <option value=""><span>Bộ lọc</span><i class="fas fa-sort-down"></i></option>
                            <option value="below">Dưới 1,000,000</option>
                            <option value="above">Trên 1,000,000</option>
                        </select>
                    </div>
                    <div class="category-right-top-item">
                        <select id="sort" onchange="sortProducts()">
                            <option value="">Sắp xếp</option>
                            <option value="asc">Giá thấp đến cao</option>
                            <option value="desc">Giá cao đến thấp</option>
                        </select>
                    </div>
                    <div class="category-rigt-content row" id="products">
                        <div class="category-right-content-item">
                            <img src="/GUI/image/sp1.webp" alt="">
                            <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                            <p class="price">60.000<sup>Đ</sup></p>
                        </div>
                        <div class="category-right-content-item">
                            <img src="/GUI/image/sp1.webp" alt="">
                            <h1>3ĐẦM ÔM HỌA TIẾT MS12345</h1>
                            <p class="price">790.000<sup>Đ</sup></p>
                        </div>
                        <div class="category-right-content-item">
                            <img src="/GUI/image/sp1.webp" alt="">
                            <h1>5ĐẦM ÔM HỌA TIẾT MS12345</h1>
                            <p class="price">890.000<sup>Đ</sup></p>
                        </div>
                        <div class="category-right-content-item">
                            <img src="/GUI/image/sp1.webp" alt="">
                            <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                            <p class="price">990.000<sup>Đ</sup></p>
                        </div>
                        <div class="category-right-content-item">
                            <img src="/GUI/image/sp1.webp" alt="">
                            <h1>ĐT-Shirt Nữ Dáng Rộng In Ignite Bột Ngô</h1>
                            <p class="price">1.090.000<sup>Đ</sup></p>
                        </div>
                        <div class="category-right-content-item">
                            <img src="/GUI/image/sp1.webp" alt="">
                            <h1>ĐÁo Thun Nữ Vải Rib Cơ Bản</h1>
                            <p class="price">690.000<sup>Đ</sup></p>
                        </div>
                        
                        <div class="category-right-content-item">
                            <img src="/GUI/image/sp1.webp" alt="">
                            <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                            <p class="price">790.000<sup>Đ</sup></p>
                        </div>
                        <div class="category-right-content-item">
                            <img src="/GUI/image/sp1.webp" alt="">
                            <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                            <p class="price">990.000<sup>Đ</sup></p>
                        </div>
                        <div class="category-right-content-item">
                            <img src="/GUI/image/sp1.webp" alt="">
                            <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                            <p class="price">190.000<sup>Đ</sup></p>
                        </div>
                        <div class="category-right-content-item">
                            <img src="/GUI/image/sp1.webp" alt="">
                            <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                            <p class="price">2.790.000<sup>Đ</sup></p>
                        </div>
                        <div class="category-right-content-item">
                            <img src="/GUI/image/sp1.webp" alt="">
                            <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                            <p class="price">3.790.000<sup>Đ</sup></p>
                        </div>
                        <div class="category-right-content-item">
                            <img src="/GUI/image/sp1.webp" alt="">
                            <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                            <p class="price">4.790.000<sup>Đ</sup></p>
                        </div>
                    </div>
                    <div class="category-right-bottom row">
                        <div class="category-right-bottom-items">
                            <p>Hiển thị 2<span>|</span> 4 sản phẩm</p>
                        </div>
                        <div class="category-right-bottom-items">
                            <p><span>&#171;<span>1 2 3 4 5</span>&#187;</span>Trang cuối</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

<?php
include "FE_footer.php";

?>