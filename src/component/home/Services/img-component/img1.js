import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/1(1).jpg";

export const Img1 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={200}>
    <div className="img-1">
      {/* <div className="content">
      <span className="img-txt">Software Solutions</span>
    </div> */}
    </div>
  </Parallax>
);
export default Img1;
