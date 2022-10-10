import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((val) => val.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((val) => (ans += val.amount * val.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((val) => (
        <div className="cart_box" key={val.id}>
          <div className="cart_img">
            <img src={val.image} alt="" />
            <p>{val.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(val, 1)}>+</button>
            <button>{val.amount}</button>
            <button onClick={() => handleChange(val, -1)}>-</button>
          </div>
          <div>
            <span>{val.price}</span>
            <button onClick={() => handleRemove(val.id)}>Remove</button>
          </div>
        </div>
      ))}
      
    </article>
  );
};

export default Cart;