import React, { Component } from "react";
import About from "./about/about";
import Navbar from "./home/navbar/navbar";
import Footer from "./home/footer/footer";
import Slider from "./about/slider/slider";

export class about extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
        <About />
        <Footer />
      </div>
    );
  }
}

export default about;
