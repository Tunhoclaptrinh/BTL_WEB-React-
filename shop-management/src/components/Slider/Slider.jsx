import React, { useState, useEffect } from 'react';
import 'D:/0. study_material/LẬP TRÌNH WEB/BTL_WEB/source/shop-management/src/styles/global.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const images = [
    './images/1.png',
    './images/2.png',
    './images/3.png',
    './images/4.png',
    './images/5.png',
    './images/6.png',
    './images/7.png'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide effect with pause on hover
  useEffect(() => {
    if (!isPaused) {
      const slideInterval = setInterval(nextSlide, 5000);
      return () => clearInterval(slideInterval);
    }
  }, [isPaused]);

  return (
    <section 
      id="slider" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Image Slider"
    >
      <div className="aspect-ratio-169">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Slide ${index + 1}`}
            style={{ 
              transform: `translateX(${(index - currentSlide) * 100}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          />
        ))}
      </div>
      
      {/* Navigation Controls */}
      <div className="slider-nav" >
        <button onClick={prevSlide} aria-label="Previous Slide" style={{backgroundColor: 'transparent'}}>
          <span className="fas fa-chevron-left"></span>
        </button>
        <button onClick={nextSlide} aria-label="Next Slide" style={{backgroundColor: 'transparent'}}>
          <span className="fas fa-chevron-right"></span>
        </button>
      </div>
      
      {/* Dots for Slide Navigation */}
      <div className="dot-container">
        {images.map((_, index) => (
          <button 
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Slider;
