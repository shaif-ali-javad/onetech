import React, { Component } from "react";
import "./footer.css";
export class Footer extends Component {
  render() {
    return (
      <div class="">
        <footer class="text-lg-left text-white style0">
          <section class="d-flex justify-content-between p-4 style1">
            <div class="text-left me-5">
              <span>Get connected with us on social networks:</span>
            </div>

            <div class="row">
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
          </section>

          <div class="mx-auto mt-5 container">
            <h6 class="text-uppercase fw-bold">Services</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto style2" />
            <div class="row">
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="text-white">
                  Office Automation
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="text-white">
                  Software Solutions
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="text-white">
                  AV Solutions
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="text-white">
                  Structured Cabling
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="text-white">
                  ELV Systems
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="text-white">
                  Home Automation
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="text-white">
                  Cloud Services
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="text-white">
                  Maintenance & Support
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="text-white">
                  AI Based Solutions
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="text-white">
                  Data Centre Solutions
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="text-white">
                  Microsoft Azure / Office 365
                </a>
              </p>
              <p class="col-md-6 col-lg-4">
                <a href="#!" class="text-white">
                  Backup and Disaster Recovery Management
                </a>
              </p>
            </div>
          </div>

          <section class="">
            <div class="container">
              <div class="mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold">Contact</h6>
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
            <a class="text-white" href="#!">
              onetechuae.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
