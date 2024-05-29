import React from "react";
import Slider from "react-slick";
import { items } from "../common/data";

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

const Suggest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
            </div>
          </div>
        ))}
      </Slider>
      <div className="img-mainContent">
        <img
          src="https://www.concept-phones.com/wp-content/uploads/2021/06/Apple-X-Samsung-iGalaxy-S22-ProMax-Concept-2.jpg"
          alt=""
        />
        <img
          src="https://blog.appsumo.com/wp-content/uploads/2021/02/image4-3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Suggest;
