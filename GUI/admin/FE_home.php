<?php
include "FE_header.php";

?>

<section id="slider">
        <div class="aspect-ratio-169">
            <img src="/GUI/image/1.png" alt="Image 1">
            <img src="/GUI/image/2.png" alt="Image 2">
            <img src="/GUI/image/3.png" alt="Image 3">
            <img src="/GUI/image/4.png" alt="Image 4">
            <img src="/GUI/image/5.png" alt="Image 5">
            <img src="/GUI/image/6.png" alt="Image 6">
            <img src="/GUI/image/7.png" alt="Image 7">
        </div>
        <div class="slider-nav">
            <i onclick="prevSlide()"><a class="fas fa-chevron-left"></a></i>
            <i onclick="nextSlide()"><a class="fas fa-chevron-right"></a></i>
        </div>
        <div class="dot-container">
            <div class="dot active" onclick="currentSlide(1)"></div>
            <div class="dot" onclick="currentSlide(2)"></div>
            <div class="dot" onclick="currentSlide(3)"></div>
            <div class="dot" onclick="currentSlide(4)"></div>
            <div class="dot" onclick="currentSlide(5)"></div>
            <div class="dot" onclick="currentSlide(6)"></div>
            <div class="dot" onclick="currentSlide(7)"></div>
        </div>
        
    </section>
    <section class = "product_home">
        <div class="view_product">
            <h1>View Product</h1>
        </div>
            <div class="category-rigt-content row">
                <div class="category-right-content-item">
                    <img src="/GUI/image/sp1.webp" alt="">
                    <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                    <p>790.000<sup>Đ</sup></p>
                </div>
                <div class="category-right-content-item">
                    <img src="/GUI/image/sp1.webp" alt="">
                    <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                    <p>790.000<sup>Đ</sup></p>
                </div>
                <div class="category-right-content-item">
                    <img src="/GUI/image/sp1.webp" alt="">
                    <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                    <p>790.000<sup>Đ</sup></p>
                </div>
                <div class="category-right-content-item">
                    <img src="/GUI/image/sp1.webp" alt="">
                    <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                    <p>790.000<sup>Đ</sup></p>
                </div>
                <div class="category-right-content-item">
                    <img src="/GUI/image/sp1.webp" alt="">
                    <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                    <p>790.000<sup>Đ</sup></p>
                </div>
                <div class="category-right-content-item">
                    <img src="/GUI/image/sp1.webp" alt="">
                    <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                    <p>790.000<sup>Đ</sup></p>
                </div>
                <div class="category-right-content-item">
                    <img src="/GUI/image/sp1.webp" alt="">
                    <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                    <p>790.000<sup>Đ</sup></p>
                </div>
                <div class="category-right-content-item">
                    <img src="/GUI/image/sp1.webp" alt="">
                    <h1>ĐẦM ÔM HỌA TIẾT MS12345</h1>
                    <p>790.000<sup>Đ</sup></p>
                </div>
            </div>
        </div>
        <div class="view_all">
            <h1>View All</h1>
        </div>
    </section>


<?php
include "FE_footer.php";

?>