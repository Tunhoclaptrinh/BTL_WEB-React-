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
import "./UserDetails.css";

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

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData((prevData) => ({
                ...prevData,
                avatar: reader.result,
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/users/${user.id}`, formData);
            setDisplayData(response.data);
            setIsEditing(false);
            setMessage("Cập nhật thông tin thành công!");

            setTimeout(() => {
                setMessage("");
            }, 3000);
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
        <div className="profile-container">
            {displayData && (
                <>
                    <div className="profile-sidebar">
                        <img src={displayData.avatar} alt="Avatar" className="avatar" />
                        {isEditing && (
                            <input type="file" accept="image/*" onChange={handleAvatarChange} />
                        )}
                    </div>
                    <div className="profile-content">
                        <h2>Thông tin cá nhân</h2>
                        {isEditing ? (
                            <>
                                <div className="form-group">
                                    <label>Tên:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ:</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại:</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button className="save-button" onClick={handleSave}>Lưu</button>
                                <button className="cancel-button" onClick={handleCancel}>Hủy</button>
                            </>
                        ) : (
                            <>
                                <p><strong>Tên:</strong> {displayData.name}</p>
                                <p><strong>Email:</strong> {displayData.email}</p>
                                <p><strong>Địa chỉ:</strong> {displayData.address}</p>
                                <p><strong>Số điện thoại:</strong> {displayData.phone}</p>
                                <p><strong>Hạng thành viên:</strong> {displayData.membershipTier}</p>
                                <p><strong>Tổng số lần mua hàng:</strong> {displayData.totalPurchases}</p>
                                <button className="edit-button" onClick={() => setIsEditing(true)}>Chỉnh sửa</button>
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
                                        </>
                                    )}
                                    {message && <p className="message">{message}</p>}
                    </div>
                </>
            )}
        </div>
    );
};

export default UserDetails;