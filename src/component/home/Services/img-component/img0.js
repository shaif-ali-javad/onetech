import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/0.jpg";

const Img0 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={100}>
    <div className="content">
      <span className="img-txt">Office Automation</span>
    </div>
  </Parallax>
);

export default Img0;
