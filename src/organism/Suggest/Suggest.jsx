import React from "react";
import Slider from "react-slick";
import { items } from "../../utils/common";
import "./style.scss";
import { Link } from "react-router-dom";
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
  return (
    <div className="multi-item-carousel">
      <h2>Gợi ý dành cho bạn</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.image} alt={`Item ${index + 1}`} />
            <div className="carousel-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={item.link} className="btn">
                Add to Card
              </a>
              <Link to={"/products-detail"} className="btn">
                See more
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Suggest;
