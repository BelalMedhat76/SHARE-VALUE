import React from 'react';
import { ArrowRight, Coins, Code2, KeyRound } from 'lucide-react'; // New Animated Icons
import token from '../../images/token.webp';

const ProgramSection = () => {
  const data = {
    title: 'Token Programs',
    image: token,
    levels: [
      {
        title: "Basic",
        description: "Understand what tokens are and how they work in blockchain ecosystems.",
        icon: <Coins className="w-8 h-8 text-blue-500 transform transition-transform duration-300 hover:scale-125" />,
        delay: "100",
      },
      {
        title: "Mid",
        description: "Learn how to create and manage your own tokens.",
        icon: <Code2 className="w-8 h-8 text-green-500 transform transition-transform duration-300 hover:rotate-12" />,
        delay: "200",
      },
      {
        title: "Start Your Journey",
        description: "Master advanced tokenomics, token distribution, and security.",
        icon: <KeyRound className="w-8 h-8 text-purple-500 transform transition-transform duration-300 hover:-translate-y-1" />,
        delay: "300",
      },
    ],
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <div data-aos="fade-up">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
     
        {/* Text Content */}
        <div className="space-y-8">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#60614B] via-[#5999BB] to-[#b63b1fde] bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            {data.title}
          </h2>

          {/* Levels */}
          <div className="space-y-6">
            {data.levels.map((level, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 p-4 rounded-lg  dark:bg-gray-800 shadow-md transition-all duration-300 dark:hover:bg-gray-700 hover:scale-105"
                data-aos="fade-up" data-aos-delay={level.delay}
              >
                <span data-aos="zoom-in" data-aos-delay={level.delay}>
                  {level.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-white dark:text-white">{level.title}</h3>
                  <p className="text-gray-800 dark:text-gray-400">{level.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <button 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#5999BB] via-[#ad6a5be3] to-[#B3E8D6] transition-all duration-300 hover:scale-105 hover:from-[#457A9E] hover:via-[#8c5447] hover:to-[#97C8B7]"
            data-aos="fade-down" data-aos-delay="50"
          >
            Learn More <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
