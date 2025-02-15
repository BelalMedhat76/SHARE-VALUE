import "./App.css";
import Hero from "./components/Hero";
import AIPoweredLearning from "./components/AIPoweredLearning";
import DecentralizedTech from "./components/DecentralizedTech";
import GlobalAccess from "./components/GlobalAccess";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AIPoweredLearning />
      <GlobalAccess />
      <DecentralizedTech />
      
      <Footer />
    </div>
  );
}

export default App;
