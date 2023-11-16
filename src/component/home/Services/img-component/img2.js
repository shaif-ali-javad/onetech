import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/2(1).jpg";

const Img2 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={100}>
    <div className="img-container img-2">
      {/* <div className="content">
      <span className="img-txt">AV Solutions</span>
    </div> */}
    </div>
  </Parallax>
);

export default Img2;
