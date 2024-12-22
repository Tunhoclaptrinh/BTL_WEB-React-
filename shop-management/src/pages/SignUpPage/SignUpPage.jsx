import React from "react";
import imageLogo from '../../img/logotun.png';
import {WrapperContainerRight, WrapperContainerLeft, WrapperTextLight} from './style'
import ButtonYellow from '../../components/Button/ButtonYellow';


const SignUpPage = () => {
        
    return (
        <div style={{display: 'flex', alignItems:'center', justifyContent: 'center', background: 'rgba(0,0,0, 0.3)', height: '100vh'}}>
            <div style={{width: '800px', height: "450px", borderRadius: '8px', background: '#fff', display: 'flex', border: '2px solid rgb(205, 204, 204)'}}>
                <WrapperContainerLeft>
                    <h1 style={{marginBottom: '8px', }}>Xin chào</h1>
                    <p style={{marginBottom: '8px', }}>Đăng nhập hoặc Tạo tài khoản</p>

                    <div className="delivery-content-left-input-top-item" style={{marginBottom: '8px', }} >
                        <input type="text" placeholder= 'abc@gmail.com'/>
                    </div>

                    <div className="delivery-content-left-input-top-item" >
                        <input type="text"  placeholder='password'/>
                    </div>

                    <div className="delivery-content-left-input-top-item" >
                        <input type="text"  placeholder='confirm password'/>
                    </div>
                    
                    <ButtonYellow 
                    className="view-all-button" 
                    label='Tạo tài khoản'
                    style={{
                        width: '96%',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        fontSize: '16px',
                        margin: '26px 0 10px',
                        marginBottom: '8px', 
                    }}
                    />
                    <p>Bạn cần? <WrapperTextLight>hỗ trợ</WrapperTextLight></p>
                </WrapperContainerLeft>

                <WrapperContainerRight>
                    <img src={imageLogo} preview={false} alt='image-logo' height='203px' width= '203px'/>
                    <h4>Mua sắm tại TUN</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
};

export default SignUpPage;
