import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Lấy thông tin người dùng từ API khi ứng dụng khởi động
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users', {
          withCredentials: true, // Gửi cookie xác thực nếu có
        });
        setUser(response.data);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Không thể lấy thông tin người dùng:', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Hàm xử lý đăng nhập
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/users', { email, password });
      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
      throw error;
    }
  };

  // Hàm xử lý đăng xuất
  const logout = async () => {
    try {
      await axios.post('http://localhost:3000/users');
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Đăng xuất thất bại:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
