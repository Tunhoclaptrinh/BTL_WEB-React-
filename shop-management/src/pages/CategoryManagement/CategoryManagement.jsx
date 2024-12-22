import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CategoryManagement/CategoryManagement.css';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: ''
  });
  const [editingCategory, setEditingCategory] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 7;

  useEffect(() => {
    fetchCategories();
  }, [searchKeyword, currentPage]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/categories');
      let filteredCategories = response.data;

      if (searchKeyword) {
        filteredCategories = filteredCategories.filter(category =>
          category.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          category.description.toLowerCase().includes(searchKeyword.toLowerCase())
        );
      }

      setCategories(filteredCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/categories', newCategory);
      fetchCategories();
      setNewCategory({
        name: '',
        description: ''
      });
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
  };

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/categories/${editingCategory.id}`, editingCategory);
      fetchCategories();
      setEditingCategory(null);
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/categories/${id}`);
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);
  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  return (
    <div className="category-management">
      <h1 style={{margin: "20px"}}>Thêm danh mục</h1>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
      <form onSubmit={editingCategory ? handleUpdateCategory : handleAddCategory} style={{marginRight: '20px'}}>
        <input required
          type="text"
          placeholder="Nhập tên danh mục"
          value={editingCategory ? editingCategory.name : newCategory.name}
          onChange={(e) => editingCategory ? setEditingCategory({ ...editingCategory, name: e.target.value }) : setNewCategory({ ...newCategory, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Nhập mô tả danh mục"
          value={editingCategory ? editingCategory.description : newCategory.description}
          onChange={(e) => editingCategory ? setEditingCategory({ ...editingCategory, description: e.target.value }) : setNewCategory({ ...newCategory, description: e.target.value })}
        />
        <button style={{width: "20%"}} type="submit">{editingCategory ? 'Cập nhật' : 'Thêm'}</button>
      </form>
      
      
      
      </div>
      


      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <h2 style={{margin: "0 0 0 20px"}}>Danh sách danh mục</h2>
      <div style={{ marginBottom: '20px' }}>
          <input
          type="text"
          placeholder="Tìm kiếm danh mục"
          value={searchKeyword}
          onChange={handleSearchChange}
          textAlign="center"
        />
        
      </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Mô tả</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {currentCategories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                <button onClick={() => handleEditCategory(category)}>Sửa</button>
                <button onClick={() => handleDeleteCategory(category.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryManagement;