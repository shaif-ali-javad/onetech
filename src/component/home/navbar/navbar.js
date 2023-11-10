// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";
// import logo from "./image/Artboard 1@00x.png";

// class Navbar extends Component {
//   state = { clicked: false };
//   handleclick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };
//   render() {
//     return (
//       <>
//         <nav>
//           <a href="/">
//             <img src={logo} alt="logo" />
//           </a>
//           <div>
//             <ul
//               id="navbar"
//               className={this.state.clicked ? "#navbar active" : "#navbar"}
//             >
//               <li>
//                 <Link className="active link" to="/">
//                   HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/services">
//                   SERVICES
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/about">
//                   ABOUT US
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/contact">
//                   CONTACT US
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div id="mobile" onClick={this.handleclick}>
//             <i
//               id="bar"
//               className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
//             ></i>
//           </div>
//         </nav>
//       </>
//     );
//   }
// }
// export default Navbar;

import React, { Component } from "react";
import "./navbar1.css";
import { NavbarData } from "./navbarData";
import logo from "./image/Artboard 1@00x.png";

class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="navbar">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <ul
          className={this.state.clicked ? "navbarlist active1" : "navbarlist"}
        >
          ;
          {NavbarData.map((val, key) => {
            return (
              <>
                <li
                  className="row"
                  id={window.location.pathname == val.link ? "active" : ""}
                  key={key}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </li>
              </>
            );
          })}
          ;
        </ul>
        <div id="mobile" onClick={this.handleclick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </div>
    );
  }
}
export default Navbar;
