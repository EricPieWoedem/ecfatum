import React, { Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection' 
import { Routes, Route, useLocation } from "react-router-dom"
import ServicesSection from './Components/Services/Services'
import About from './Components/About/About'
import { Contact } from "./components/Contact"
import TopLoadingBar from "./components/TopLoadingBar"
import Footer from './components/footer'

const App = () => {
  const location = useLocation();

  return (
    <>
      <TopLoadingBar /> {/* Shows loading bar on route change */}
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      {location.pathname !== "/contact" && (
        <>
          <About />
          <ServicesSection />
        </>
      )}
      <Footer/>
    </>
  );
};

export default App;