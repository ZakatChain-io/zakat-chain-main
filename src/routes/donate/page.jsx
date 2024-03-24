import React from "react";
import Navbar from "../../components/navbar.component";
import HeroCarousel from "../../components/hero-carousel.component";
import Footer from "../../components/footer-component";
import Donation from "../../components/donate-section";


const Donate = () => {
  return (
    <div>
      <div className="mx-[3%]">
        <Navbar />
        <HeroCarousel />
        <div className="justify-center items-center">
          <Donation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
