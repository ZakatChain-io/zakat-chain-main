import React from 'react';
import ImageSlider from './image-slider.component';
import BitcoinImg from "../assets/Bitcoin.png"
import HijabiImg from "../assets/hijabi-carousel.png";
import YourSadaqahTheirHopeImg from "../assets/your-sadaqah-their-hope-carousel.png";
import SecureSeamlessCryptoImg from "../assets/secure-seamless-crypto-integration.png";

const HeroCarousel = () => {
    const slides = [
        {url:  `${BitcoinImg}`, text: "The Future of Zakat Payment"},
        {url: `${HijabiImg}`, text: "The Future of Zakat Payment"},
        {url: `${YourSadaqahTheirHopeImg}`, text: "Your Sadaqah Their Hope"},
        {url: `${SecureSeamlessCryptoImg}`, text: "Secure and Seamless Crypto Integration"},
      ]
  return (
    <div className=''>
        <div className='h-96'>
            <ImageSlider slides={slides}/>
        </div>
    </div>
  )
}

export default HeroCarousel;