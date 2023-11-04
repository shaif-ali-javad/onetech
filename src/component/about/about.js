import React, { Component } from "react";
import "./about.css";

export class About extends Component {
  render() {
    return (
      <>
        <section class="course container-fluid">
          <div class="heading">
            <h1>
              Onetech Technologies is a Systems Integrator focused on advancing
              human experience through IT enabled Innovation
            </h1>
          </div>
          <div class="text row ml-1">
            <div class="text-center col-12 col-lg-5">
              <img class="img-fluid" src="image/About-Us-400x324.jpg" alt="" />
            </div>
            <div class="col-12 col-lg-7">
              <p>
                With a proven track record spanning over two decades, Onetech
                Technologies brings forth a wide range of high end products and
                services that address all the present and future technology
                needs for your business. Our key areas of expertise include
                Office Automation Solutions (MFP’s, Scanners & Printers),
                Currency Handling Solutions, CCTV & Security Solutions,
                Audio-Visual Solutions, Telecom & PABX, IT Infrastructure,
                Cloud, ERP, IoT, Blockchain, Mobility, E-commerce, Enterprise
                Content Management, Business Process Management, Robotic Process
                Automation and Business Analytics & Intelligence Solutions. We
                combine products that lead the industry along with System
                Integrator Services from our accredited and experienced design
                and delivery team to offer Customers a seamless experience.
                Headquartered in Dubai, we are a 100% local company with a
                global outlook.
              </p>
            </div>
          </div>
        </section>
        <section class="mv container-fluid">
          <div class="mission">
            <h1>Mission</h1>
            <p>
              Our mission is to offer complete and innovative IT solutions and
              services to the clients in order for them to achieve their
              business objectives, become their trusted partner and to keep up
              with a continuing evolving world.
            </p>
          </div>
          <div class="vision">
            <h1>Vision</h1>
            <p>
              Our Vision is to help our customers to get the most out of the
              available technologies and solutions enabling them to achieve
              their desired business goals. Our Services Technology Services Web
              Services Design & Implement Premises Wiring (SCN) Design &
              Implement Active Network Unified Communication & Collaboration
              Wireless LAN, PTP & Microwave Solution CCTV & IP Networked
              Security System Network Security
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default About;
