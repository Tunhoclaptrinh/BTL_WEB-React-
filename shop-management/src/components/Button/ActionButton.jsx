import React from "react";

const ActionButton = ({ text, onClick, iconClassName, buttonClassName }) => {
  return (
    <button onClick={onClick} className={buttonClassName}>
      {iconClassName && <i className={iconClassName}></i>}
      <p>{text}</p>
    </button>
  );
};

export default ActionButton;
