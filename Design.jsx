import React, { useState } from 'react';
import '../../styles/design.css';
import image1 from '../../image/phong.png';
import image2 from '../../image/somi.png';
import image3 from '../../image/sooc.png';
import image4 from '../../image/jean.png';
import image5 from '../../image/khoac.png';
import image6 from '../../image/aolen.png';


function Design() {
  const [clothes, setClothes] = useState([
    {
      id: 1,
      name: 'Áo phông',
      quantity: '100',
      price: '120.000đ',
      sizes: 'S, M, L, XL',
      material: 'Cotton',
      description: 'Fashion, hợp xu hướng',
      image: image1,
    },
    {
      id: 2,
      name: 'Áo sơ mi',
      quantity: '150',
      price: '180.000đ',
      sizes: 'S, M, L, XL',
      material: 'Silk',
      description: 'Dễ mặc, giá cả phải chăng',
      image: image2,
    },
    {
      id: 3,
      name: 'Quần sooc',
      quantity: '370',
      price: '220.000đ',
      sizes: 'S, M, L',
      material: 'Cotton',
      description: 'Local brand, màu sắc hài hoà',
      image: image3,
    },
    {
      id: 4,
      name: 'Quần jean',
      quantity: '50',
      price: '300.000đ',
      sizes: 'S, M, L, XL',
      material: 'Polyester',
      description: 'Dễ phối đồ, hợp với mọi lứa tuổi',
      image: image4,
    },
    // Thêm nhiều sản phẩm hơn để kiểm tra phân trang
    {
      id: 5,
      name: 'Áo khoác',
      quantity: '80',
      price: '500.000đ',
      sizes: 'S, M, L, XL',
      material: 'Leather',
      description: 'Thời trang, giữ ấm tốt',
      image: image5,
    },
    {
      id: 6,
      name: 'Áo len',
      quantity: '120',
      price: '250.000đ',
      sizes: 'S, M, L, XL',
      material: 'Wool',
      description: 'Ấm áp, mềm mại',
      image: image6,
    },
  ]);

  const [editingCloth, setEditingCloth] = useState(null);
  const [search, setSearch] = useState('');
  const [newCloth, setNewCloth] = useState({
    id: '',
    name: '',
    quantity: '',
    price: '',
    sizes: '',
    material: '',
    description: '',
    image: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleDelete = (id) => {
    const updatedClothes = clothes.filter((cloth) => cloth.id !== id);
    setClothes(updatedClothes);
  };

  const handleEdit = (cloth) => {
    setEditingCloth({ ...cloth });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    const updatedClothes = clothes.map((cloth) =>
      cloth.id === editingCloth.id ? editingCloth : cloth
    );
    setClothes(updatedClothes);
    setEditingCloth(null);
    setIsModalOpen(false);
  };

  const handleAdd = () => {
    setClothes([...clothes, { ...newCloth, id: Date.now() }]);
    setNewCloth({
      id: '',
      name: '',
      quantity: '',
      price: '',
      sizes: '',
      material: '',
      description: '',
      image: ''
    });
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCloth(null);
  };

  // Tính toán các sản phẩm cần hiển thị dựa trên trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clothes.slice(indexOfFirstItem, indexOfLastItem);

  // Tạo các nút điều hướng trang
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(clothes.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      
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
      <button className="add" onClick={handleOpenModal}>Thêm sản phẩm</button>
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
            .filter((cloth) =>
              cloth.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((cloth) => (
              <tr key={cloth.id}>
                <td>
                  <img
                    src={cloth.image}
                    alt={cloth.name}
                    style={{ width: '90px', height: '100px'}}
                  />
                </td>
                <td>{cloth.name}</td>
                <td>
                  <ul>
                    <li>Số lượng tồn kho: {cloth.quantity}</li>
                    <li>Giá: {cloth.price}</li>
                    <li>Kích cỡ: {cloth.sizes}</li>
                    <li>Chất liệu: {cloth.material}</li>
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
            <span className="close" onClick={handleCloseModal}>&times;</span>
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

export default Design;