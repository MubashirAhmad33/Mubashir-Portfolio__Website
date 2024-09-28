import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ReviewSection from "./components/Reviews/ReviewSection";
import ContactForm from "./components/Contact/ContactForm";
import SatisfiedClientsSection from "./components/SatisfiedClients/SatisfiedClientsSection";
import Experience from "./components/Experience/Experience";
function App() {
  return (
    <div className="">
      <Navbar />
      <div>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ReviewSection />
        <SatisfiedClientsSection />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
