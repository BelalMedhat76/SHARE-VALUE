import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ProgramSection = ({ title, image, levels, isReversed }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:grid-flow-dense' : ''}`}>
        <div className={`space-y-8 ${isReversed ? 'md:col-start-2' : ''}`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="100">
              <CheckCircle className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Basic</h3>
                <p className="text-gray-600 dark:text-gray-400">{levels.basic}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="200">
              <CheckCircle className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Mid</h3>
                <p className="text-gray-600 dark:text-gray-400">{levels.mid}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="300">
              <CheckCircle className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Start Your Journey</h3>
                <p className="text-gray-600 dark:text-gray-400">{levels.journey}</p>
              </div>
            </div>
          </div>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Learn More <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
        <div className={`${isReversed ? 'md:col-start-1' : ''}`} data-aos="fade-up">
          <img
            src={image}
            alt={title}
            className="w-full h-96 object-cover rounded-xl shadow-lg transform transition-transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;