import React from "react";
import Navbar from "./home/navbar/navbar";
import Services from "./home/Services/services";
import Services1 from "./home/services1/services";
import Services2 from "./home/services2/services";
import Partners from "./home/partners/partners";
import Footer from "./home/footer/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Services />
      <Services1 />
      <Services2 />
      <Partners />
      <Footer />
    </div>
  );
}

export default Home;
