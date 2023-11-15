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

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home";
const About = lazy(() => import("./component/about"));
const Services = lazy(() => import("./component/services"));
const Contact = lazy(() => import("./component/contact"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<h1>loading....</h1>}>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
