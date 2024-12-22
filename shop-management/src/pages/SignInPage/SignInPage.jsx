import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContainerRight, WrapperContainerLeft, WrapperTextLight } from './style';
import imageLogo from '../../img/logotun.png';
import ButtonYellow from '../../components/Button/ButtonYellow';
import './style.css';

const SignInPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Xử lý thay đổi input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Xử lý đăng nhập
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/users/logi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Đăng nhập thành công
                setError('');
                // Chuyển hướng đến Home
                navigate('/home');
            } else {
                // Hiển thị lỗi nếu có
                setError(data.message || 'Đăng nhập thất bại.');
            }
        } catch (error) {
            setError('Không thể kết nối đến server.');
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0, 0.3)', height: '100vh' }}>
            <div style={{ width: '800px', height: "450px", borderRadius: '8px', background: '#fff', display: 'flex', border: '2px solid rgb(205, 204, 204)' }}>
                <WrapperContainerLeft>
                    <h1 style={{ marginBottom: '16px' }}>Xin chào</h1>
                    <p style={{ marginBottom: '16px' }}>Đăng nhập hoặc Tạo tài khoản</p>

                    <div className="delivery-content-left-input-top-item" style={{ marginBottom: '16px' }}>
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
                            width: '96%',
                            fontWeight: 'bold',
                            borderRadius: '4px',
                            fontSize: '16px',
                            margin: '26px 0 10px',
                            marginBottom: '16px',
                        }}
                    />

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
                    <p>Chưa có tài khoản? <WrapperTextLight>Tạo tài khoản</WrapperTextLight></p>
                </WrapperContainerLeft>

                <WrapperContainerRight>
                    <img src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px" />
                    <h4>Mua sắm tại TUN</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
};

export default SignInPage;
