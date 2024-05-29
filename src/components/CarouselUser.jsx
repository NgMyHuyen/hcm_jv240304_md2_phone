import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import "./App.scss";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.lifewire.com/thmb/y09P6DymoLbJ9lCC3vAT6qBtCOI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Fold5Wide-a9b8638b35ee4de58643f10a10c1e27e.jpg"
          alt="First slide"
        />
        <Carousel.Caption>{/* <h5>First slide label</h5> */}</Carousel.Caption>
      </Carousel.Item>
      {/*  */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/EqEShYbXUAAG6CE.jpg:large"
          alt="Second slide"
        />
        <Carousel.Caption>{/* <h5>Second slide label</h5> */}</Carousel.Caption>
      </Carousel.Item>
      {/*  */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.mygsm.me/media/iopt/catalog/product/s/2/s24-galaxy-ai-is-here-9.webp"
          alt="Third slide"
        />
        <Carousel.Caption>{/* <h5>Third slide label</h5> */}</Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
