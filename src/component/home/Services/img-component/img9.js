import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/9.jpg";

const Img9 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={100}>
    <div className="content">
      <span className="img-txt">AI Based Solutions</span>
    </div>
  </Parallax>
);

export default Img9;
