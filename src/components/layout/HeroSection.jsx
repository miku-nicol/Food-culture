import React, { useState, useEffect } from 'react';
import hero1 from '../../assets/casa3.jpg';
import hero2 from '../../assets/casa5.jpg';
import hero3 from '../../assets/fufu2.jpg'

function HeroSection() {
  // Array of background images
  const bgImages = [ hero1, hero2,hero3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bgImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden " id='home'>
      {/* Background Images with Crossfade Effect */}
      {bgImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl leading-tight font-heading tracking-wide">
          Food Culture
        </h1>
        
        {/* Sub-headline with your requirements */}
        <p className="text-xl sm:text-2xl md:text-3xl text-[#F8F6F0] mb-8 max-w-3xl font-body">
          Odorless, White, Hygienic and Organic Fufu
        </p>
        
        {/* Decorative Line - using brand colors */}
        <div className="flex items-center justify-center space-x-3 mb-10">
          <div className="w-16 h-1 bg-[#2D5A27]"></div> {/* Green */}
          <div className="w-16 h-1 bg-[#B22222]"></div> {/* Red */}
          <div className="w-16 h-1 bg-white"></div> {/* Black */}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="bg-[#B22222] hover:bg-[#8B1A1A] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg">
            Contact Us
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg">
            Learn More
          </button>
        </div>

        {/* Image Indicators (Dots) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {bgImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-[#B22222] w-8' 
                  : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      
    </section>
  );
}

export default HeroSection;