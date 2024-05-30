import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, increaseQty } from "../redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <ul>
        {Object.entries(cart).map(([slug, { name, img, qty }]) => (
          <li key={slug}>
            <img src={img} alt={name} />
            <div>{name}</div>
            <div>{`Qty: ${qty}`}</div>
            <button onClick={() => dispatch(removeCart(slug))}>Remove</button>
            <div className="group-btn-quantity">
              <button onClick={() => dispatch(increaseQty(slug))}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
