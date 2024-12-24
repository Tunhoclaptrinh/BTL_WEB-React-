import React, { createContext, useState, useEffect } from "react";

// Tạo Context
export const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Lỗi khi đọc dữ liệu từ localStorage:", error);
      return null;
    }
  });

  const login = (userData) => {
    try {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Lỗi khi lưu trạng thái user:", error);
    }
  };

  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Lỗi khi xóa trạng thái user:", error);
    }
  };

  // Đồng bộ trạng thái `user` với `localStorage` khi tải lại trang
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser && !user) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Lỗi khi đồng bộ trạng thái user:", error);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
