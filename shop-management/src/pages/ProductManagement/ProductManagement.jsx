import React, { useState, useEffect  } from 'react';
import '../ProductManagement/ProductManagement.css';
import axios from 'axios';

function ProductManagement() {
  const [clothes, setClothes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingCloth, setEditingCloth] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState('');
  const [newCloth, setNewCloth] = useState({
    name: '',
    quantity: 0,
    price: 0,
    sizes: '',
    material: '',
    description: '',
    image: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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

  // Filter products by both category and search term
  const filteredClothes = clothes.filter((cloth) => {
    const matchesCategory = selectedCategory
      ? cloth.category === String(selectedCategory)
      : true;
    const matchesSearch = cloth.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination based on filtered items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredClothes.slice(indexOfFirstItem, indexOfLastItem);

  // Update page numbers based on filtered items
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredClothes.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:3000/products', newCloth);
      alert('Thêm sản phẩm thành công!');
      setIsModalOpen(false);
      setNewCloth({
        name: '',
        quantity: 0,
        price: 0,
        sizes: '',
        material: '',
        description: '',
        image: '',
        category: '',
        colors: [],
      });
      const response = await axios.get('http://localhost:3000/products');
      setClothes(response.data);
    } catch (error) {
      console.error('Lỗi khi thêm sản phẩm:', error);
    }
  };

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

  const handleEdit = (cloth) => {
    setEditingCloth({ ...cloth });
    setIsModalOpen(true);
  };

  const safeParseJSON = (str) => {
    try {
      return JSON.parse(str);
    } catch (e) {
      return [];
    }
  };

  return (
    <div className="product-management">
      <div className='tool-bar' style={{ display: 'flex', justifyContent:'space-between' }}>
        <div className="search-bar">
          <label htmlFor="search">Tìm kiếm:</label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm kiếm sản phẩm..."
          />
        </div>

        <button className="add" onClick={() => setIsModalOpen(true)}>Thêm sản phẩm</button>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="categoryFilter">Lọc theo danh mục:</label>
          <select
            id="categoryFilter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="">Tất cả</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

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
          {currentItems.map((cloth) => (
            <tr key={cloth.id}>
              <td>
                <img
                  src={
                    Array.isArray(safeParseJSON(cloth.image)) && safeParseJSON(cloth.image).length > 0
                      ? safeParseJSON(cloth.image)[0]
                      : 'https://via.placeholder.com/90x100'
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
                      : "Chưa phân loại!"}
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
            <h3>{editingCloth ? 'Sửa thông tin sản phẩm' : 'Thêm sản phẩm mới'}</h3>
            <label>
              Tên sản phẩm:
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
              Màu sắc:
              <input
                type="text"
                value={editingCloth ? editingCloth.colors : newCloth.colors}
                onChange={(e) =>
                  editingCloth
                    ? setEditingCloth({ ...editingCloth, colors: e.target.value })
                    : setNewCloth({ ...newCloth, colors: e.target.value })
                }
              />
            </label>


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

            <label>
              Giá:
              <input
                type="text"
                value={editingCloth ? Number(editingCloth.price) : newCloth.price}
                onChange={(e) =>
                  editingCloth
                    ? setEditingCloth({ ...editingCloth, price: e.target.value })
                    : setNewCloth({ ...newCloth, price: e.target.value })
                }
              />
            </label>

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