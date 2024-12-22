import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonBlack.css'; // Import file CSS cho nút

const ButtonCheck = ({ 
    label, 
    to, 
    children, 
    className, 
    onClick, 
    style,
    icon,
    

}) => {




  return (
    <div className="button-wrapper-check">
      <button onClick={onClick}
        className={`button-link-check ${className || ''}`} 
        style={style}
      >
        {icon && <i className={`icon ${icon}`}></i>}
        {label}
        {children}
      </button>
    </div>
  );
  
};

export default ButtonCheck;

