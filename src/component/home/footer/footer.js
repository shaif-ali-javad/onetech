import React, { Component } from "react";
import "./footer.css";
export class Footer extends Component {
  render() {
    return (
      <div class="">
        <footer class="text-lg-left  style0">
          <section class="justify-content-between p-4 style1">
            <div class="text-center me-5">
              <span>Get connected with us on social networks</span>
            </div>
            <div className="">
              <div class="row text-center mt-5">
                <a href="" class="col-2 text-white me-0">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" class="col-2 text-white me-0">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="" class="col-2 text-white me-0">
                  <i class="fab fa-google"></i>
                </a>
                <a href="" class="col-2 text-white me-0">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="" class="col-2 text-white me-0">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="" class="col-2 text-white me-0">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </section>

          <div class="mx-auto mt-5 container">
            <h6 class="text-uppercase fw-bold">Services</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto style2" />
            <div class="row">
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="service-link">
                  Office Automation
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="service-link">
                  Software Solutions
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="service-link">
                  AV Solutions
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="service-link">
                  Structured Cabling
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="service-link">
                  ELV Systems
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="service-link">
                  Home Automation
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="service-link">
                  Cloud Services
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="service-link">
                  Maintenance & Support
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="service-link">
                  AI Based Solutions
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="service-link">
                  Data Centre Solutions
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="service-link">
                  Microsoft Azure / Office 365
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="service-link">
                  Backup and Disaster Recovery Management
                </a>
              </p>
            </div>
          </div>

          <section class="">
            <div class="container">
              <div class="mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mt-4">Contact</h6>
                <hr class="mb-4 mt-0 d-inline-block  style2" />
                <div class="row">
                  <p class="d-flex col-12 col-lg-4">
                    <i class="fas fa-phone mr-3"></i>+971 50 415 3141
                  </p>
                  <p class="d-flex col-12 col-lg-4">
                    <i class="fas fa-envelope mr-3"></i> sales@onetechuae.com
                  </p>
                  <p class="d-flex col-12 col-lg-4">
                    <i class="fas fa-home mr-3"></i> G11, Madina Mall, Muhaisnah
                    4, P.O Box: 120735 Dubai-UAE
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div class="text-center p-3 style3">
            © 1990 Copyright:
            <a class="service-link" href="#!">
              onetech
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
