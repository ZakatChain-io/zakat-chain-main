import React from "react";
import Navbar from "../../components/navbar.component";
import Footer from "../../components/footer-component";
import VideoPlayer from "../../components/video-player.component";
import { Link } from "react-router-dom";
import { FaGoogleDrive } from "react-icons/fa";

import ShowcaseGrid1 from "../../assets/showcase/showcase-grid-1.jpg";
import ShowcaseGrid2 from "../../assets/showcase/showcase-grid-2.jpg";
import ShowcaseGrid3 from "../../assets/showcase/showcase-grid-3.jpg";

// If you want to import video files instead of using public folder
// import OutreachVideo from "../../assets/videos/zakat-chain-outreach.mp4";

const Showcase = () => {
  return (
    <div>
      <div className="relative mx-[3%]">
        <Navbar />

        <div className="mx-[88px] mt-[84px] p-[10px]">
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
          <Link className="min-w-[186px] text-center text-2xl font-medium py-[10px] px-4 bg-[rgba(255,150,6,1)] text-white rounded-[5px]">
            Donate now
          </Link>
          <Link className="flex gap-x-1 text-center text-2xl font-medium border-2 rounded-[5px] border-[rgba(64,64,64,1)] py-[10px] px-4">
            View more photos <FaGoogleDrive className="self-center" />
          </Link>
        </div>

        {/** The below div is a grid but with the first column having an image span two rows and then the second column with image on the first row and another onthe second row */}
        <div className="grid grid-cols-2 gap-x-[54px] gap-y-[37px] mb-[100px] w-fit mx-[193px] max-h-[823px]">
          <div className="row-span-2 h-[823px]">
            <img
              src={ShowcaseGrid1}
              alt="showcase1"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="h-[393px]">
            <img
              src={ShowcaseGrid2}
              alt="showcase2"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="h-[393px]">
            <img
              src={ShowcaseGrid3}
              alt="showcase3"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>

        <div className="mx-auto h-[1034px] max-h-[1034px] max-w-[1360px] border-2 rounded-2 border-[rgba(75,75,75,1)] flex ">
          <div className="font-bold max-w-[410px] text-[57px] leading-[100%] text-[rgba(64,64,64,1)] ml-[40px] mr-[66px] self-center">
            Up to 1,000{" "}
            <span className="text-[rgba(255,150,6,1)]">Beneficiaries,</span> we
            can still do more!
          </div>
          <div className="max-w-[844px] h-full">
            <img
              src={ShowcaseGrid2}
              alt="showcase2"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>

        <Link className="block text-center text-2xl font-medium py-[10px] px-4 bg-[rgba(23,22,62,1)] text-white rounded-[10px] mx-auto mt-[54px] w-fit">
          View more photos
        </Link>

        <div className="max-w-[742px] mx-auto text-center mt-[74px] mb-[28px]">
          <h2 className="text-[rgba(0,0,0,1)] font-bold text-[57px] leading-[100%]">
            {" "}
            ZakatChain Outreach 1.0{" "}
          </h2>
          <p className="text-[40px] font-medium leading-[100%] text-[rgba(255,150,6,1)] mt-[4px]">
            At a glance
          </p>
        </div>

        <div
          id="zc-outreach-1.0-video"
          className="max-w-[1200px] mx-auto mb-[100px] px-4"
        >
          {/* Method 1: Using Custom VideoPlayer Component */}
          <VideoPlayer
            src="https://res.cloudinary.com/dpuzj4j34/video/upload/f_auto,q_auto/v1759439329/zc-outreach-video-1_ambkzr.mp4"
            // poster="/videos/video-thumbnail.jpg"
            className="w-full max-h-[675px] object-cover"
            onPlay={() => console.log("ZakatChain video started playing")}
            onEnded={() =>
              console.log("Video completed - maybe show donation prompt?")
            }
          />

          {/* Method 2: Direct HTML5 Video (alternative to above)
          <video 
            className="w-full h-auto rounded-[10px] shadow-lg hover:shadow-xl transition-shadow duration-300"
            controls
            poster="/videos/video-thumbnail.jpg"
            preload="metadata"
            playsInline
          >
            <source src="/videos/zakat-chain-outreach.mp4" type="video/mp4" />
            <source src="/videos/zakat-chain-outreach.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          */}

          {/* Method 3: YouTube Embed (uncomment and replace YOUR_VIDEO_ID if using YouTube)
          <div className="relative w-full bg-gray-200 rounded-[10px] overflow-hidden shadow-lg" 
               style={{paddingBottom: '56.25%'}}> 
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1"
              title="ZakatChain Outreach 1.0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          */}

          {/* Video Caption/Description */}
          {/* <div className="mt-6 text-center">
            <p className="text-lg text-[rgba(64,64,64,0.8)] leading-relaxed">
              Watch our impactful journey as we reach out to communities in
              need, providing essential support through the power of blockchain
              technology and compassionate giving.
            </p>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Showcase;
