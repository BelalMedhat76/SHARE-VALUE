import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Globe,
  Mic,
  MicOff,
  MicIcon,
  Mic2,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const [isMicActive, setIsMicActive] = useState(false);

  // useEffect(() => {
  //   if (isDark) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('theme', 'light');
  //   }
  // }, [isDark]);

  return (
    <nav className="fixed w-full bg-gradient-to-r from-[#5999BB] via-[#60614B] to-[#676b3fe7] dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-3xl font-extrabold bg-gradient-to-r from-[#60614B] via-[#2a688a] to-[#a5331aec]  bg-clip-text text-transparent dark:text-indigo-400"
          >
            SHARE VALUE
          </h1>
    
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#discover"
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-[#B3E8D6] text-3xl font-bold hover:text-[#A59A77] dark:hover:text-indigo-400"
            >
              Discover
            </a>
            <a
              href="#deworld"
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-[#B3E8D6]  text-3xl font-bold hover:text-[#A59A77] dark:hover:text-indigo-400"
            >
              DeWorld
            </a>
            <a
              href="#community"
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-[#B3E8D6] text-3xl font-bold hover:text-[#A59A77] dark:hover:text-indigo-400"
            >
              Community
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full dark:hover:bg-gray-800"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-[#B3E8D6]" />
              ) : (
                <Moon className="w-5 h-5 text-[#B3E8D6]" />
              )}
            </button>
            <button className="p-2 rounded-full  dark:hover:bg-gray-800">
              <Globe className="w-5 h-5 text-[#B3E8D6]" />
            </button>
            <button
              onClick={() => setIsMicActive(!isMicActive)}
              className={`p-2 rounded-full ${
                isMicActive ? "bg-red-500/20" : " dark:hover:bg-gray-800"
              }`}
            >
              {isMicActive ? (
                <Mic className="w-5 h-5 text-red-500 animate-pulse" />
              ) : (
                <MicOff className="w-5 h-5 text-[#B3E8D6]" />
              )}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500  dark:hover:bg-gray-800"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#5999BB] via-[#60614B] to-[#44462C] shadow-md py-4 px-6 space-y-4 absolute w-full left-0 top-16">
          <a
            href="#discover"
            className="block text-[#B3E8D6] font-bold hover:text-[#A59A77] dark:hover:text-indigo-400"
          >
            Discover
          </a>
          <a
            href="#deworld"
            className="block text-[#B3E8D6] font-bold hover:text-[#A59A77] dark:hover:text-indigo-400"
          >
            DeWorld
          </a>
          <a
            href="#community"
            className="block text-[#B3E8D6] font-bold hover:text-[#A59A77] dark:hover:text-indigo-400"
          >
            Community
          </a>
          <div className="flex justify-around pt-4 border-t border-gray-300 dark:border-gray-700">
            <button
              onClick={() => setIsMicActive(!isMicActive)}
              className="p-2 rounded-full"
            >
              {isMicActive ? (
                <Mic className="w-6 h-6 text-red-500 animate-pulse" />
              ) : (
                <MicOff className="w-6 h-6 text-[#B3E8D6]" />
              )}
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full"
            >
              {isDark ? (
                <Sun className="w-6 h-6 text-[#B3E8D6]" />
              ) : (
                <Moon className="w-6 h-6 text-[#B3E8D6]" />
              )}
            </button>
            <button className="p-2 rounded-full">
              <Globe className="w-6 h-6 text-[#B3E8D6]" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
