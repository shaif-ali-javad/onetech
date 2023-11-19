import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/4.jpg";

const Img4 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={100}>
    <div className="img-container"></div>
  </Parallax>
);

export default Img4;
