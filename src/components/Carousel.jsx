import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Carousel = ({ images = [], autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-2xl group">
      {/* Images */}
      <div 
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="min-w-full h-full bg-cover bg-center relative"
            style={{ 
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(185,28,28,0.3) 50%, rgba(0,0,0,0.4) 100%), url('${image.url}')`
            }}
          >
            {image.title && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-8 animate-fadeInScale">
                  <h3 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl font-['Playfair_Display'] text-gradient-gold">
                    {image.title}
                  </h3>
                  {image.description && (
                    <p className="text-xl md:text-2xl drop-shadow-lg text-yellow-100 font-light tracking-wide">
                      {image.description}
                    </p>
                  )}
                </div>
              </div>
            )}
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hover:scale-110 transform"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hover:scale-110 transform"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                index === currentIndex 
                  ? 'bg-white scale-125 border-white shadow-lg' 
                  : 'bg-white/50 hover:bg-white/75 border-white/50 hover:border-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
