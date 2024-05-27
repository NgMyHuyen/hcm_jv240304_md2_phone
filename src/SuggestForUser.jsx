import React from "react";
import Slider from "react-slick";
// import "./App.scss";

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

  const items = [
    {
      title: "iPhone 14 Pro",
      text: "The iPhone 14 Pro is the first iPhones to have a new type of display cutout called 'Dynamic Island'",
      image:
        "https://clickbuy.com.vn/uploads/images/2020/10/thumb_IP12Pro_3.jpg",
      link: "#",
    },
    {
      title: "Galaxy Z Fold3",
      text: "Unfold Z Fold3 theater-like viewing experiences, fully engaged in content on the uninterrupted 7.6-inch",
      image:
        "https://chungblackberry.com/wp-content/uploads/2024/03/samsung-galaxy-z-fold4-kem-256gb-600x600-1.jpg",
      link: "#",
    },
    {
      title: "AirPods Max",
      text: "Feature incredible high-fidelity audio, Adaptive EQ, Active Noise Cancellation, and spatial audio",
      image:
        "https://haidangmobile.vn/wp-content/uploads/2022/06/bluetooth-airpods-max-apple-xanh-1.jpeg",
      link: "#",
    },
    {
      title: "iphone Case",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://clickbuy.com.vn/uploads/images/2022/10/op-14-pm-trong-suot.jpg",
      link: "#",
    },
    {
      title: "Samsung Case",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://cdn.tgdd.vn/Products/Images/60/323062/bao-da-galaxy-a35-samsung-thong-minh-thumb-600x600.jpg",
      link: "#",
    },
    {
      title: "Galaxy Z Fold3 Case",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://minhtuanmobile.com/uploads/products/p-lung-samsung-galaxy-z-fold4-standing-cover-with-pen-230721090746.png",
      link: "#",
    },
    // Add more items as needed
  ];

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
