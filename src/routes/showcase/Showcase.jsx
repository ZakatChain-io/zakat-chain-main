import React from "react";
import Navbar from "../../components/navbar.component";
import Footer from "../../components/footer-component";
import { Link } from "react-router-dom";
import { FaGoogleDrive } from 'react-icons/fa';

import ShowcaseGrid1 from "../../assets/showcase/showcase-grid-1.jpg";
import ShowcaseGrid2 from "../../assets/showcase/showcase-grid-2.jpg";
import ShowcaseGrid3 from "../../assets/showcase/showcase-grid-3.jpg";

const Showcase = () => {
  return (
    <div>
      <div className="relative mx-[3%]">
        <Navbar />

        <div className="mx-[88px] mt-[184px] p-[10px]">
          <h1 className="mb-5 text-[rgba(64,64,64,1)] font-bold text-[57px] leading-[64px] text-center">
            Help us keep making a difference to our our{" "}
            <span className="text-[rgba(255,150,6,1)]">Community </span> and{" "}
            <span className="text-[rgba(255,150,6,1)]">Beyond</span>
          </h1>
          <p className="text-2xl leading-9 text-center text-[rgba(64,64,64,1)]">
            Since our launch, with the help of our donors, we've proudly fed
            over 150 people in need. Join us as we continue our mission to
            provide nourishment, hope, and support to those who need it most.
          </p>
        </div>

        <div className="mx-auto w-fit flex gap-x-[60px] mt-[32px] mb-[85px]">
            <Link className="min-w-[186px] text-center text-2xl font-medium py-[10px] px-4 bg-[rgba(255,150,6,1)] text-white rounded-[5px]">Donate now</Link>
            <Link className="flex gap-x-1 text-center text-2xl font-medium border-2 rounded-[5px] border-[rgba(64,64,64,1)] py-[10px] px-4">View more photos  <FaGoogleDrive className="self-center" /></Link>
        </div>

        {/** The below div is a grid but with the first column having an image span two rows and then the second column with image on the first row and another onthe second row */}
        <div className="grid grid-cols-2 gap-x-[54px] gap-y-[37px] mb-[100px] w-fit mx-[193px] max-h-[823px]">
            <div className="row-span-2 h-[823px]">
                <img src={ShowcaseGrid1} alt="showcase1" className="w-full h-full object-cover rounded-[10px]" />
            </div>
            <div className="h-[393px]">
                <img src={ShowcaseGrid2} alt="showcase2" className="w-full h-full object-cover rounded-[10px]" />
            </div>
            <div className="h-[393px]">
                <img src={ShowcaseGrid3} alt="showcase3" className="w-full h-full object-cover rounded-[10px]" />
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Showcase;
