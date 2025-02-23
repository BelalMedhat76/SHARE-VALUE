import React from 'react';
import hero from '../images/hero.webp'
const HeroSection = () => {
  return (
    <header className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Hero background"
          className="w-full h-[100vh] bg-center bg-no-repeat bg-contain "
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5999BB]/30 to-[#17372f]/60" />
      </div>

      
    </header>
  );
};

export default HeroSection;
