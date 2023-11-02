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
import Home from "./component/home.js";
import About from "./component/about.js";

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
