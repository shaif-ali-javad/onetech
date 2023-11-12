import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./img-typewriter.css";
const MyComponent = () => {
  const [text] = useTypewriter({
    words: ["Maintainer", "Supporter"],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div className="typewriter">
      <div className="type">
        We're a{" "}
        <span style={{ fontWeight: "bold" }} className="type-txt">
          {text}
        </span>
        <Cursor cursorColor="#000" />
      </div>
    </div>
  );
};
export default MyComponent;
