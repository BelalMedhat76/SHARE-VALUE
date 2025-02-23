import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Globe, Lightbulb, Users, Compass, Star } from "lucide-react";
import foot2 from '../images/foot2.png'
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#5999BB] via-[#60614B] to-[#60614B] text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        
        {/* Company Info */}
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="flex justify-center md:justify-start items-center space-x-3">
            <Globe className="w-7 h-7 text-teal-300" />
            <h3 
              style={{ fontFamily: "Times New Roman, serif" }} 
              className="text-2xl font-extrabold bg-gradient-to-r from-[#2b2c0c] via-[#094261] to-[#6d200fec]  bg-clip-text text-transparent">
              SHARE VALUE
            </h3>
          </div>
          <p className="text-gray-200 mt-3 leading-relaxed">
            Empowering the future through blockchain innovation and decentralized solutions.
          </p>

          {/* Image logo directly under the SHARE VALUE text */}
          <div className="flex justify-center py-4">
            <img
              src={foot2} // Replace with your logo's path
              alt="Share Value Logo"
              className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64" // Responsive image sizes
            />
          </div>
        </div>

        {/* Discover Section */}
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="flex justify-center md:justify-start items-center space-x-3">
            <Compass className="w-7 h-7 text-blue-300" />
            <h3 className="text-xl font-bold">Discover</h3>
          </div>
          <ul className="mt-3 space-y-2">
            {["What is Share Value", "Get Currency of Network (DRC)", "Foundation", "Disclaimer"].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-gray-200 hover:text-white transition duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Innovation Section */}
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="flex justify-center md:justify-start items-center space-x-3">
            <Star className="w-6 h-6 text-yellow-400" /> 
            <h3 className="text-xl font-bold">Innovation</h3>
          </div>
          <ul className="mt-3 space-y-2">
            {["DEEPROOTS", "The Address", "TeleXcoin", "Deep Assets", "InnoFi", "InnoLaunch", "MetaFabric", "Rootopia", "Saxophone"].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-gray-200 hover:text-white transition duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community Section */}
        <div data-aos="fade-up" data-aos-delay="400">
          <div className="flex justify-center md:justify-start items-center space-x-3">
            <Users className="w-7 h-7 text-purple-300" />
            <h3 className="text-xl font-bold">Community</h3>
          </div>
          <ul className="mt-3 space-y-2">
            {["Career", "Saxophone Podcast", "Metafabrics", "Social Education Platform"].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-gray-200 hover:text-white transition duration-300">{item}</a>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a key={index} href="#" className="text-gray-200 hover:text-white transition duration-300 transform hover:scale-110">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 pt-8 border-t border-gray-700 text-center" data-aos="fade-up">
        <div className="flex justify-center items-center text-lg font-bold text-white space-x-2">
          <Lightbulb className="w-7 h-7 text-yellow-300" />
          <span></span>
          <h3 
              style={{ fontFamily: "Times New Roman, serif" }} 
              className="text-2xl font-extrabold bg-gradient-to-r from-[#2b2c0c] via-[#094261] to-[#6d200fec] bg-clip-text text-transparent">
SHARE VALUE (Quiz Time)
            </h3>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-200">
          {[
            "About us", "Code of Dignity", "Brand Assets", "Jobs", "Privacy Policy",
            "Terms of Service", "Cookie Policy", "Press", "Press Contact"
          ].map((item, index) => (
            <a key={index} href="#" className="hover:text-white transition duration-300">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
