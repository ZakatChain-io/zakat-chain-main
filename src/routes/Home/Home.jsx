import React from "react";
import Navbar from "../../components/navbar.component";
import HeroCarousel from "../../components/hero-carousel.component";
import ZakatDropdown from "../../components/zakat-dropdown.component";
import SadaqhDropdown from "../../components/sadaqh-dropdown.component";
import ProjectShowcase from "../../components/project-showcase.component";
import Footer from "../../components/footer-component";

const Home = () => {
  return (
    <div>
      <div className="mx-[3%]">
        <Navbar />
        <HeroCarousel />
        <ZakatDropdown />
        <SadaqhDropdown />
        <ProjectShowcase />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
