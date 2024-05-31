import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./cartDetail.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const CartDetail = () => {
  // const cartItems = useSelector((state) => state.cart.items);
  const [cartItem, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/items");
        setCartItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDeleteItem = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:3000/items/${id}`);
      setCartItems(cartItem.filter((item) => item.id !== id));
      console.log(cartItem);
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };
  return (
    <div id="cart">
      <span>
        <h1>Cart</h1>{" "}
      </span>
      <Link to={"/history"}>History</Link>

      <div className="cart-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Ảnh</th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {cartItem?.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img src={item.image} alt="product" className="Cart-img" />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button>-</button>
                <input type="number" value="1" readOnly />
                <button>+</button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDeleteItem(item.id);
                  }}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default CartDetail;
