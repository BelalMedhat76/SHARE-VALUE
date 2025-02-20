import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ShieldCheck, Cloud, Network, Lightbulb, Atom } from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";

const accordionData = [
  {
    title: "Blockchain Security",
    description: "Enhance security with decentralized blockchain technology, ensuring data integrity and protection.",
    icon: <ShieldCheck className="text-[#FF6B6B] w-6 h-6 mr-3" />,
  },
  {
    title: "Cloud Decentralization",
    description: "Leverage decentralized cloud computing to eliminate single points of failure and improve efficiency.",
    icon: <Cloud className="text-[#4ECDC4] w-6 h-6 mr-3" />,
  },
  {
    title: "Smart Devices & IoT",
    description: "Integrating blockchain with IoT to provide enhanced security and data accuracy across devices.",
    icon: <Network className="text-[#FFE66D] w-6 h-6 mr-3" />,
  },
  {
    title: "Innovation Hub",
    description: "A platform for hackathons, collaboration, and idea-sharing.",
    icon: <Atom className="text-[#6B5B95] w-6 h-6 mr-3" />,
  },
  {
    title: "Empowering Creators",
    description: "Turn ideas into reality and shape the future of DeWorld.",
    icon: <Lightbulb className="text-[#FF6F61] w-6 h-6 mr-3" />,
  },
];

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#376959] via-[#774f4b] to-[#8ea38f] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl text-center mb-20 font-bold bg-gradient-to-r from-[#f1e9e0] via-[#68b3a1] to-[#293b37] bg-clip-text text-transparent"
          data-aos="zoom-in"
        >
          Our Technology Stack
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Accordion */}
          <div className="space-y-4 flex flex-col justify-center" data-aos="zoom-in-up">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-500 dark:border-gray-700 rounded-lg overflow-hidden shadow-md transition-all duration-500"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left text-white hover:bg-opacity-80 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="flex items-center text-lg font-medium">
                    {item.icon} {item.title}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-white" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-white" />
                  )}
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 text-gray-300">{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section - Same Height as Accordion */}
          <div className="relative flex flex-col justify-center h-full" data-aos="zoom-out">
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
              alt="Technology Stack"
              className="w-full h-full object-fill rounded-xl shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Advanced Technology</h3>
              <p className="text-gray-200">
                Powering the future of decentralized systems with cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
