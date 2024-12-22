import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../UsersDetails/UserDetails.css';

import { Table, Button, InputGroup, FormControl } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


const UsersDetails = () => {

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:3000/users');
    setUsers(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    fetchUsers();
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mt-5">
      <h1>Quản lý người dùng</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Tìm kiếm theo số điện thoại"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Button variant="outline-secondary">Xuất excel</Button>
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Email</th>
            <th>Họ và tên</th>
            <th>Số điện thoại</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Quyền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) =>
              user.phone.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{new Date(user.dob).toLocaleDateString()}</td>
                <td>{user.gender}</td>
                <td>{user.role}</td>
                <td>
                  <Button variant="link">Edit</Button>
                  <Button variant="link" onClick={() => handleDelete(user.id)}>Delete</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};


export default UsersDetails;
