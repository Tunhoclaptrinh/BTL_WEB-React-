import React from "react";
import { Button } from 'antd';

const ButtonComponent = ({ 
    size, 
    textButton, 
    style, 
    icon, 
    ...rest }) => {
        
    return (
        <Button size={size} icon={icon} style={style} {...rest}>
            <span>{textButton}</span>
        </Button>
    );
};

export default ButtonComponent;
