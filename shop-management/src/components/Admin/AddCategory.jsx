import React, { useState } from 'react';

function AddCategory() {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement category addition logic
    console.log('Adding category:', categoryName);
  };

  return (
    <div className="admin-content-right-category-add">
      <h1>Thêm danh mục</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nhập tên danh mục"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default AddCategory;