import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { images } from "../utils/common";

function Banner() {
  return (
    <Carousel data-bs-theme="dark" interval={2000}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
