import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";

function App() {
  return (
    <div className="">
      <div className="z-20">
        <Navbar />
      </div>
      <HeroSection />
      <Services />
    </div>
  );
}

export default App;
