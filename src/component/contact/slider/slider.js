import React, { Component } from "react";
import "./slider.css";

export class Slider extends Component {
  render() {
    return (
      <div id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/1392193093/photo/data-blocks-concept.jpg?s=612x612&w=0&k=20&c=cfKGp86g9VttLSqXxH7hWLCVoXRcjv8-zipDaU5x524="
              alt="Los Angeles"
              width="100%"
              height="755"
            />
            <div class="overlay"></div>
          </div>
          <div class="carousel-item">
            <img
              src="image/3382865257_7dedef23b0_o.jpg"
              alt="Chicago"
              width="100%"
              height="755"
            />
            <div class="overlay"></div>
          </div>
          <div class="carousel-item">
            <img
              src="image/keyboard_backlight_red_136083_6000x4000.jpg"
              alt="New York"
              width="100%"
              height="735"
            />
            <div class="overlay"></div>
          </div>
        </div>

        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  }
}

export default Slider;
