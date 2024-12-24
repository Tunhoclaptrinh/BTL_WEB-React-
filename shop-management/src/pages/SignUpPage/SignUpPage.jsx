import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imageLogo from '../../img/logotun.png';
import { WrapperContainerRight, WrapperContainerLeft, WrapperTextLight } from './style';
import ButtonYellow from '../../components/Button/ButtonYellow';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    // Xử lý thay đổi input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Xử lý đăng ký
    const handleRegister = async () => {
        if (formData.password !== formData.confirmPassword) {
            setError('Mật khẩu không khớp.');
            return;
        }
    
        try {
            // Payload với các trường khác để trống hoặc mặc định
            const payload = {
                email: formData.email,
                password: formData.password,
                username: '', // Tên người dùng mặc định là rỗng
                role: 'customer', // Vai trò mặc định
                name: '', // Tên mặc định là rỗng
                address: '', // Địa chỉ mặc định là rỗng
                phone: '', // Số điện thoại mặc định là rỗng
                membershipTier: 'bronze', // Hạng thành viên mặc định
                totalPurchases: 0, // Số tiền mua hàng mặc định
                createdAt: new Date().toISOString(), // Ngày tạo mặc định là hiện tại
                lastLogin: new Date().toISOString(), // Lần đăng nhập cuối mặc định
            };
    
            const response = await axios.post('http://localhost:3000/users', payload);
    
            setSuccess('Đăng ký thành công!');
            setError('');
            setFormData({ email: '', password: '', confirmPassword: '' }); // Reset form
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message || 'Đăng ký thất bại.');
            } else {
                setError('Không thể kết nối đến server.');
            }
        }
    };
    

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0, 0.3)', height: '100vh' }}>
            <div style={{ width: '800px', height: "450px", borderRadius: '8px', background: '#fff', display: 'flex', border: '2px solid rgb(205, 204, 204)' }}>
                <WrapperContainerLeft>
                    <h1 style={{ marginBottom: '8px' }}>Xin chào</h1>
                    <p style={{ marginBottom: '8px' }}>Đăng nhập hoặc Tạo tài khoản</p>

                    <div className="delivery-content-left-input-top-item" style={{ marginBottom: '8px' }}>
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

                    <div className="delivery-content-left-input-top-item">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="confirm password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <ButtonYellow
                        className="view-all-button"
                        label="Tạo tài khoản"
                        onClick={handleRegister}
                        style={{
                            width: '96%',
                            fontWeight: 'bold',
                            borderRadius: '4px',
                            fontSize: '16px',
                            margin: '26px 0 10px',
                            marginBottom: '8px',
                        }}
                    />

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}

                    <p>Bạn cần? <WrapperTextLight>hỗ trợ</WrapperTextLight></p>
                    <p>Đã có tài khoản? <WrapperTextLight onClick={() => navigate('/user-details')} style={{ cursor: 'pointer', color: '#007BFF' }}>Đăng nhập</WrapperTextLight></p>
                </WrapperContainerLeft>

                <WrapperContainerRight>
                    <a href="/home">
                    <img
                        src={imageLogo}
                        preview={false}
                        alt="image-logo"
                        height="203px"
                        width="203px"
                    />
                    </a>
                </WrapperContainerRight>
            </div>
        </div>
    );
};

export default SignUpPage;
