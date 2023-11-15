// import "./App.css";
// import Home from "./component/home";
// import Services from "./component/services";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Home path="/" />
//       <Services path="/services" />
//     </div>
//   );
// }

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Services from "./component/services";
import Contact from "./component/contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
