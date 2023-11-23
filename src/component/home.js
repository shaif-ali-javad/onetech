import React from "react";
import Navbar from "./home/navbar/navbar";
import Services from "./home/Services/services";
import Services1 from "./home/services1/services";
import Services2 from "./home/services2/services";
import Partners from "./home/partners/partners";
import Footer from "./home/footer/footer";
import Web from "./home/web-services/web-s";
import ServicesPage from "./framer-m";

function Home() {
  return (
    <div>
      <Navbar />
      <ServicesPage />
      {/* <Services /> */}
      <Web />
      <Services1 />
      <Services2 />
      <Partners />
      <Footer />
    </div>
  );
}

export default Home;
