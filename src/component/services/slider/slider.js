import React, { Component } from "react";

import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Slider0 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear",
      initialSlide: 0,
    };
    return (
      <Slider {...settings} className="logo-carousel carousel">
        <div className="carousel-img">
          <img src="https://media.istockphoto.com/id/1392193093/photo/data-blocks-concept.jpg?s=612x612&w=0&k=20&c=cfKGp86g9VttLSqXxH7hWLCVoXRcjv8-zipDaU5x524=" />
        </div>
        <div className="carousel-img">
          <img src="image/3382865257_7dedef23b0_o.jpg" />
        </div>
        <div className="carousel-img">
          <img src="image/keyboard_backlight_red_136083_6000x4000.jpg" />
        </div>
        {/* <div className="carousel-logo">
          <img src={img4} />
        </div>
        <div className="carousel-logo">
          <img src={img5} />
        </div> */}
      </Slider>
    );
  }
}

export default Slider0;
