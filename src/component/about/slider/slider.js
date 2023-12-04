import React, { Component } from "react";
// import "./slider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import logo1 from "../image/About-Us-400x324.jpg";
import logo2 from "../image/About-Us-400x324.png";

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
      initialSlide: 1,
    };
    return (
      <Slider {...settings} className="logo-carousel carousel">
        <div className="carousel-logo">
          <img src={logo1} />
        </div>
        <div className="carousel-logo">
          <img src={logo2} />
        </div>
      </Slider>
    );
  }
}
