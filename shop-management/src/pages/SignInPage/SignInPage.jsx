import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/contexts/UserContext"; // Import UserContext
import {
    WrapperContainerRight,
    WrapperContainerLeft,
    WrapperTextLight,
} from "./style";
import imageLogo from "../../img/logotun.png";
import ButtonYellow from "../../components/Button/ButtonYellow";
import "./style.css";

const SignInPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(UserContext); // Lấy hàm login từ UserContext

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:3000/users");
            const users = await response.json();

            const user = users.find(
                (u) =>
                    u.email === formData.email &&
                    u.password === formData.password
            );

            if (user) {
                setError(""); // Xóa lỗi cũ

            // Cập nhật lastLogin trên server
            const updatedUser = {
                ...user,
                lastLogin: new Date().toISOString(),
            };

                const updateResponse = await fetch(
                    `http://localhost:3000/users/${user.id}`,
                    {
                        method: "PATCH", // Dùng PATCH để cập nhật một phần dữ liệu
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ lastLogin: updatedUser.lastLogin }),
                    }
                );

                if (!updateResponse.ok) {
                    alert("Cập nhật ngày đăng nhập thất bại")
                }

                // Cập nhật trạng thái trong Context sau khi cập nhật thành công
                login(updatedUser);
                navigate("/home");
            } else {
                setError("Email hoặc mật khẩu không chính xác.");
            }


        } catch (error) {
            setError("Không thể kết nối đến server.");
        }
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0, 0.3)",
                height: "100vh",
            }}
        >
            <div
                style={{
                    width: "800px",
                    height: "450px",
                    borderRadius: "8px",
                    background: "#fff",
                    display: "flex",
                    border: "2px solid rgb(205, 204, 204)",
                }}
            >
                <WrapperContainerLeft>
                    <h1 style={{ marginBottom: "16px" }}>Xin chào</h1>
                    <p style={{ marginBottom: "16px" }}>
                        Đăng nhập hoặc Tạo tài khoản
                    </p>

                    <div
                        className="delivery-content-left-input-top-item"
                        style={{ marginBottom: "16px" }}
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="abc@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="delivery-content-left-input-top-item">
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <ButtonYellow
                        className="view-all-button"
                        label="Đăng Nhập"
                        onClick={handleLogin}
                        style={{
                            width: "96%",
                            fontWeight: "bold",
                            borderRadius: "4px",
                            fontSize: "16px",
                            margin: "26px 0 10px",
                            marginBottom: "16px",
                        }}
                    />

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <p>
                        <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
                    </p>
                    <p>
                        Chưa có tài khoản?{" "}
                        <WrapperTextLight>Tạo tài khoản</WrapperTextLight>
                    </p>
                </WrapperContainerLeft>

                <WrapperContainerRight>
                    <img
                        src={imageLogo}
                        preview={false}
                        alt="image-logo"
                        height="203px"
                        width="203px"
                    />
                    <h4>Mua sắm tại TUN</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
};

export default SignInPage;
