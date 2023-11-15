import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/8(1).jpg";

const Img8 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={100}>
    {/* <div className="content">
      <span className="img-txt">Maintenance & Support</span>
    </div> */}
  </Parallax>
);

export default Img8;
