import React, { useState } from 'react';

function CategoryList() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Nam' },
    { id: 1, name: 'Nam' },
    { id: 1, name: 'Nam' },
    { id: 1, name: 'Nam' },
    { id: 1, name: 'Nam' },
    { id: 1, name: 'Nam' },
    { id: 1, name: 'Nam' },

    { id: 1, name: 'Nam' }
  ]);

  const handleUpdate = (id) => {
    // TODO: Implement update logic
    console.log('Updating category:', id);
  };

  const handleDelete = (id) => {
    // TODO: Implement delete logic
    setCategories(categories.filter(category => category.id !== id));
  };

  return (
    <div className="admin-content-right-category-list">
      <h1>Danh sách danh mục</h1>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>CATEGORY</th>
            <th className='action'>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <button onClick={() => handleUpdate(category.id)}>UPDATE</button>
                <button onClick={() => handleDelete(category.id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryList;