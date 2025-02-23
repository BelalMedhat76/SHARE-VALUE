import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import block from '../../images/block.webp'
const BlockchainProgramSection = () => {
  // Hardcoded Data for Blockchain Program
  const data = {
    title: 'BLOCKCHAIN PROGRAM',
    image: block,
    levels: {
      basic: 'Learn blockchain basics and how it works.',
      mid: 'Develop applications using blockchain technology.',
      journey: 'Explore advanced topics like consensus mechanisms and scalability.',
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
           {/* Image Section */}
           <div data-aos="fade-up">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg transform transition-transform hover:scale-105"
          />
        </div> 
        {/* Text Content */}
        <div className="space-y-8">
        <h1   className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#60614B] via-[#2a688a] to-[#b63b1fde] bg-clip-text text-transparent"
  style={{ fontFamily: "Times New Roman, serif" }} 
  data-aos="fade-up">
  {data.title}
</h1>
          <div className="space-y-6">
            <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="100">
              <CheckCircle className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Basic</h3>
                <p className="text-gray-600 dark:text-gray-400">{data.levels.basic}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="200">
              <CheckCircle className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Mid</h3>
                <p className="text-gray-600 dark:text-gray-400">{data.levels.mid}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="300">
              <CheckCircle className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Start Your Journey</h3>
                <p className="text-gray-600 dark:text-gray-400">{data.levels.journey}</p>
              </div>
            </div>
          </div>
             <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#5999BB] via-[#ad6a5be3] via-[#B3E8D6] to-[#a0946d] transition-all duration-300 transform hover:scale-105 hover:from-[#457A9E] hover:via-[#8c5447] hover:via-[#97C8B7] hover:to-[#8c8360]"
            data-aos-delay="50"
          >
            Learn More <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

   
      </div>
    </section>
  );
};

export default BlockchainProgramSection;
