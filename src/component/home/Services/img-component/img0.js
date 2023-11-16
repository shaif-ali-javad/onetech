import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/0(1).jpg";

const Img0 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={200}>
    <div className="img-container">
      {/* <div className="content">
      <span className="img-txt">Office Automation</span>
    </div> */}
    </div>
  </Parallax>
);

export default Img0;
