import React from "react";
import ImageSlider from "./image-slider.component";
import BitcoinImg from "../assets/Bitcoin.png";
// import HijabiImg from "../assets/hijabi-carousel.png";
import YourSadaqahTheirHopeImg from "../assets/your-sadaqah-their-hope-carousel.png";
import SecureSeamlessCryptoImg from "../assets/secure-seamless-crypto-integration.png";

const HeroCarousel = () => {
  const slides = [
    {
      url: `${BitcoinImg}`,
      text: "The Future of Zakat Payment",
      subText:
        "Simplify your zakat payments and experience the seamless integration of web3 technology.",
    },
    // {url: `${HijabiImg}`, text: "The Future of Zakat Payment", subText: "Simplify your zakat payments and experience the seamless integration of web3 technology."},
    {
      url: `${YourSadaqahTheirHopeImg}`,
      text: "Your Sadaqah Their Hope",
      subText:
        "Your Sadaqah directly supports worthy causes and empower underprivileged Muslims. ",
    },
    {
      url: `${SecureSeamlessCryptoImg}`,
      text: "Secure and Seamless Crypto Integration",
      subText:
        "Zakat Chain seamlessly integrates your crypto wallet, allowing you to fulfill your Zakat obligations and donate Sadaqah with ease",
    },
  ];
  return (
    <div className="">
      <div className="h-96">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default HeroCarousel;
