import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const ImageSlider = ({ slides, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="h-full w-full relative">
      {/* <div
        className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-5xl z-10 cursor-pointer"
        onClick={goToPrevSlide}
      >
        ‹
      </div> */}
      {/* <div
        className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-5xl z-10 cursor-pointer"
        onClick={goToNextSlide}
      >
        ›
      </div> */}
      <SwitchTransition mode="out-in">
        <CSSTransition key={currentIndex} timeout={500} classNames="">
          <div
            className="w-full h-full bg-center bg-cover transition-opacity duration-500"
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          >
            <div className="bg-black bg-opacity-55 h-full">
              <div className="py-28 text-center w-[80%] mx-auto md:mx-0 md:text-left md:pl-20 md:w-[50%]">
                <div className="text-white text-4xl font-bold">
                  <h1>{slides[currentIndex].text}</h1>
                </div>
                <p className="text-white">{slides[currentIndex].subText}</p>
              </div>
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default ImageSlider;
