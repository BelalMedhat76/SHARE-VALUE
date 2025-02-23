import React from "react";
import { ChevronRight } from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";

const FeatureCards = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      title: "Simple to Use Anywhere",
      description: "No technical knowledge or complexity required.",
      image: card1,
      bgColor: "bg-[#5999BB]",
      gradient: "bg-gradient-to-r from-[#5999BB] to-[#406D89]",
    },
    {
      title: "Easy to Learn Anytime",
      description: "Simple language that anyone can understand.",
      image: card2,
      bgColor: "bg-[#83C7C6]",
      gradient: "bg-gradient-to-r from-[#83C7C6] to-[#5EA9A8]",
    },
    {
      title: "AI-Powered Guidance for Everyone",
      description:
        "Clear, step-by-step direction to guide you every step of the way.",
      image: card3,
      bgColor: "bg-[#D9B493]",
      gradient: "bg-gradient-to-r from-[#D9B493] to-[#B7856D]",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center w-3/4 m-auto mb-10">
        <h2
                      style={{ fontFamily: "Times New Roman, serif" }}

          className="text-3xl mb-5 md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#cfd472] via-[#185272] to-[#cf5539] bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          SHARE VALUE
        </h2>
        <p className="font-bold">
          "An Online Education Platform To Learn, Create, Share, And Innovate,
          Powered By Artificial Intelligence For everyone, Anytime, Anywhere, In
          DeWorld."
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${feature.bgColor} relative overflow-hidden flex flex-col justify-between`}
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
          >
            {/* Title */}
            <h3  
            
            className="text-lg  font-bold text-[#000000] mb-4 text-center">
              {feature.title}
            </h3>

            {/* Image */}
            <div className="flex justify-center my-4">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-70 h-[200px] object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-[#221b1b] text-sm text-center mb-4">
              {feature.description}
            </p>

            {/* Button with Dynamic Title */}
            <button
              className={`w-full text-white font-bold py-3 rounded-lg transition-transform transform hover:scale-105 ${feature.gradient}`}
            >
              {feature.title}
            </button>

            {/* Chevron Icon */}
            <div className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-125">
              <ChevronRight size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
