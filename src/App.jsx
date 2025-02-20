import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import ProgramSection from './components/ProgramSection';
import FeatureCards from './components/FeatureCards';
import AccordionSection from './components/AccordionSection';
import Footer from './components/Footer';
import Token from './components/programs/Token'
import NFTProgramSection from './components/programs/NFT';
import Web3ProgramSection from './components/programs/Web3';
import SmartContractProgramSection from './components/programs/SmartContract';
import HeroSection from './components/Hero';
import BlockchainProgramSection from './components/programs/BlockChain';
import DeWorldProgramSection from './components/programs/Deworld';
import RWAProgramSection from './components/programs/RealWold';
import GradientCardsSection from './components/GraientCards';

function App() {
 
  return (
   <div className="min-h-screen  bg-gradient-to-r from-[#5999BB] via-[#83C7C6] via-[#D9B493]  to-[#60614B]  dark:bg-[#ad6a5be3]">
  <Navbar />
  
  {/* Hero Section */}
  <HeroSection />
  <FeatureCards />
<GradientCardsSection/>
  <Token />
  <NFTProgramSection />
  <SmartContractProgramSection />
  
  <Web3ProgramSection />
  <AccordionSection />
  <BlockchainProgramSection />
  <DeWorldProgramSection />
  <RWAProgramSection />

  <Footer />
</div>

  );
}

export default App;