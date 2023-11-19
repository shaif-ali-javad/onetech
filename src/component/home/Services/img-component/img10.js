import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/10(1).jpg";

const Img10 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={100}>
    <div className="img-container"></div>
  </Parallax>
);

export default Img10;
