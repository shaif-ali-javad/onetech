import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/5(1).jpg";

const Img5 = () => (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={100}>
    {/* <div className="content">
      <span className="img-txt">Backup and Disaster Recovery Management</span>
    </div> */}
  </Parallax>
);

export default Img5;
