import React from "react";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    updateQuantity(item.id, value);
  };

  return (
    <tr>
      <td>
        <img src={item.image} alt={item.name} />
      </td>
      <td>
        <p>{item.name}</p>
      </td>
      <td>
        <img src={item.color} alt="color" />
      </td>
      <td>
        <p>{item.size}</p>
      </td>
      <td>
        <input
          type="number"
          value={item.quantity}
          min="1"
          onChange={handleQuantityChange}
        />
      </td>
      <td>{(item.price * item.quantity).toLocaleString("it-IT")} Đ</td>
      <td>
        <span
          className="remove-item"
          onClick={() => removeItem(item.id)}
          style={{ cursor: "pointer", color: "red" }}
        >
          x
        </span>
      </td>
    </tr>
  );
};

export default CartItem;
