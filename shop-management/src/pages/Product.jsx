import React, { useRef, useEffect,useState  } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css";

const Product = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    // const zoomLensRef = useRef(null);
    // const zoomResultRef = useRef(null);
    const productImgRef = useRef(null);

    const [activeTab, setActiveTab] = useState("detail"); // "detail" hoặc "protect"
    const [isExpanded, setIsExpanded] = useState(false); // Trạng thái của phần mở rộng

  // Hàm xử lý chuyển đổi tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Hàm xử lý bật/tắt phần mở rộng
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

    // Dữ liệu sản phẩm
    const products = [
      { 
        id: 1, 
        name: "ĐẦM ÔM HỌA TIẾT MS12345", 
        price: "60.000", 
        image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"],
        description: "Chi tiết sản phẩm 1", 
        color: "Xanh cổ vịt nhạt",
        sizes: ["S", "M", "L", "XL"],
      },
      { 
        id: 2, 
        name: "ÁO THUN CỔ TRÒN MS67890", 
        price: "490.000", 
        image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"],
        description: "Chi tiết sản phẩm 2", 
        color: "Xanh cổ vịt nhạt",
        sizes: ["S", "M", "L", "XL", "XXL"],
      },

      { 
        id: 3, 
        name: "ÁO THUN CỔ TRÒN MS67890", 
        price: "490.000", 
        image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"],

        description: "Chi tiết sản phẩm 2", 
        color: "Xanh cổ vịt nhạt",
        sizes: ["S", "M", "L", "XL", "XXL"],
      },
      { 
        id: 4, 
        name: "ÁO THUN CỔ TRÒN MS67890", 
        price: "490.000", 
        image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"],

        description: "Chi tiết sản phẩm 2", 
        color: "Xanh cổ vịt nhạt",
        sizes: ["S", "M", "L", "XL", "XXL"],
      },
    ];
  
    // Tìm sản phẩm tương ứng
    const product = products.find((p) => p.id === parseInt(productId));
  //   // Hàm xử lý zoom
  // useEffect(() => {
  //   const handleZoom = () => {
  //     const img = productImgRef.current;
  //     const lens = zoomLensRef.current;
  //     const result = zoomResultRef.current;

  //     const cx = result.offsetWidth / lens.offsetWidth;
  //     const cy = result.offsetHeight / lens.offsetHeight;

  //     result.style.backgroundImage = `url(${img.src})`;
  //     result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

  //     const getCursorPos = (e) => {
  //       const rect = img.getBoundingClientRect();
  //       const x = e.pageX - rect.left - window.pageXOffset;
  //       const y = e.pageY - rect.top - window.pageYOffset;
  //       return { x, y };
  //     };

  //     const moveLens = (e) => {
  //       e.preventDefault();
  //       const pos = getCursorPos(e);
  //       let x = pos.x - lens.offsetWidth / 2;
  //       let y = pos.y - lens.offsetHeight / 2;

  //       if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
  //       if (x < 0) x = 0;
  //       if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;
  //       if (y < 0) y = 0;

  //       lens.style.left = `${x}px`;
  //       lens.style.top = `${y}px`;
  //       result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
  //     };

  //     lens.addEventListener("mousemove", moveLens);
  //     img.addEventListener("mousemove", moveLens);
  //     lens.addEventListener("touchmove", moveLens);
  //     img.addEventListener("touchmove", moveLens);
  //   };

  //   if (product) {
  //     handleZoom();
  //   }
  // }, [product]);

  const handleMouseMove = (e) => {
    const img = productImgRef.current;
    const rect = img.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2)"; // Phóng to 2x
  };

  const handleMouseLeave = () => {
    const img = productImgRef.current;
    img.style.transform = "scale(1)"; // Quay lại kích thước ban đầu
    img.style.transformOrigin = "center center";
  };

  
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
                <div className="product-content-left row">
                    <div className="product-content-left-large-img zoom">
                    {/* <img
                      id="productImg"
                      ref={productImgRef}
                      src={product.image}
                      alt={product.name}
                    /> */}
                    <div
                      className="product-image-zoom"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        id="productImg"
                        ref={productImgRef}
                        src={product.image[0]}
                        alt={product.name}
                        className="zoomable-image"
                      />
                    </div>
                    {/* <div ref={zoomLensRef} className="img-zoom-lens"></div>
                    <div id="zoomResult" ref={zoomResultRef} className="zoom-result"></div> */}
                    </div>
                    <div className="product-content-left-small-img">
                        <img src={product.image[1]} alt="Small 1" />
                        <img src={product.image[2]} alt="Small 2" />
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
                        <img src="/images/color1.png" alt="Color Option" />
                        </div>
                    </div>
                    <div className="product-content-right-size">
                        <p>Size:</p>
                        <div className="size">
                            {product.sizes.map((size) => (
                                <span key={size}>{size}</span>
                            ))}
                        </div>
                    </div>
                    <div className="product-content-right-quantity">
                        <p>Số lượng:</p>
                        <input type="number" min="0" defaultValue="1" />
                    </div>
                    <p style={{ color: "red" }}>Vui lòng chọn size *</p>
                    <div className="product-content-right-button row">
                        <button onClick={handleAddToCart}>
                        <i className="fas fa-shopping-cart"></i>
                        <p>MUA HÀNG</p>
                        </button>
                        <button>
                        <p>THÊM VÀO GIỎ HÀNG</p>
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
                        <img src="/images/qrcode.png" alt="QR Code" />
                    </div>
                    <div className="product-content-right-bottom">
                    <div className="product-content-right-bottom-top">
                      <button onClick={toggleExpand}>
                        {isExpanded ? "−" : "+"}
                      </button>
                    </div>

                    <div
                      className={`product-content-right-bottom-content-large ${
                        isExpanded ? "activeB" : ""
                      }`}
                    >
                      <div className="product-content-right-bottom-content-tittle row">
                        <div
                          className={`product-content-right-bottom-content-tittle-item detail ${
                            activeTab === "detail" ? "active" : ""
                          }`}
                          onClick={() => handleTabChange("detail")}
                        >
                          <p>Chi tiết</p>
                        </div>
                        <div
                          className={`product-content-right-bottom-content-tittle-item protect ${
                            activeTab === "protect" ? "active" : ""
                          }`}
                          onClick={() => handleTabChange("protect")}
                        >
                          <p>Bảo quản</p>
                        </div>
                        <div className="product-content-right-bottom-content-tittle-item">
                          <p>Tham khảo size</p>
                        </div>
                      </div>

                      <div className="product-content-right-bottom-content">
                        {activeTab === "detail" && (
                          <div className="product-content-right-bottom-content-detail">
                            <p>
                              - Nếu như Cotton là ông vua chất liệu cho mùa hè với tính ưu việt về mức độ
                              thoáng mát, thấm hút mồ hôi thì META ICE COTTON lại là phiên bản nâng cấp với
                              nhiều tính năng vượt trội hơn thế nữa...
                            </p>
                          </div>
                        )}
                        {activeTab === "protect" && (
                          <div className="product-content-right-bottom-content-protect">
                            <p>
                              Chi tiết bảo quản sản phẩm: <br />
                              * Các sản phẩm thuộc dòng cao cấp (Senora) và áo khoác...
                            </p>
                          </div>
                        )}
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
                <img src={relatedProduct.image[0]} alt={relatedProduct.name} />
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
