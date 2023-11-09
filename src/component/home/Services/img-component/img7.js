import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/7.jpg";

const Img7 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={100}>
    <div className="content">
      <span className="img-txt">Cloud Services</span>
    </div>
  </Parallax>
);

export default Img7;
