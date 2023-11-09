import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./image/Artboard 1@00x.png";

class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <Link className="active link" to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="link" to="/services">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleclick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
