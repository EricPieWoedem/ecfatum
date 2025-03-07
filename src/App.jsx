import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import ServicesSection from "./components/Services/Services";
import About from "./components/About/About";
import { Contact } from "./components/Contact";
import TopLoadingBar from "./components/TopLoadingBar";
import Footer from "./components/Footer";
import About_Page from "./components/About_Page";
import {Partners} from "./components/Partners";
import { Projects } from "./components/Projects"; 

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <ServicesSection />
      <Partners/>
      <Projects/>
    </>
  );
};

const App = () => {
  return (
    <>
      <TopLoadingBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about_page" element={<About_Page/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
