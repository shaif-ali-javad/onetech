import "./img.css";
import Text from "./img-typewriter";
import "animate.css";

const Img_txt = () => (
  <div className="img-main-over">
    <div className="content-main-container">
      <div className="content-main">
        <div className="main-txt">
          <div className="animate__animated animate__bounce">
            <span className="img-main-txt">Onetech</span>
          </div>
          <div className="content-main-type">
            <Text />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Img_txt;
