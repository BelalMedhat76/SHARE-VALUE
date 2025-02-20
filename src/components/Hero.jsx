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
          className="w-full h-full  object-fill animate-ken-burns"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5999BB]/30 to-[#17372f]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative text-center text-white px-4" data-aos="fade-up" data-aos-duration="1500">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to DeWorld
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in" data-aos="fade-up" data-aos-delay="300">
          Explore the future of blockchain technology and decentralized innovation
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-6">
          <a
            href="#learn"
            className="px-8 py-3 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg animate-fade-in"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Learn
          </a>
          <a
            href="#create"
            className="px-8 py-3 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg animate-fade-in"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            Create
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
