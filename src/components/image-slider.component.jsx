import React, { useState } from 'react'

const ImageSlider = ({slides, children}) => {
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
        <div className='absolute top-1/2 left-2 -translate-y-1/2 text-white text-5xl z-10 cursor-pointer' onClick={goToPrevSlide}>
            ‹
        </div>
        <div className='absolute top-1/2 right-2 -translate-y-1/2 text-white text-5xl z-10 cursor-pointer' onClick={goToNextSlide}>
            ›
        </div>
        <div className='w-full h-full bg-center bg-cover' style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
            <div className='bg-black bg-opacity-55 h-full'>
                <div className=' py-28 text-center w-[80%] mx-auto md:mx-0 md:text-left md:pl-20 md:w-[50%]'>
                    <div className='text-white text-4xl font-bold'>
                        <h1>{slides[currentIndex].text}</h1>
                    </div>
                    <p className='text-white'>
                        {slides[currentIndex].subText}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageSlider