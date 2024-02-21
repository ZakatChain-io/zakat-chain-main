import React, { useState } from 'react'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevSlide = () => {
        if(currentIndex === 0) {
            setCurrentIndex(slides.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const goToNextSlide = () => {
        if(currentIndex === slides.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }
  return (
    <div className='h-full w-full relative'>
        <div className='absolute top-1/2 left-7 -translate-y-1/2 text-white text-5xl z-10 cursor-pointer' onClick={goToPrevSlide}>
            ‹
        </div>
        <div className='absolute top-1/2 right-7 -translate-y-1/2 text-white text-5xl z-10 cursor-pointer' onClick={goToNextSlide}>
            ›
        </div>
        <div className='w-full h-full bg-center bg-cover' style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
    </div>
  )
}

export default ImageSlider