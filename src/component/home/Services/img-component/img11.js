import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/11(1).png";
import TrackVisibility from "react-on-screen";

const Img11 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={100}>
    <div className="img-container"></div>
  </Parallax>
);

export default Img11;
