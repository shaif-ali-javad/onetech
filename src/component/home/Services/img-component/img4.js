import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/4.jfif";

const Img4 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={100}>
    <div className="content">
      <span className="img-txt">ELV Systems</span>
    </div>
  </Parallax>
);

export default Img4;
