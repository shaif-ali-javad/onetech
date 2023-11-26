import { useEffect, useRef } from "react";
import "./framer-m.css";
// import "./home/Services/img-component/img.css";

// import "aos/dist/aos.css";
// import Aos from "aos";

import Img_txt from "./home/Services/img-component/img-txt";

import Img0 from "./home/Services/img-component/img0";
import Img1 from "./home/Services/img-component/img1";
import Img2 from "./home/Services/img-component/img2";
import Img3 from "./home/Services/img-component/img3";
import Img4 from "./home/Services/img-component/img4";
import Img5 from "./home/Services/img-component/img5";
import Img6 from "./home/Services/img-component/img6";
import Img7 from "./home/Services/img-component/img7";
import Img8 from "./home/Services/img-component/img8";
import Img9 from "./home/Services/img-component/img9";
import Img10 from "./home/Services/img-component/img10";
import Img11 from "./home/Services/img-component/img11";
import Img12 from "./home/Services/img-component/img12";

// import Img0 from "./home/Services/image/parelall-scroll/0(1).jpg";
// import Img1 from "./home/Services/image/parelall-scroll/1(1).jpg";
// import Img2 from "./home/Services/image/parelall-scroll/2(1).jpg";
// import Img3 from "./home/Services/image/parelall-scroll/3(1).jpg";
// import Img4 from "./home/Services/image/parelall-scroll/4.jpg";
// import Img5 from "./home/Services/image/parelall-scroll/5(1).jpg";
// import Img6 from "./home/Services/image/parelall-scroll/6(1).jpg";
// import Img7 from "./home/Services/image/parelall-scroll/7(1).jpg";
// import Img8 from "./home/Services/image/parelall-scroll/8(1).jpg";
// import Img9 from "./home/Services/image/parelall-scroll/9(1).jpg";
// import Img10 from "./home/Services/image/parelall-scroll/10(1).jpg";
// import Img11 from "./home/Services/image/parelall-scroll/11(1).png";
// import Img12 from "./home/Services/image/parelall-scroll/12(1).jpg";

import { motion, useTransform } from "framer-motion";
function ServicesPage() {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll(() => {
  //   target: ref;
  //   offset: ["start start", "end start"];
  // });
  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <>
      <div className="App">
        <motion.h1 className="box-h">
          <Img_txt />
        </motion.h1>
        <div className="grid-container">
          <div className="line">
            <h1 className="text-red-500">Value Added Range of ICT Solutions</h1>
            <p className="">
              Providing you best-in-class Communication & Technology Solutions
              to meet
              <br /> today’s business development challenges
            </p>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // style={{ y: backgroundY }}
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              <Img0 />
            </div>
            <div className="office-automation">
              <h3 className="">Office Automation</h3>
              <p className="">
                Maximize office productivity and streamline workflow with an
                efficient fleet of office equipment including Colour & B/W
                Multifunctional Printers.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: 200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              <Img1 />
            </div>
            <div className="office-automation">
              <h3 className="">Software Solutions</h3>
              <p>
                Enabling Digital Transformation of Organizations for enhanced
                Customer Experience & smarter Business Processes leading to
                tangible business outcomes.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              <Img2 />
            </div>
            <div className="office-automation">
              <h3 className="">AV Solutions</h3>
              <p>
                Your System Integrator & Technology Partner offers rich
                experience from Pre-Project Consulting & Designing, to complete
                Project Management.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: 200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              <Img3 />
            </div>
            <div className="office-automation">
              <h3 className="">Structured Cabling</h3>
              <p>
                Maximize office productivity and streamline workflow with an
                efficient fleet of office equipment including Colour & B/W
                Multifunctional Printers.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              <Img4 />
            </div>
            <div className="office-automation">
              <h3 className="">ELV Systems</h3>
              <p>
                ELV or Extra Low Voltage systems is a huge industry in itself
                Onetech is proud of the fact that we have carried out multiple
                projects related to ELV Systems successfully..
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: 200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              <Img5 />
            </div>
            <div className="office-automation">
              <h3 className="">Backup and Disaster Recovery Management</h3>
              <p>
                When a Corporate has a running system Disaster Management is an
                essential part of it, which also includes Data Backup and
                Recovery. Onetech has a team of highly skilled professionals
                that has enabled multiple corporates for implementing Data
                Recovery and Disaster Management Systems.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              <Img6 />
            </div>
            <div className="office-automation">
              <h3 className="">Home Automation</h3>
              <p>
                As the world is continuously progressing and working on making
                more and more things automated Home Automation is a huge
                concept. Onetech has received a lot of appreciation when it
                comes to the implementation of Home Automation Systems from the
                beginning right till the handover. Our services include Air
                Conditioning Control, Lighting Control, Curtain Control, Gate
                Barrier Control, Audio/Visual Control and Satellite Connection.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: 200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              <Img7 />
            </div>
            <div className="office-automation">
              <h3 className="">Cloud Services</h3>
              <p>
                Cloud Services is something that is continuously growing every
                day. Onetech has partnered with a lot of multinational firms
                like Microsoft and CISCO. We take pride in our specialist team
                of Microsoft Azure and Microsoft Office 365 whether it is a one
                time sale or subscription-based services or SAAS ( Software as a
                Subscription ) Onetech has all the solutions for you.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              <Img8 />
            </div>
            <div className="office-automation">
              <h3 className="">Maintenance & Support</h3>
              <p>
                Onetech has a competitive and qualified team of technicians to
                support all your IT needs. Whether it is Annual Maintenance
                Contract on-call basis, short project, HR Augmentation, Monthly
                Contract or Support Visits. We are only a call away, give us a
                call and let us help you. We’ll make sure that you don’t have to
                worry about IT issues as we are available daily, weekly and
                monthly basis.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              <Img9 />
            </div>
            <div className="office-automation">
              <h3 className="">AI Based Solutions</h3>
              <p>
                AI stands for Artificial Intelligence it is the basis of almost
                everything in this world. Onetech has been pr oviding AI
                services that has a huge portfolio of successful AI
                Implementation projects.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              <Img10 />
            </div>
            <div className="Data-Centre-Solutions">
              <h3 className="">Data Centre Solutions</h3>
              <p>
                Data Center Solution is a combined form of software, hardware,
                electrical, data and voice solutions. Whether it is right from
                the start i.e. commissioning of data center or upgrading to new
                technology Onetech has proved itself to be the best in business
                when it comes to Data Centers. Onetech has a team of
                professional CDCDP ( Certified Data Center Professional ) and we
                can provide Data Center services right from designing and
                commissioning.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: 200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              <Img11 />
            </div>
            <div className="office-automation">
              <h3 className="">Microsoft Azure / Office 365</h3>
              <p>
                Microsoft 365 and Azure are software programs that are helping
                in making the work and implementation easier and faster. Onetech
                has worked with these software programs and their
                implementations and finding solutions for multiple clients.
                These software programs are helping in making the processes
                easier
              </p>
            </div>
          </div>

          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: 200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              <Img12 />
            </div>
            <div className="office-automation">
              <h3 className="">Web development</h3>
              <p>
                Web development services help create all types of web-based
                software and ensure great experience for web users. Different
                types of web solutions may seem similar from the outside but we
                approach them differently and know what factors are winning in
                each case.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ServicesPage;
