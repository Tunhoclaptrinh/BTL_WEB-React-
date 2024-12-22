import React, { useState, useEffect  } from 'react';
import '../ProductManagement/ProductManagement.css';
import axios from 'axios';

function ProductManagement() {
  const [clothes, setClothes] = useState([]); // Danh sách quần áo
  const [categories, setCategories] = useState([]); // Danh mục hàng hóa
  const [editingCloth, setEditingCloth] = useState(null); // Sản phẩm đang chỉnh sửa
  const [search, setSearch] = useState(''); // Từ khóa tìm kiếm
  const [newCloth, setNewCloth] = useState({
    name: '',
    quantity: '',
    price: '',
    sizes: '',
    material: '',
    description: '',
    image: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái modal
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const itemsPerPage = 8; // Số sản phẩm trên mỗi trang

  // Lấy danh sách quần áo từ API
  // Lấy danh sách quần áo từ API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setClothes(response.data);
      } catch (error) {
        console.error('Lỗi khi tải sản phẩm:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Lỗi khi tải danh mục:', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  // Xử lý thêm sản phẩm mới
  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:3000/products', newCloth);
      alert('Thêm sản phẩm thành công!');
      setIsModalOpen(false);
      setNewCloth({
        name: '',
        quantity: '',
        price: '',
        sizes: '',
        material: '',
        description: '',
        image: '',
        category: '',
      });
      const response = await axios.get('http://localhost:3000/products');
      setClothes(response.data);
    } catch (error) {
      console.error('Lỗi khi thêm sản phẩm:', error);
    }
  };

  // Xử lý lưu chỉnh sửa sản phẩm
  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3000/products/${editingCloth.id}`, editingCloth);
      alert('Cập nhật sản phẩm thành công!');
      setEditingCloth(null);
      setIsModalOpen(false);
      const response = await axios.get('http://localhost:3000/products');
      setClothes(response.data);
    } catch (error) {
      console.error('Lỗi khi cập nhật sản phẩm:', error);
    }
  };

  // Xử lý xóa sản phẩm
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      alert('Xóa sản phẩm thành công!');
      const response = await axios.get('http://localhost:3000/products');
      setClothes(response.data);
    } catch (error) {
      console.error('Lỗi khi xóa sản phẩm:', error);
    }
  };

  // Xử lý chỉnh sửa sản phẩm
  const handleEdit = (cloth) => {
    setEditingCloth({ ...cloth });
    setIsModalOpen(true);
  };

  // Tính toán các sản phẩm hiển thị trên trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clothes.slice(indexOfFirstItem, indexOfLastItem);

  // Tạo các nút điều hướng trang
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(clothes.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const safeParseJSON = (str) => {
    try {
      return JSON.parse(str);
    } catch (e) {
      return []; // Trả về mảng rỗng nếu không thể chuyển đổi
    }
  };
  


  return (
    <div className="product-management">
      
      <div style={{ display: 'flex', justifyContent:'space-between' }}>
      <div className="search-bar" >
        <label htmlFor="search">Tìm kiếm:</label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm kiếm quần áo..."
        />
        </div>
      <button className="add" onClick={() => setIsModalOpen(true)}>Thêm sản phẩm</button>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
      </div>

      

      <table>
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Tên</th>
            <th>Thông tin</th>
            <th>Mô tả</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
  {currentItems
    .filter((cloth) => cloth.name.toLowerCase().includes(search.toLowerCase()))
    .map((cloth) => (
      <tr key={cloth.id}>
        <td>
          <img
            src={
              Array.isArray(safeParseJSON(cloth.image)) && safeParseJSON(cloth.image).length > 0
                ? safeParseJSON(cloth.image)[0] // Chuyển chuỗi thành mảng và lấy hình đầu tiên
                : 'https://via.placeholder.com/90x100' // Hiển thị ảnh mặc định nếu không có hình ảnh
            }
            alt={cloth.name}
            style={{ width: '90px', height: '100px' }}
          />
        </td>
        <td>{cloth.name}</td>
        <td>
          <ul>
            <li>Số lượng tồn kho: {cloth.quantity}</li>
            <li>Giá: {cloth.price}</li>
            <li>Kích cỡ: {cloth.sizes}</li>
            <li>Chất liệu: {cloth.material}</li>
            <li>
              Danh mục: 
              {categories.length > 0 && cloth.category 
                ? categories.find((cat) => cat.id === cloth.category)?.name || "Không xác định" 
                : "Đang tải..."}
            </li>
            
          </ul>
        </td>
        <td>{cloth.description}</td>
        <td>
          <button className="edit" onClick={() => handleEdit(cloth)}>
            Sửa
          </button>
          <button className="delete" onClick={() => handleDelete(cloth.id)}>
            Xóa
          </button>
        </td>
      </tr>
    ))}
</tbody>

      </table>


      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h3>{editingCloth ? 'Sửa thông tin quần áo' : 'Thêm quần áo mới'}</h3>
            <label>
              Tên quần áo:
              <input
                type="text"
                value={editingCloth ? editingCloth.name : newCloth.name}
                onChange={(e) =>
                  editingCloth
                    ? setEditingCloth({ ...editingCloth, name: e.target.value })
                    : setNewCloth({ ...newCloth, name: e.target.value })
                }
              />
            </label>
            <br />

            <label>
              Danh mục:
              <select
                value={editingCloth ? editingCloth.category : newCloth.category}
                onChange={(e) =>
                  editingCloth
                    ? setEditingCloth({ ...editingCloth, category: e.target.value })
                    : setNewCloth({ ...newCloth, category: e.target.value })
                }
              >
                <option value="">Chọn danh mục</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>
            <br />


            <label>
              Số lượng:
              <input
                type="text"
                value={editingCloth ? editingCloth.quantity : newCloth.quantity}
                onChange={(e) =>
                  editingCloth
                    ? setEditingCloth({ ...editingCloth, quantity: e.target.value })
                    : setNewCloth({ ...newCloth, quantity: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              Giá:
              <input
                type="text"
                value={editingCloth ? editingCloth.price : newCloth.price}
                onChange={(e) =>
                  editingCloth
                    ? setEditingCloth({ ...editingCloth, price: e.target.value })
                    : setNewCloth({ ...newCloth, price: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              Kích cỡ:
              <input
                type="text"
                value={editingCloth ? editingCloth.sizes : newCloth.sizes}
                onChange={(e) =>
                  editingCloth
                    ? setEditingCloth({ ...editingCloth, sizes: e.target.value })
                    : setNewCloth({ ...newCloth, sizes: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              Chất liệu:
              <input
                type="text"
                value={editingCloth ? editingCloth.material : newCloth.material}
                onChange={(e) =>
                  editingCloth
                    ? setEditingCloth({ ...editingCloth, material: e.target.value })
                    : setNewCloth({ ...newCloth, material: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              Mô tả:
              <input
                type="text"
                value={editingCloth ? editingCloth.description : newCloth.description}
                onChange={(e) =>
                  editingCloth
                    ? setEditingCloth({ ...editingCloth, description: e.target.value })
                    : setNewCloth({ ...newCloth, description: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              Hình ảnh:
              <input
                type="URL"
                value={editingCloth ? editingCloth.image : newCloth.image}
                onChange={(e) =>
                  editingCloth
                    ? setEditingCloth({ ...editingCloth, image: e.target.value })
                    : setNewCloth({ ...newCloth, image: e.target.value })
                }
              />
            </label>
            <br />
            <button
              style={{ backgroundColor: 'green', color: 'white', marginRight: '10px' }}
              onClick={editingCloth ? handleSave : handleAdd}
            >
              {editingCloth ? 'Lưu' : 'Thêm'}
            </button>
          </div>
        </div>
      )}

     
    </div>
  );
}

export default ProductManagement;