import React from 'react';
import { ArrowRight, Globe, Code, Layers } from 'lucide-react'; // New Icons
import web3 from '../../images/web3.webp';

const Web3ProgramSection = () => {
  const data = {
    title: 'WEB3 PROGRAM',
    image: web3,
    levels: [
      {
        title: "Basic",
        description: "Get introduced to the decentralized web and its core concepts.",
        icon: <Globe className="w-6 h-6 text-blue-500" data-aos="zoom-in" data-aos-delay="100" />,
      },
      {
        title: "Mid",
        description: "Learn to build decentralized applications (dApps).",
        icon: <Code className="w-6 h-6 text-green-500" data-aos="zoom-in" data-aos-delay="200" />,
      },
      {
        title: "Start Your Journey",
        description: "Master Web3 governance and build scalable solutions.",
        icon: <Layers className="w-6 h-6 text-purple-500" data-aos="zoom-in" data-aos-delay="300" />,
      },
    ],
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#5999BB] via-[#ad6a5be3] via-[#B3E8D6] to-[#a0946d]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 ">
        <h1   className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#60614B] via-[#2a688a] to-[#b63b1fde] bg-clip-text text-transparent"
  style={{ fontFamily: "Times New Roman, serif" }} 
  data-aos="fade-up">
  {data.title}
</h1>

          {/* Levels */}
          <div className="space-y-6">
            {data.levels.map((level, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg shadow-md bg-white/10 backdrop-blur-md dark:bg-gray-800/30"
                data-aos="fade-up" data-aos-delay={index * 100}>
                {level.icon}
                <div>
                  <h3 className="font-semibold text-lg text-white dark:text-white">{level.title}</h3>
                  <p className="text-gray-800 dark:text-gray-800">{level.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#5999BB] via-[#ad6a5be3] via-[#B3E8D6] to-[#a0946d] transition-all duration-300 transform hover:scale-105 hover:from-[#457A9E] hover:via-[#8c5447] hover:via-[#97C8B7] hover:to-[#8c8360]"
            data-aos="fade-down" data-aos-delay="50">
            Learn More <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Image Section */}
        <div data-aos="fade-up">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg transform transition-transform hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default Web3ProgramSection;
