import React, { Component } from "react";
import "./slider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slide0 from "../../../assets/image/1582654455-3655.webp";
import slide1 from "../../../assets/image/20512813.jpg";

export default class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      centerPadding: "100px",
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear",
      initialSlide: 0,
    };
    return (
      <Slider {...settings} className="logo-carousel carousel">
        <div className="slide-container">
          <img src="image/20512813.jpg" className="slide-img" />
        </div>
        <div className="slide-container">
          <img src="image/1582654455-3655.webp" className="slide-img" />
        </div>
      </Slider>
    );
  }
}
