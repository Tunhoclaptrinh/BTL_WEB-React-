import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import "D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css";

const Product = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    // Dữ liệu sản phẩm
    const products = [
      { 
        id: 1, 
        name: "ĐẦM ÔM HỌA TIẾT MS12345", 
        price: "60.000", 
        image: "/images/sp1.webp", 
        description: "Chi tiết sản phẩm 1", 
        color: "Xanh cổ vịt nhạt",
        sizes: ["S", "M", "L", "XL"],
      },
      { 
        id: 2, 
        name: "ÁO THUN CỔ TRÒN MS67890", 
        price: "490.000", 
        image: "/images/sp1.webp", 
        description: "Chi tiết sản phẩm 2", 
        color: "Xanh cổ vịt nhạt",
        sizes: ["S", "M", "L", "XL", "XXL"],
      },

      { 
        id: 3, 
        name: "ÁO THUN CỔ TRÒN MS67890", 
        price: "490.000", 
        image: "/images/sp1.webp", 
        description: "Chi tiết sản phẩm 2", 
        color: "Xanh cổ vịt nhạt",
        sizes: ["S", "M", "L", "XL", "XXL"],
      },
      { 
        id: 4, 
        name: "ÁO THUN CỔ TRÒN MS67890", 
        price: "490.000", 
        image: "/images/sp1.webp", 
        description: "Chi tiết sản phẩm 2", 
        color: "Xanh cổ vịt nhạt",
        sizes: ["S", "M", "L", "XL", "XXL"],
      },
    ];
  
    // Tìm sản phẩm tương ứng
    const product = products.find((p) => p.id === parseInt(productId));
  
    if (!product) {


      return (
      
      
      
      <div className="product">
            <div className= "product-content"> 
                Product not found  <br></br>
                Product not found  <br></br>
                Product not found  <br></br>
                Product not found  <br></br>
                Product not found  <br></br>

                Product not found  <br></br>
                Product not found  <br></br>
            </div>
        </div>



        
      );
    }
    // Xử lý khi nhấn nút MUA HÀNG
  const handleAddToCart = () => {
    navigate("/cart", { state: { product } });
  };
  
  





  return (
    <>
      <section className="product">
            <div className="product-top row">
                <p>Home</p> <span>&#10230;</span> <p>Nữ</p> <span>&#10230;</span> <p>Hàng nữ mới về</p>
                <span>&#10230;</span> <p>Áo cổ tròn</p>
            </div>

            <div className= "product-content"> 
                <div className="product-content-left row zoom">
                    <div className="product-content-left-large-img">
                        <img id="productImg" src={product.image} alt={product.name} />
                    </div>
                    <div className="product-content-left-small-img">
                        <img src={product.image} alt="Small 1" />
                        <img src={product.image} alt="Small 2" />
                        {/* <img src="./images/sp1.2.webp" alt="Small 3" />
                        <img src="./images/sp1.3.webp" alt="Small 4" /> */}
                    </div>
                </div>
                
                <div className="product-content-right">
                    <div className="product-content-right-name">
                        <h1>{product.name}</h1>
                        {/* <h1>Áo thun cổ tròn MS12345</h1> */}
                        <p>MSP: SP12345</p>
                    </div>
                    <div className="product-content-right-price">
                        <p className="price">{product.price}<sup>Đ</sup></p>
                    </div>
                    <div className="product-content-right-color">
                        <p>
                        <span style={{ fontWeight: "bold" }}>Màu sắc</span>: {product.color}{" "}
                        <span style={{ color: "red" }}>*</span>
                        </p>
                        <div className="product-content-right-color-img">
                        <img src="./images/color1.png" alt="Color Option" />
                        </div>
                    </div>
                    <div className="product-content-right-size">
                        <p>Size:</p>
                        <div className="size">
                            {product.sizes.map((size) => (
                                <span key={size}>{size}</span>
                            ))}

                        {/* <div className="size">
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span> */}
                        </div>
                    </div>
                    <div className="product-content-right-quantity">
                        <p>Số lượng:</p>
                        <input type="number" min="0" defaultValue="1" />
                    </div>
                    <p style={{ color: "red" }}>Vui lòng chọn size *</p>
                    <div className="product-content-right-button">
                        <button onClick={handleAddToCart}>
                        <i className="fas fa-shopping-cart"></i>
                        <p>MUA HÀNG</p>
                        </button>
                        <button>
                        <p>TÌM TẠI CỬA HÀNG</p>
                        </button>
                    </div>
                    <div className="product-content-right-icon">
                        <div className="product-content-right-icon-item">
                        <i className="fas fa-phone-alt"></i>
                        <p>Phone</p>
                        </div>
                        <div className="product-content-right-icon-item">
                        <i className="fas fa-comments"></i>
                        <p>Chat</p>
                        </div>
                        <div className="product-content-right-icon-item">
                        <i className="fas fa-envelope"></i>
                        <p>Mail</p>
                        </div>
                    </div>
                    <div className="product-content-right-qr">
                        <img src="./images/qrcode.png" alt="QR Code" />
                    </div>
                    <div className="product-content-right-bottom">
                        <div className="product-content-right-bottom-top">
                        <button>&#8744;</button>
                        </div>
                        <div className="product-content-right-bottom-content-large">
                        <div className="product-content-right-bottom-content-tittle row">
                            <div className="product-content-right-bottom-content-tittle-item detail">
                            <p>Chi tiết</p>
                            </div>
                            <div className="product-content-right-bottom-content-tittle-item protect">
                            <p>Bảo quản</p>
                            </div>
                            <div className="product-content-right-bottom-content-tittle-item">
                            <p>Tham khảo size</p>
                            </div>
                        </div>
                        <div className="product-content-right-bottom-content">
                            <div className="product-content-right-bottom-content-detail">
                            <p>
                                - Nếu như Cotton là ông vua chất liệu cho mùa hè với tính ưu việt về mức độ
                                thoáng mát, thấm hút mồ hôi thì META ICE COTTON lại là phiên bản nâng cấp với
                                nhiều tính năng vượt trội hơn thế nữa...
                            </p>
                            </div>
                            <div className="product-content-right-bottom-content-protect">
                            <p>
                                Chi tiết bảo quản sản phẩm: <br />
                                * Các sản phẩm thuộc dòng cao cấp (Senora) và áo khoác...
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      <section className="product-related">
        <div className="product-related-tittle">
          <p>Sản phẩm liên quan</p>
        </div>
        {/* <div className="product-content row">
          {Array(5)
            .fill(null)
            .map((_, idx) => (
              <div className="product-related-item" key={idx}>
                <img src="./images/sp1.3.webp" alt={`Related Product ${idx + 1}`} />
                <h1>Áo thun cổ tròn</h1>
                <p>
                  490.000<sup>Đ</sup>
                </p>
              </div>
            ))}
        </div> */}
        <div className="product-content row">
          {products
            .filter((p) => p.id !== product.id)
            .map((relatedProduct) => (
              <div className="product-related-item" key={relatedProduct.id}>
                <img src={relatedProduct.image} alt={relatedProduct.name} />
                <h1>{relatedProduct.name}</h1>
                <p>
                  {relatedProduct.price}
                  <sup>Đ</sup>
                </p>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Product;
