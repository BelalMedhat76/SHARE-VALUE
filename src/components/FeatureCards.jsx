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
      image: card1, // Replace with your PNG image
      bgColor: "bg-[#5999BB]",
    },
    {
      title: "Easy to Learn Anytime",
      description: "Simple language that anyone can understand.",
      image: card2,
      bgColor: "bg-[#83C7C6]",
    },
    {
      title: "AI-Powered Guidance for Everyone",
      description:
        "Clear, step-by-step direction to guide you every step of the way.",
      image: card3,
      bgColor: "bg-[#D9B493]",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="text-center w-3/4 m-auto  p-10">
    <h2
       className="text-3xl mb-5 md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#60614B] via-[#5999BB] via-[#b63b1fde] to-[#144661] bg-clip-text text-transparent"
  data-aos="fade-up"
      >
        Share Value
      </h2>
      <p>
        "An online education platform to learn, create, share, and innovate,
        powered by artificial intelligence for everyone, anytime, anywhere, in
        DeWorld."
      </p>
    </div>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${feature.bgColor} relative overflow-hidden`}
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
          >
            <h3 className="text-lg font-semibold text-[#423737] mb-4">
              {feature.title}
            </h3>
            <div className="flex justify-center my-4">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-70 h-[200px] object-contain"
              />
            </div>
            <p className="text-[#221b1b] text-sm text-center">
              {feature.description}
            </p>
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
