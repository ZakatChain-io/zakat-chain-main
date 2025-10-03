import React from "react";
import ImageSlider from "./image-slider.component";
import BitcoinImg from "../assets/Bitcoin.png";
// import HijabiImg from "../assets/hijabi-carousel.png";
import YourSadaqahTheirHopeImg from "../assets/your-sadaqah-their-hope-carousel.png";
import SecureSeamlessCryptoImg from "../assets/secure-seamless-crypto-integration.png";

const HeroCarousel = () => {
  // const slides = [
  //   {
  //     url: `${BitcoinImg}`,
  //     text: "The Future of Zakat Payment",
  //     subText:
  //       "Simplify your zakat payments and experience the seamless integration of web3 technology.",
  //   },
  //   // {url: `${HijabiImg}`, text: "The Future of Zakat Payment", subText: "Simplify your zakat payments and experience the seamless integration of web3 technology."},
  //   {
  //     url: `${YourSadaqahTheirHopeImg}`,
  //     text: "Your Sadaqah Their Hope",
  //     subText:
  //       "Your Sadaqah directly supports worthy causes and empower underprivileged Muslims. ",
  //   },
  //   {
  //     url: `${SecureSeamlessCryptoImg}`,
  //     text: "Secure and Seamless Crypto Integration",
  //     subText:
  //       "Zakat Chain seamlessly integrates your crypto wallet, allowing you to fulfill your Zakat obligations and donate Sadaqah with ease",
  //   },
  // ];

  const dataText = [
    {
      text: "Donors",
      number: "100+"
    },
    {
      text: "Amount raised",
      number: "$1500+"
    },
    {
      text: "Beneficiaries",
      number: "500"
    }
  ]
  return (
    <div className="">
      {/* <div className="h-96">
        <ImageSlider slides={slides} />
      </div> */}

      <div className="max-w-[1265px] mx-auto mt-[42px] p-[10px] text-center flex flex-col items-center gap-y-[20px]">
        <h1 className="max-w-[1136px] font-bold text-[57px] leading-[64px] text-center">
          <span className="text-[rgba(255,150,6,1)]">Donate to Charity</span> on
          the Blockchain, Calculate your Zakat,{" "}
          <span className="text-[rgba(255,150,6,1)]">all in one place </span>
        </h1>

        <p className="text-2xl leading-[36px] text-center font-medium text-[rgba(23,22,62,1)]">
          Our platform allows you pay Zakat by calculating your assets using our
          in-app calculator, donate to the needy, and help build humanitarian
          projects across the globe.
        </p>
      </div>
      <div className="max-w-[838.46px] h-[813px] mx-auto mt-[48px]">
        <img
          src="/images/hero-section/Outreach.png"
          alt="Hero section"
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>

      <div className="flex justify-between items-center p-[10px] max-w-[1362px] mx-auto mt-[64px] mb-[89px]">
        {
          dataText.map((data, index) => (
            <div key={index} className="flex flex-col gap-y-4">
              <span className="text-[32px] font-medium leading-[100%] text-[rgba(23,22,62,1)] text-center">{data.text}</span>

              <span className="text-[80px] font-extrabold leading-[100%] text-[rgba(23,22,62,1)] text-center">{data.number}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default HeroCarousel;
