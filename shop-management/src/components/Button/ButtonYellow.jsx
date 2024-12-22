import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonYellow.css'; // Import file CSS cho nút

const ButtonYellow = ({ 
    label, 
    to, 
    children, 
    className, 
    onClick, 
    style,
    icon,
    

}) => {




  return (
    <div className="button-wrapper-yellow">
      <button onClick={onClick}
        className={`button-link-yellow ${className || ''}`} 
        style={style}
      >
        {icon && <i className={`icon ${icon}`}></i>}
        {label}
        {children}
      </button>
    </div>
  );
  
};

export default ButtonYellow;

