import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/9(1).jpg";

const Img9 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={100}>
    <div className="img-container"></div>
  </Parallax>
);

export default Img9;
