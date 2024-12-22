import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonWhite.css'; // Import file CSS cho nút

const ButtonWhite = ({ 
    label, 
    to, 
    children, 
    className, 
    onClick, 
    style,
    icon,
    

}) => {




  return (
    <div className="button-wrapper">
      <button onClick={onClick}
        className={`button-link ${className || ''}`} 
        style={style}
      >
        {icon && <i className={`icon ${icon}`}></i>}
        {label}
        {children}
      </button>
    </div>
  );
  
};

export default ButtonWhite;

