import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import "./img-typewriter.css";

import TrackVisibility from "react-on-screen";

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ["Maintainer", "Supporter"],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <TrackVisibility>
      {({ isVisible }) =>
        isVisible && (
          <div className="typewriter">
            <div className="type">
              We're a{" "}
              <span style={{ fontWeight: "bold" }} className="type-txt">
                {text}
              </span>
              <Cursor cursorColor="#000" />
            </div>
          </div>
        )
      }
    </TrackVisibility>
  );
};
export default MyComponent;
