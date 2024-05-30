// import React from "react";
// import "./cartDetail.scss";
// export default function CartDetail() {
//   return (
//     <>
//       <div id="cart">
//         <h1>Cart</h1>
//         <div className="cart-table">
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Ảnh</th>
//               <th>Sản phẩm</th>
//               <th>Giá</th>
//               <th>Số lượng</th>
//               <th>Hành động</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>
//                 <img
//                   src="https://chungblackberry.com/wp-content/uploads/2024/03/samsung-galaxy-z-fold4-kem-256gb-600x600-1.jpg"
//                   alt="product"
//                   className="Cart-img"
//                 />
//               </td>
//               <td>Product 1</td>
//               <td>1000</td>
//               <td>
//                 <button>-</button>
//                 <input type="number" value="1" />
//                 <button>+</button>
//               </td>
//               <td>
//                 <button>Xóa</button>
//               </td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>
//                 <img src="https://via.placeholder.com/100" alt="product" />
//               </td>
//               <td>Product 2</td>
//               <td>2000</td>
//               <td>
//                 <button>-</button>
//                 <input type="number" value="1" />
//                 <button>+</button>
//               </td>
//               <td>
//                 <button>Xóa</button>
//               </td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td>
//                 <img src="https://via.placeholder.com/100" alt="product" />
//               </td>
//               <td>Product 3</td>
//               <td>3000</td>
//               <td>
//                 <button>-</button>
//                 <input type="number" value="1" />
//                 <button>+</button>
//               </td>
//               <td>
//                 <button>Xóa</button>
//               </td>
//             </tr>
//           </tbody>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./cartDetail.scss";
import axios from "axios";

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
      <h1>Cart</h1>
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
