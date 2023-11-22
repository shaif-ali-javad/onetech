import { Component } from "react";
import { Parallax } from "react-parallax";
import animation0 from "../../assets/lt62Jujd6s.json";
import Lottie from "lottie-react";
// import name from "../image/20512813.jpg";

export class Img extends Component {
  render() {
    return (
      <div className="img-bg">
        {/* <Parallax
          className="img-main"
          bgImage={name}
          bgImageAlt="the cat"
          strength={100}
        > */}
        <Lottie animationData={animation0} className="img-main-1" />
        {/* </Parallax> */}
      </div>
    );
  }
}
export default Img;
