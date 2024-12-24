import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UsersManagement.css";


function UsersManagement() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    membershipTier: "copper",
    totalPurchases: 0,
    role: "customer",
  });
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    fetchUsers();
  }, [searchKeyword, filterRole, currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      let filteredUsers = response.data;

      if (searchKeyword) {
        filteredUsers = filteredUsers.filter(user =>
          user.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          user.email.toLowerCase().includes(searchKeyword.toLowerCase())
        );
      }

      if (filterRole !== 'all') {
        filteredUsers = filteredUsers.filter(user => user.role === filterRole);
      }

      setUsers(filteredUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingUser) {
      setEditingUser({ ...editingUser, [name]: value });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleSaveUser = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await axios.put(`http://localhost:3000/users/${editingUser.id}`, editingUser);
        fetchUsers();
        setEditingUser(null);
      } else {
        const response = await axios.post("http://localhost:3000/users", { ...newUser, id: Date.now() });
        setUsers([...users, response.data]);
        setNewUser({
          username: "",
          name: "",
          email: "",
          phone: "",
          membershipTier: "copper",
          totalPurchases: 0,
          role: "customer",
        });
      }
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="usermanagement-container">
      <h1>Quản lý người dùng</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Tìm kiếm người dùng"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
          <option value="all">Tất cả</option>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <form onSubmit={handleSaveUser} className="form-container">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={editingUser ? editingUser.username : newUser.username}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Tên người dùng"
          value={editingUser ? editingUser.name : newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={editingUser ? editingUser.email : newUser.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Số điện thoại"
          value={editingUser ? editingUser.phone : newUser.phone}
          onChange={handleInputChange}
        />
        <select name="membershipTier" value={editingUser ? editingUser.membershipTier : newUser.membershipTier} onChange={handleInputChange}>
          <option value="copper">Copper</option>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
          <option value="platinum">Platinum</option>
        </select>
        <input
          type="number"
          name="totalPurchases"
          placeholder="Total Purchases"
          value={editingUser ? editingUser.totalPurchases : newUser.totalPurchases}
          onChange={handleInputChange}
        />
        <select name="role" value={editingUser ? editingUser.role : newUser.role} onChange={handleInputChange}>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">{editingUser ? "Cập nhật" : "Thêm"}</button>
      </form>
      <h2>Danh sách người dùng</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Thông tin đăng nhập</th>
            <th>Thông tin liên hệ</th>
            <th>Hạng thành viên</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <strong>Username:</strong> {user.username}<br />
                <strong>Tên người dùng:</strong> {user.name}
              </td>
              <td>
                <strong>Email:</strong> {user.email}<br />
                <strong>Số điện thoại:</strong> {user.phone}
              </td>
              <td>
                <strong>Hạng:</strong> {user.membershipTier}<br />
                <strong>Tổng chi tiêu:</strong> {user.totalPurchases}
              </td>
              <td>
                <button onClick={() => handleEditUser(user)}>Sửa</button>
                <button onClick={() => handleDeleteUser(user.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
  );
}

export default UsersManagement;