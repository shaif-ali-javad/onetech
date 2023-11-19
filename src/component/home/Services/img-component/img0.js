import { Parallax } from "react-parallax";
import "./img.css";
import name from "../image/parelall-scroll/0(1).jpg";
import Lottie from "lottie-react";
// import animation0 from "../../assets/animation - ";
// import TrackVisibility from "react-on-screen";
const Img0 = () => (
  // <TrackVisibility>
  //   {({ isVisible }) =>
  //     isVisible && (
  <Parallax className="img" bgImage={name} bgImageAlt="the cat" strength={200}>
    <div className="img-container">
      {/* <div className="content">
      <span className="img-txt">Office Automation</span>
    </div> */}
    </div>
  </Parallax>
);
//   }
// </TrackVisibility>
// );

export default Img0;
