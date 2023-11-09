import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/11.jpg";

const Img11 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={100}>
    <div className="content">
      <span className="img-txt">Microsoft Azure / Office 365</span>
    </div>
  </Parallax>
);

export default Img11;
