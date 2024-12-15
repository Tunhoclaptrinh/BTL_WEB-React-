import React from "react";
import CartItem from "./CartItem";

const CartContent = ({ items, updateQuantity, removeItem }) => {
  return (
    <div className="cart-content-left">
      <table>
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Màu</th>
            <th>Size</th>
            <th>SL</th>
            <th>Thành Tiền</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartContent;
