import React, { useRef, useEffect,useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../components/contexts/UserContext";
import ButtonWhite from '../components/Button/ButtonWhite';
import ButtonYellow from '../components/Button/ButtonYellow';
import axios from "axios";
import "../styles/global.css";
import ProductRelated from "./ProductRelated/ProductRelated";


const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();


  const { user } = useContext(UserContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);


  const productImgRef = useRef(null);
  const [activeTab, setActiveTab] = useState("detail"); // "detail" hoặc "protect"
  const [isExpanded, setIsExpanded] = useState(false); // Trạng thái của phần mở rộng
  const [categories, setCategories] = useState([]); // State for categories
    

  const [product, setProduct] = useState(null); // Dữ liệu sản phẩm
  const [loading, setLoading] = useState(true); // Trạng thái tải
  const [error, setError] = useState(null); // Trạng thái lỗi
  // const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${productId}`);
        // Chuyển đổi image từ chuỗi JSON thành mảng
        const productData = {
          ...response.data,
          sizes: JSON.parse(response.data.sizes || "[]"), // Chuyển đổi `sizes` thành mảng
          image: JSON.parse(response.data.image || "[]"),
          colors: JSON.parse(response.data.colors || "[]"),
        };
        setProduct(productData);
      } catch (err) {
        setError("Không thể tải thông tin sản phẩm.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    // Fetch categories
    axios.get('http://localhost:3000/categories')
    .then(response => {
      setCategories(response.data); // Assuming the categories API returns a list of categories
    })
    .catch(error => {
      console.error("Error fetching categories:", error);
    });
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


    // Hàm xử lý chuyển đổi tab
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    // Hàm xử lý bật/tắt phần mở rộng
    const toggleExpand = () => {
      setIsExpanded((prev) => !prev);
    };

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

    const handleImageClick = (clickedIndex) => {
      setProduct((prevProduct) => {
        const newImages = [...prevProduct.image];
        [newImages[0], newImages[clickedIndex]] = [newImages[clickedIndex], newImages[0]];
        return {
          ...prevProduct,
          image: newImages,
        };
      });
    };

    const handleSizeSelect = (size) => {
      setSelectedSize(size);
      setError(""); // Clear any previous errors
    };

    const handleQuantityChange = (e) => {
      const value = parseInt(e.target.value) || 0;
      setQuantity(Math.max(1, value)); // Ensure quantity is at least 1
    };

    const handleColorSelect = (color) => {
      setProduct((prevProduct) => ({
          ...prevProduct,
          color,
      }));
  };
  

  const addToCart = async () => {
    console.log("User:", user);
    if (!user || !user.id) {
        navigate("/signin"); // Nếu không có người dùng, điều hướng đến trang đăng nhập
        return;
    }

    if (!selectedSize) {
        alert("Vui lòng chọn size trước khi thêm vào giỏ hàng");
        return;
    }

    try {
        const cartResponse = await axios.get(`http://localhost:3000/cart/${user.id}`);
        const existingCart = Array.isArray(cartResponse.data) ? cartResponse.data[0] : cartResponse.data;

        const cartItem = {
            productId: productId,
            quantity: quantity,
            size: selectedSize,
            color: product.color || "Không xác định"
        };

        if (existingCart) {
            // Giỏ hàng đã tồn tại
            const updatedItems = [...existingCart.items];
            const existingItemIndex = updatedItems.findIndex(
                item => item.productId === productId && item.size === selectedSize
            );

            if (existingItemIndex >= 0) {
                // Cập nhật số lượng sản phẩm nếu đã tồn tại
                updatedItems[existingItemIndex].quantity += quantity;
            } else {
                // Thêm sản phẩm mới vào giỏ hàng
                updatedItems.push(cartItem);
            }

            await axios.patch(`http://localhost:3000/cart/${existingCart.id}`, {
                items: updatedItems,
                updatedAt: new Date().toISOString()
            });
        } else {
            // Tạo giỏ hàng mới nếu chưa tồn tại
            await axios.post(`http://localhost:3000/cart`, {
                userId: user.id,
                color: product.color || "Không xác định",
                items: [cartItem],
                updatedAt: new Date().toISOString()
            });
        }

        alert("Sản phẩm đã được thêm vào giỏ hàng");
        navigate("/cart");
    } catch (error) {
        console.error("Error adding to cart:", error);
        alert("Có lỗi xảy ra khi thêm vào giỏ hàng. Vui lòng thử lại sau.");
    }
};

  
  
  
  
  return (
    <>
      <section className="product">
            <div className="product-top row">
            <p> 
            <a href="/home">Trang chủ</a>
            </p >
              <span>&#10230; </span>
            <p span> 
              <a href="/category">Danh mục</a> 
            </p> 
            <span>&#10230;</span> 
            <p> <a href="(categories.find(category => category.id === product.category)?.name )"></a>
              {categories.length > 0 && product.category !== undefined 
                ? categories.find(category => category.id === product.category)?.name || "Không xác định" 
                : "Không xác định"}
            </p>

            {/* {alert(categories.find(category => category.id === product.category)?.name )} */}
                <span>&#10230;</span> <p style={{ color: "#007bff"}}>{product ? product.name : 'none'}</p>
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
          {product.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hình ${index + 1}`}
              onClick={() => handleImageClick(index)} // Chuyển ảnh khi nhấn
              style={{
                cursor: "pointer",
                border: index === 0 ? "2px solid #007bff" : "none", // Viền cho ảnh lớn
              }}
            />
          ))}
        </div>
              </div>
                <div className="product-content-right">
                    <div className="product-content-right-name">
                        <h1>{product.name}</h1>
                        {/* <p>MSP: SP12345</p> */}
                    </div>
                    <div className="product-content-right-price">
                        <p style={{color: "red"}} className="price">{product.price}<sup>Đ</sup></p>
                    </div>
                    <div className="product-content-right-color">
  <p>
    <span style={{ fontWeight: "bold" }}>Màu sắc:</span>
    <span style={{ color: "red" }}>*</span>
  </p>
  <div className="product-content-right-color-img">
    {product.colors?.map((color, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          alignItems: "center",
          margin: "10px", // Khoảng cách giữa các màu
        }}
      >
        {/* Ô màu */}
        <div
          onClick={() => handleColorSelect(color)}
          style={{
            backgroundColor: color,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: product.color === color ? "3px solid #007bff" : "1px solid #ccc",
            cursor: "pointer",
            marginRight: "10px",
          }}
        ></div>
        {/* Tên màu */}
        <span
          style={{
            fontSize: "14px",
            color: product.color === color ? "#007bff" : "#333", // Làm nổi bật tên màu được chọn
            fontWeight: product.color === color ? "bold" : "normal",
          }}
        >
          {color}
        </span>
      </div>
    ))}
  </div>
</div>


                    <div className="product-content-right-size">
                        <p>Size:</p>
                        {/* <div className="size">
                            {product.sizes.map((size, index) => (
                            <span key={index}>{size}</span>
                          ))}
                        </div> */}
                        <div className="size">
                    {product.sizes.map((size, index) => (
                        <span 
                            key={index}
                            onClick={() => handleSizeSelect(size)}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: selectedSize === size ? '#007bff' : 'white',
                                color: selectedSize === size ? 'white' : 'black',
                                
                            }}
                        >
                            {size}
                        </span>
                    ))}
                </div>
                    </div>
                    <div className="product-content-right-quantity">
                        <p>Số lượng:</p>
                        <input 
                            type="number" 
                            min="1" 
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <p style={{ color: "red" }}>Vui lòng chọn size *</p>
                    <div className="product-content-right-button row">
                        <ButtonWhite
                          className="" 
                          onClick={addToCart}
                          icon='fas fa-shopping-cart'
                          label=' - MUA HÀNG'
                          style={{
                            width: '250px',
                            height: '50px',
                            borderRadius: '0px',
                            fontSize: '20px',
                            padding: '6px 12px',
                            justifyContent: 'space-between',
                            marginRight: '12px',
                            display: 'inline-block',
                            margin: '40px 40px 40px 0',

                          }}
                        />

                        <ButtonYellow
                          className="" 
                          onClick={addToCart}
                          label='THÊM VÀO GIỎ HÀNG'
                          style={{
                            width: '250px',
                            height: '50px',
                            borderRadius: '0px',
                            fontSize: '20px',
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
