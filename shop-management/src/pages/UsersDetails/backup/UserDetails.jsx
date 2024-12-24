import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../components/contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    WrapperContainerRight,
    WrapperContainerLeft,
    WrapperTextLight,
} from "../SignInPage/style";
import imageLogo from "../../img/logotun.png";
import ButtonYellow from "../../components/Button/ButtonYellow";
import "../../styles/global.css";

const UserDetails = () => {
    const { user, setUser, logout } = useContext(UserContext);
    const [formData, setFormData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState("");
    const [displayData, setDisplayData] = useState(null);

    // Lấy dữ liệu hiển thị từ API khi component được render
    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                try {
                    const response = await axios.get(`http://localhost:3000/users/${user.id}`);
                    setDisplayData(response.data);
                    setFormData(response.data);
                } catch (error) {
                    console.error("Lỗi khi lấy dữ liệu người dùng:", error);
                }
            }
        };
        fetchUserData();
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            // Gửi request cập nhật user
            const response = await axios.put(
                `http://localhost:3000/users/${user.id}`,
                formData
            );

            if (response.status === 200) {
                const updatedUser = response.data;

                // Cập nhật trạng thái ứng dụng và localStorage
                setUser(updatedUser);
                localStorage.setItem("user", JSON.stringify(updatedUser));
                setDisplayData(updatedUser);

                setMessage("Cập nhật thông tin thành công!");
                setIsEditing(false);

                setTimeout(() => {
                    setMessage("");
                }, 3000);
            }
        } catch (error) {
            console.error("Lỗi khi cập nhật thông tin:", error);
            setMessage("Không thể cập nhật thông tin. Vui lòng thử lại sau.");

            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFormData(displayData); // Reset form về dữ liệu hiện tại
        setMessage("");
    };

    if (!user) {
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
                        <h1>Bạn chưa <a style={{color: "blue"}} href="/sign-in">đăng nhập</a></h1>
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
    }

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <h1>Thông tin người dùng</h1>

            {message && (
                <p
                    style={{
                        color: message.includes("thành công") ? "green" : "red",
                        padding: "10px",
                        backgroundColor: message.includes("thành công")
                            ? "#e8f5e9"
                            : "#ffebee",
                        borderRadius: "5px",
                        marginBottom: "20px",
                    }}
                >
                    {message}
                </p>
            )}

            {isEditing ? (
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData?.email || ""}
                        disabled
                    />
                    <br />
                    <label>Tên:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData?.name || ""}
                        onChange={handleChange}
                    />
                    <br />
                    <label>Địa chỉ:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData?.address || ""}
                        onChange={handleChange}
                    />
                    <br />
                    <label>Số điện thoại:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData?.phone || ""}
                        onChange={handleChange}
                    />
                    <br />
                    <label>Hạng thành viên:</label>
                    <select
                        name="membershipTier"
                        value={formData?.membershipTier || "bronze"}
                        onChange={handleChange}
                    >
                        <option value="bronze">Bronze</option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                    </select>
                    <br />
                    <button
                        onClick={handleSave}
                        style={{
                            marginTop: "10px",
                            backgroundColor: "green",
                            color: "white",
                            padding: "10px",
                            border: "none",
                            borderRadius: "5px",
                        }}
                    >
                        Lưu
                    </button>
                    <button
                        onClick={handleCancel}
                        style={{
                            marginTop: "10px",
                            marginLeft: "10px",
                            backgroundColor: "gray",
                            color: "white",
                            padding: "10px",
                            border: "none",
                            borderRadius: "5px",
                        }}
                    >
                        Hủy
                    </button>
                </div>
            ) : (
                <div>
                    <p>Email: {displayData?.email}</p>
                    <p>Tên: {displayData?.name || "Chưa cập nhật"}</p>
                    <p>Địa chỉ: {displayData?.address || "Chưa cập nhật"}</p>
                    <p>Số điện thoại: {displayData?.phone || "Chưa cập nhật"}</p>
                    <p>Hạng thành viên: {displayData?.membershipTier || "Chưa cập nhật"}</p>
                    <button
                        onClick={() => setIsEditing(true)}
                        style={{
                            marginTop: "10px",
                            backgroundColor: "blue",
                            color: "white",
                            padding: "10px",
                            border: "none",
                            borderRadius: "5px",
                        }}
                    >
                        Chỉnh sửa
                    </button>
                    <button
                        onClick={logout}
                        style={{
                            marginTop: "10px",
                            marginLeft: "10px",
                            backgroundColor: "red",
                            color: "white",
                            padding: "10px",
                            border: "none",
                            borderRadius: "5px",
                        }}
                    >
                        Đăng xuất
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
