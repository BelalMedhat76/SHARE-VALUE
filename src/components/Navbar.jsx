// import React, { useState, useEffect } from 'react';
// import { Menu, X, Moon, Sun, Globe, Mouse } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDark, setIsDark] = useState(() => {
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem('theme') === 'dark' ||
//         (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
//     }
//     return false;
//   });

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [isDark]);

//   return (
//     <nav className="fixed w-full  bg-gradient-to-r from-[#5999BB]  via-[#60614B] via-[#60614B -> #60614B]  dark:bg-gray-900/80 backdrop-blur-sm z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold bg-gradient-to-r from-[#60614B] via-[#5999BB] via-[#0f4437] to-[#0f4437] bg-clip-text text-transparent  dark:text-indigo-400">Share Value</h1>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#discover" className="text-[#B3E8D6] font-bold dark:text-gray-300 hover:text-[#A59A77] dark:hover:text-indigo-400">
//               Discover
//             </a>
//             <a href="#deworld" className="text-[#B3E8D6] font-bold dark:text-gray-300 hover:text-[#A59A77] dark:hover:text-indigo-400">
//               DeWorld
//             </a>
//             <a href="#community" className="text-[#B3E8D6] font-bold dark:text-gray-300 hover:text-[#A59A77] dark:hover:text-indigo-400">
//               Community
//             </a>
//           </div>

//           {/* Right Icons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
//               <Mouse className="w-5 h-5 text-[#B3E8D6] dark:text-gray-400" />
//             </button>
//             <button 
//               onClick={() => setIsDark(!isDark)} 
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               {isDark ? (
//                 <Sun className="w-5 h-5 text-[#B3E8D6] dark:text-gray-400" />
//               ) : (
//                 <Moon className="w-5 h-5 text-[#B3E8D6] dark:text-gray-400" />
//               )}
//             </button>
//             <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
//               <Globe className="w-5 h-5 text-[#B3E8D6] dark:text-gray-400" />
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a
//               href="#discover"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
//             >
//               Discover
//             </a>
//             <a
//               href="#deworld"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
//             >
//               DeWorld
//             </a>
//             <a
//               href="#community"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
//             >
//               Community
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe, Mic, MicOff } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [isMicActive, setIsMicActive] = useState(false); // Toggle for Microphone

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <nav className="fixed w-full bg-gradient-to-r from-[#5999BB] via-[#60614B] via-[#60614B ->rgb(68, 70, 44)] dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#60614B] via-[#132a36] via-[#0f4437] to-[#0f4437] bg-clip-text text-transparent dark:text-indigo-400">
              Share Value
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#discover" className="text-[#B3E8D6] font-bold dark:text-gray-300 hover:text-[#A59A77] dark:hover:text-indigo-400">
              Discover
            </a>
            <a href="#deworld" className="text-[#B3E8D6] font-bold dark:text-gray-300 hover:text-[#A59A77] dark:hover:text-indigo-400">
              DeWorld
            </a>
            <a href="#community" className="text-[#B3E8D6] font-bold dark:text-gray-300 hover:text-[#A59A77] dark:hover:text-indigo-400">
              Community
            </a>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Toggle Microphone Icon */}
            <button 
              className={`p-2 rounded-full transition ${
                isMicActive ? 'bg-red-500/20' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              onClick={() => setIsMicActive(!isMicActive)}
            >
              {isMicActive ? (
                <Mic className="w-5 h-5 text-red-500 dark:text-red-400 animate-pulse" />
              ) : (
                <MicOff className="w-5 h-5 text-[#B3E8D6] dark:text-gray-400" />
              )}
            </button>

            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-[#B3E8D6] dark:text-gray-400" />
              ) : (
                <Moon className="w-5 h-5 text-[#B3E8D6] dark:text-gray-400" />
              )}
            </button>

            {/* Language Icon */}
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <Globe className="w-5 h-5 text-[#B3E8D6] dark:text-gray-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#discover"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Discover
            </a>
            <a
              href="#deworld"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              DeWorld
            </a>
            <a
              href="#community"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Community
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
