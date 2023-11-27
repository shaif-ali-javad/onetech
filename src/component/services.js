import React, { Component } from "react";
import Services from "./services/services/services";
import Slider from "./services/slider/slider";
import Navbar from "./home/navbar/navbar";
import Footer from "./home/footer/footer";

export class services extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Slider /> */}
        <Services />
        <Footer />
      </div>
    );
  }
}

export default services;
