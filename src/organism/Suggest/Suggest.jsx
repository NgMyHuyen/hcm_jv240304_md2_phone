// import React, { useState } from "react";
// import Slider from "react-slick";
// import { items } from "../../utils/common";
// import "./style.scss";
// import { Link } from "react-router-dom";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "black",
//         borderRadius: "50%",
//         padding: "0px",
//       }}
//       onClick={onClick}
//     />
//   );
// };

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "black",
//         borderRadius: "50%",
//         padding: "0px",
//       }}
//       onClick={onClick}
//     />
//   );
// };

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   nextArrow: <NextArrow />,
//   prevArrow: <PrevArrow />,
// };

// const Suggest = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const handleAddToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   const toggleCart = () => {
//     setIsCartOpen((prevState) => !prevState);
//   };

//   return (
//     <div className="suggest-container">
//       <div className="multi-item-carousel">
//         <h2>Gợi ý dành cho bạn</h2>
//         <Slider {...settings}>
//           {items.map((item, index) => (
//             <div key={index} className="carousel-item">
//               <img src={item.image} alt={`Item ${index + 1}`} />
//               <div className="carousel-content">
//                 <h3>{item.title}</h3>
//                 <p>{item.text}</p>
//                 <button onClick={() => handleAddToCart(item)} className="btn">
//                   Add to Cart
//                 </button>
//                 <Link to={"/products-detail"} className="btn">
//                   See more
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className="group-icon">
//         <div className="cart-icon-container" onClick={toggleCart}>
//           <ShoppingCartIcon />
//           {cartItems.length > 0 && (
//             <span className="cart-count">{cartItems.length}</span>
//           )}
//         </div>
//       </div>
//       {isCartOpen && (
//         <div className="cart-details">
//           <h4>Cart Details</h4>
//           {cartItems.map((item, index) => (
//             <div key={index} className="cart-item">
//               <img src={item.image} alt={item.title} />
//               <div>
//                 <h5>{item.title}</h5>
//                 <p>{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Suggest;

// import React from "react";
// import { useDispatch } from "react-redux";
// import Slider from "react-slick";
// import { items } from "../../utils/common";
// import "./style.scss";
// import { Link } from "react-router-dom";
// import { addItemToCart } from "../../store/Slices/cartSlice";

// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "black",
//         borderRadius: "50%",
//         padding: "0px",
//       }}
//       onClick={onClick}
//     />
//   );
// };

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "black",
//         borderRadius: "50%",
//         padding: "0px",
//       }}
//       onClick={onClick}
//     />
//   );
// };

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   nextArrow: <NextArrow />,
//   prevArrow: <PrevArrow />,
// };

// const Suggest = () => {
//   const dispatch = useDispatch();

//   const handleAddToCart = (item) => {
//     dispatch(addItemToCart(item));
//   };

//   return (
//     <div className="suggest-container">
//       <div className="multi-item-carousel">
//         <h2>Gợi ý dành cho bạn</h2>
//         <Slider {...settings}>
//           {items.map((item, index) => (
//             <div key={index} className="carousel-item">
//               <img src={item.image} alt={`Item ${index + 1}`} />
//               <div className="carousel-content">
//                 <h3>{item.title}</h3>
//                 <p>{item.text}</p>

//                 <button onClick={() => handleAddToCart(item)} className="btn">
//                   Add to Cart
//                 </button>
//                 <Link to="/products-detail" className="btn">
//                   See more
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Suggest;

import React from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { items } from "../../utils/common";
import "./style.scss";
import { Link } from "react-router-dom";
// import { addItemToCart } from "../../store/slices/cartSlice";
import { addItemToCart } from "../../store/Slices/cartSlice";
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        padding: "0px",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        padding: "0px",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Suggest = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className="suggest-container">
      <div className="multi-item-carousel">
        <h2>Gợi ý dành cho bạn</h2>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <img src={item.image} alt={`Item ${index + 1}`} />
              <div className="carousel-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button onClick={() => handleAddToCart(item)} className="btn">
                  Add to Cart
                </button>
                <Link to="/products-detail" className="btn">
                  See more
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Suggest;
