import React, { useState } from 'react';

function AddProduct() {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    productType: '',
    price: '',
    promotionPrice: '',
    description: '',
  });

  const [productImages, setProductImages] = useState([]);
  const [descriptionImages, setDescriptionImages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e, type) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (type === 'product') {
      setProductImages(files);
    } else {
      setDescriptionImages(files);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement product addition logic
    console.log('Product Data:', productData);
    console.log('Product Images:', productImages);
    console.log('Description Images:', descriptionImages);
  };

  return (
    <div className="admin-content-right-product-add">
      <h1>Thêm Sản Phẩm</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nhập tên sản phẩm <span style={{color: 'red'}}>*</span>
          <input 
            type="text" 
            name="name"
            placeholder="Nhập tên sản phẩm"
            value={productData.name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Chọn danh mục <span style={{color: 'red'}}>*</span>
          <select 
            name="category"
            value={productData.category}
            onChange={handleInputChange}
          >
            <option value="#">-- Chọn danh mục --</option>
            {/* Populate with actual categories */}
          </select>
        </label>

        <label>
          Chọn loại sản phẩm <span style={{color: 'red'}}>*</span>
          <select 
            name="productType"
            value={productData.productType}
            onChange={handleInputChange}
          >
            <option value="#">-- Chọn loại sản phẩm --</option>
            {/* Populate with actual product types */}
          </select>
        </label>

        <label>
          Giá sản phẩm <span style={{color: 'red'}}>*</span>
          <input 
            type="text" 
            name="price"
            placeholder="Giá sản phẩm"
            value={productData.price}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Giá khuyến mãi <span style={{color: 'red'}}>*</span>
          <input 
            type="text" 
            name="promotionPrice"
            placeholder="Giá khuyến mãi"
            value={productData.promotionPrice}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Mô tả sản phẩm <span style={{color: 'red'}}>*</span>
          <textarea 
            name="description"
            placeholder="Mô tả sản phẩm"
            value={productData.description}
            onChange={handleInputChange}
          ></textarea>
        </label>

        <label>
          Ảnh sản phẩm <span style={{color: 'red'}}>*</span>
          <input 
            multiple 
            type="file" 
            onChange={(e) => handleFileChange(e, 'product')}
          />
        </label>

        <label>
          Ảnh mô tả sản phẩm <span style={{color: 'red'}}>*</span>
          <input 
            multiple 
            type="file" 
            onChange={(e) => handleFileChange(e, 'description')}
          />
        </label>

        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default AddProduct;