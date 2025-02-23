import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ShieldCheck, Cloud, Network, Lightbulb, Atom } from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";

const accordionData = [
  {
    title: "Shape The Future",
    description: " Be part of the next-generation decentralized education revolution. Bring your skills, contribute to the growth, and shape the future of learning.",
    icon: <ShieldCheck className="text-[#FF6B6B] w-6 h-6 mr-3" />,
  },
  {
    title: "Share The Value",
    description: " Understand and actively participate in the value-sharing ecosystem. Innovate, create, and share with a community focused on empowering everyone.",
    icon: <Cloud className="text-[#4ECDC4] w-6 h-6 mr-3" />,
  },
  {
    title: "Start Early And Lead The Change",
    description: "Get involved now and gain early access to the future of education and blockchain. Be the first to shape the way the world learns and shares knowledge.",
    icon: <Network className="text-[#FFE66D] w-6 h-6 mr-3" />,
  },
  {
    title: "Empower Your Journey",
    description: "Whether you're new to space or an expert, our AI tools empower you to learn, create, and innovate—anytime, anywhere, for everyone. Build and innovate on the DeepRoots Blockchain for DeWorld, transforming industries with secure, decentralized systems.",
    icon: <Atom className="text-[#6B5B95] w-6 h-6 mr-3" />,
  },
  {
    title: "Collaborate & Grow",
    description: "Whether you're new to space or an expert, our AI tools empower you to learn, create, and innovate—anytime, anywhere, for everyone. Build and innovate on the DeepRoots Blockchain for DeWorld, transforming industries with secure, decentralized systems",
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#2a4858] via-[#60614B] to-[#2c2e12be] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12" data-aos="zoom-in">
        <h2  
                      style={{ fontFamily: "Times New Roman, serif" }}

        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#9a9c6e] via-[#497c97] to-[#85851d] bg-clip-text text-transparent">
         From People To People
        </h2>
        <p className="text-lg text-gray-800 font-bold dark:text-gray-900 max-w-2xl mx-auto mt-4">
        Everyone AnytimeAnywhere        </p>
      </div>

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
          <div className="relative flex flex-col justify-center h-full" data-aos="zoom-in">
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
