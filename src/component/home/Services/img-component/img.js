import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/20512813.jpg";
import Text from "./img-typewriter";

const Img = () => (
  <div className="img-main-over">
    <Parallax
      className="img-main"
      bgImage={name}
      bgImageAlt="the cat"
      strength={100}
    >
      <div className="content-main-container">
        <div className="content-main">
          <span className="img-main-txt">Onetech</span>

          <div className="content-main-type">
            <Text />
          </div>
        </div>
      </div>
    </Parallax>
  </div>
);

export default Img;
