import React, { useRef, useEffect,useState  } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ButtonWhite from '../components/Button/ButtonWhite';
import ButtonYellow from '../components/Button/ButtonYellow';
import axios from "axios";

import "D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css";
import ProductRelated from "./ProductRelated/ProductRelated";
import Header from "../components/Header/Header";


const Product = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

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
    // const products = [
    //   { 
    //     id: 1, 
    //     name: "ĐẦM ÔM HỌA TIẾT MS12345", 
    //     price: "60.000", 
    //     image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"],
    //     description: "Chi tiết sản phẩm 1", 
    //     color: "Xanh cổ vịt nhạt",
    //     sizes: ["S", "M", "L", "XL"],
    //   },
    //   { 
    //     id: 2, 
    //     name: "ÁO THUN CỔ TRÒN MS67890", 
    //     price: "490.000", 
    //     image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"],
    //     description: "Chi tiết sản phẩm 2", 
    //     color: "Xanh cổ vịt nhạt",
    //     sizes: ["S", "M", "L", "XL", "XXL"],
    //   },
  
    //   { 
    //     id: 3, 
    //     name: "ÁO THUN CỔ TRÒN MS67890", 
    //     price: "1.490.000", 
    //     image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"], 
    //     description: "Chi tiết sản phẩm 2", 
    //     color: "Xanh cổ vịt nhạt",
    //     sizes: ["S", "M", "L", "XL", "XXL"],
    //   },
    //   { 
    //     id: 4, 
    //     name: "ÁO THUN CỔ TRÒN MS67890", 
    //     price: "490.000", 
    //     image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"], 
    //     description: "Chi tiết sản phẩm 2", 
    //     color: "Xanh cổ vịt nhạt",
    //     sizes: ["S", "M", "L", "XL", "XXL"],
    //   },
  
    //   { 
    //     id: 5, 
    //     name: "ÁO THUN CỔ TRÒN MS67890", 
    //     price: "490.000", 
    //     image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"], 
    //     description: "Chi tiết sản phẩm 2", 
    //     color: "Xanh cổ vịt nhạt",
    //     sizes: ["S", "M", "L", "XL", "XXL"],
    //   },
    //   { 
    //     id: 6, 
    //     name: "ÁO THUN CỔ TRÒN MS67890", 
    //     price: "400.000", 
    //     image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"], 
    //     description: "Chi tiết sản phẩm 2", 
    //     color: "Xanh cổ vịt nhạt",
    //     sizes: ["S", "M", "L", "XL", "XXL"],
    //   },
    //   { 
    //     id: 7, 
    //     name: "ÁO THUN CỔ TRÒN MS67890", 
    //     price: "90.000", 
    //     image: ["/images/sp1.webp", "/images/sp1.2.webp","/images/sp1.3.webp"],
    //     description: "Chi tiết sản phẩm 2", 
    //     color: "Xanh cổ vịt nhạt",
    //     sizes: ["S", "M", "L", "XL", "XXL"],
    //   },
  
    // ];

    const [product, setProduct] = useState(null); // Dữ liệu sản phẩm
    const [loading, setLoading] = useState(true); // Trạng thái tải
    const [error, setError] = useState(null); // Trạng thái lỗi
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/products/${productId}`);
          // Chuyển đổi image từ chuỗi JSON thành mảng
          const productData = {
            ...response.data,
            sizes: JSON.parse(response.data.sizes || "[]"), // Chuyển đổi `sizes` thành mảng
            image: JSON.parse(response.data.image || "[]"),
          };
          setProduct(productData);
        } catch (err) {
          setError("Không thể tải thông tin sản phẩm.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchProduct();
    }, [productId]);


    if (loading) {
      return <div>Đang tải thông tin sản phẩm...</div>;
    }
  
    if (error) {
      return <div className="error-message">{error}</div>;
    }
  
    if (!product) {
      return 
      (<div className="product">
        <div className= "product-content"> 
            Không tìm thấy sản phẩm  <br></br>
            Không tìm thấy sản phẩm  <br></br>
            Không tìm thấy sản phẩm  <br></br>
            Không tìm thấy sản phẩm  <br></br>
            Không tìm thấy sản phẩm  <br></br>

            Không tìm thấy sản phẩm  <br></br>
            Không tìm thấy sản phẩm  <br></br>
        </div>
    </div>)

    }

  
    // Tìm sản phẩm tương ứng
    // const product = products.find((p) => p.id === parseInt(productId));

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
                    <div
                      className="product-image-zoom"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        id="productImg"
                        ref={productImgRef}
                        src={product.image[0]} // Hình ảnh đầu tiên
                        alt={product.name}
                        className="zoomable-image"
                      />
                    </div>

                    </div>
                    <div className="product-content-left-small-img">
                        {product.image.slice(1).map((img, index) => (
                          <img key={index} src={img} alt={`Hình ${index + 2}`} />
                        ))}
                    </div>
                </div>
                
                <div className="product-content-right">
                    <div className="product-content-right-name">
                        <h1>{product.name}</h1>
                        {/* <h1>Áo thun cổ tròn MS12345</h1> */}
                        {/* <p>MSP: SP12345</p> */}
                    </div>
                    <div className="product-content-right-price">
                        <p style={{color: "red"}} className="price">{product.price}<sup>Đ</sup></p>
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
                            {/* {product.sizes.map((size) => (
                                <span key={size}>{size}</span>
                            ))} */}
                            {product.sizes.map((size, index) => (
                            <span key={index}>{size}</span>
                          ))}
                        </div>
                    </div>
                    <div className="product-content-right-quantity">
                        <p>Số lượng:</p>
                        <input type="number" min="0" defaultValue="1" />
                    </div>
                    <p style={{ color: "red" }}>Vui lòng chọn size *</p>
                    <div className="product-content-right-button row">
                        

                        <ButtonWhite
                          className="" 
                          onClick={handleAddToCart}
                          icon='fas fa-shopping-cart'
                          label=' - MUA HÀNG'
                          style={{
                            width: '190px',
                            height: '40px',
                            borderRadius: '0px',
                            fontSize: '14px',
                            padding: '6px 12px',
                            justifyContent: 'space-between',
                            marginRight: '12px',
                            display: 'inline-block',
                            margin: '40px 40px 40px 0',

                          }}
                        />


                        {/* <button>
                        <p>THÊM VÀO GIỎ HÀNG</p>
                        </button> */}

                        <ButtonYellow
                          className="" 
                          onClick={handleAddToCart}
                          label='THÊM VÀO GIỎ HÀNG'
                          style={{
                            width: '190px',
                            height: '40px',
                            borderRadius: '0px',
                            fontSize: '14px',
                            padding: '6px 12px',
                            justifyContent: 'space-between',
                            marginRight: '12px',
                            display: 'inline-block',
                            margin: '40px 40px 40px 12px',

                          }}
                        />  
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
                              {product.description}
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
      <ProductRelated
        title="Sản phẩm liên quan"
        categoryId={product.category + ""}
        productId = {product.id +""} // Truyền danh mục hiện tại
      />
      </section>

    </>
  );
};

export default Product;
