import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import Img0 from "./home/Services/image/parelall-scroll/0(1).jpg";
import Img1 from "./home/Services/image/parelall-scroll/1(1).jpg";
import Img2 from "./home/Services/image/parelall-scroll/2(1).jpg";
import Img3 from "./home/Services/image/parelall-scroll/3(1).jpg";
import Img4 from "./home/Services/image/parelall-scroll/4.jpg";
import Img5 from "./home/Services/image/parelall-scroll/5(1).jpg";
import Img6 from "./home/Services/image/parelall-scroll/6(1).jpg";
import Img7 from "./home/Services/image/parelall-scroll/7(1).jpg";
import Img8 from "./home/Services/image/parelall-scroll/8(1).jpg";
import Img9 from "./home/Services/image/parelall-scroll/9(1).jpg";
import Img10 from "./home/Services/image/parelall-scroll/10(1).jpg";
import Img11 from "./home/Services/image/parelall-scroll/11(1).png";
import Img12 from "./home/Services/image/parelall-scroll/12(1).jpg";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ y: x }} className="flex">
          <img src={Img0} alt="" width={700} />
        </motion.div>
      </div>
    </section>
  );
};

export default Example;
