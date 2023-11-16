import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/6(1).jpg";

const Img6 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={100}>
    <div className="img-container">
      {/* <div className="content">
      <span className="img-txt">Home Automation</span>
    </div> */}
    </div>
  </Parallax>
);

export default Img6;
