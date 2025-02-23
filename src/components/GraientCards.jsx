import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Network, Users, Repeat } from "lucide-react"; // New Icons

const GradientCardsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); // Runs on every scroll
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-12" data-aos="zoom-in">
        <h2  
                      style={{ fontFamily: "Times New Roman, serif" }}

        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3b3b2c] via-[#2b5064] to-[#414121] bg-clip-text text-transparent">
          Global Access & Innovation
        </h2>
        <p className="text-lg text-gray-700 font-bold dark:text-gray-300 max-w-2xl mx-auto mt-4">
          Explore How Decentralization Is Shaping A Globally Connected Future.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div
          className="bg-gradient-to-br from-[#60614B] to-[#D9B493] p-6 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105"
          data-aos="fade-up"
        >
          <div
            className="flex items-center justify-center bg-white rounded-full w-16 h-16 mx-auto mb-4 shadow-md transform transition-all duration-500 hover:rotate-12"
            data-aos="zoom-in"
          >
            <Network className="text-[#60614B] w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-white text-center">Global Connectivity</h3>
          <p className="text-white text-center mt-2">
            Empowering communities worldwide with decentralized opportunities.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-gradient-to-br from-[#5999BB] to-[#83C7C6] p-6 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105"
          data-aos="fade-down"
        >
          <div
            className="flex items-center justify-center bg-white rounded-full w-16 h-16 mx-auto mb-4 shadow-md transform transition-all duration-500 hover:scale-110"
            data-aos="flip-left"
          >
            <Users className="text-[#5999BB] w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-white text-center">Collaborative Learning</h3>
          <p className="text-white text-center mt-2">
            Mentorship and shared knowledge to drive innovation.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-gradient-to-br from-[#83C7C6] to-[#D9B493] p-6 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105"
          data-aos="fade-up"
        >
          <div
            className="flex items-center justify-center bg-white rounded-full w-16 h-16 mx-auto mb-4 shadow-md transform transition-all duration-500 hover:-rotate-12"
            data-aos="zoom-out"
          >
            <Repeat className="text-[#83C7C6] w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-white text-center">Decentralized Exchange</h3>
          <p className="text-white text-center mt-2">
            Seamless knowledge and resource sharing across borders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GradientCardsSection;
