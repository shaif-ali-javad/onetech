import React, { Component } from "react";
import "./services.css";

export class Services1 extends Component {
  render() {
    return (<div className="container">
      <div class="holder">
        <div class="heading">
          <p>SERVICES WE OFFER</p>
          <h1>Solid IT Solutions That Make You Worry-Free</h1>
        </div>
        <div class="container0">
          <div class="box color">
            <img src="image/customer-service.png" alt="" />
            <h4>Complete IT Support</h4>
            <p class="p">
              We take a proactive approach to IT support and focus on what
              matters most to our customers.
            </p>
            <div class="more">
              <a class="btn">Learn more</a>
            </div>
          </div>
          <div class="box">
            <img src="image/cloud-backup-up-arrow.png" alt="" />
            <h4>Data Backup</h4>
            <p class="p">
              We can back up all your data for an affordable monthly fee, and
              our service includes a free tech support line
            </p>
            <div class="more">
              <a class="btn">Learn more</a>
            </div>
          </div>
          <div class="box">
            <img src="image/insurance.png" alt="" />
            <h4>Cyber Security</h4>
            <p class="p">
              Invest in a cyber security plan today to ensure your company has a
              solid defense against the latest threats
            </p>
            <div class="more">
              <a class="btn">Learn more</a>
            </div>
          </div>
          <div class="box">
            <img src="image/server.png" alt="" />
            <h4>Server Management</h4>
            <p class="p">
              Our team of IT professionals can manage servers and servers
              infrastructure, including Virtualization, NAS , Exchange and SQL
            </p>
            <div class="more">
              <a class="btn">Learn more</a>
            </div>
          </div>
          <div class="box">
            <img src="image/laptop.png" alt="" />
            <h4>Desktop/PC Support</h4>
            <p class="p">
              Comprehensive and trusted web-based system and computer support
              platform delivers, top quality PC and laptop help 24/7
            </p>
            <div class="more">
              <a class="btn">Learn more</a>
            </div>
          </div>
          <div class="box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1311/1311693.png"
              alt=""
            />
            <h4>Networking</h4>
            <p class="p">
              We manage your enterprise-level network with our certified staffs
              and tools that helps keep monitoring for any possible
            </p>
            <div class="more">
              <a class="btn">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Services1;
