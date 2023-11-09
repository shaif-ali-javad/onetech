import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/20512813.jpg";

const Img = () => (
  <Parallax
    className="img-main"
    bgImage={name}
    bgImageAlt="the cat"
    strength={100}
  >
    <div className="content-main">
      <span className="img-main-txt">Onetech</span>
    </div>
  </Parallax>
);

export default Img;
