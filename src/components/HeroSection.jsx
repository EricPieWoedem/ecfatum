import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.67, 1]);

  return (
    <div  id="home" className="relative flex flex-col items-center pt-9 lg:pt-20 overflow-hidden">

<Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: { enable: false },
    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: "#800000" },
      shape: { type: "triangle" }, 
      opacity: { value: 0.4 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
      line_linked: {
        enable: true,
        distance: 150, 
        color: "#f59e0b",
        opacity: 0.2,
        width: 1, 
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", 
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 200, 
          line_linked: { opacity: 1 },
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true, 
  }}
  className="gradient-background absolute inset-0 w-full h-full -z-10 bg-gradient-to-r from-black via-[#0D0D0D] to-[#141414]  min-h-screen"
/>

<motion.h1
        className="font-semibold text-3xl w-[80%] mt-5 lg:font-bold lg:text-7xl text-center lg:w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Smart{" "}
        <span className="gradient-text">
          Solutions
        </span>{" "}
        for Smart Problems
      </motion.h1>

      <motion.p className="mt-7 w-[80%] text-center text-neutral-300 lg:mt-10 lg:w-3xl lg:text-2xl"
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 1.5 }}>
        Empowering Africa and Beyond with Smart, Sustainable Solutions for a Brighter Future.
      </motion.p>

      <motion.div className="flex justify-center my-9"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 2 }}>
        <Link to="/about_page" className="bg-gradient-to-r from-yellow-600 to-red-600 py-3 px-7 mx-3 rounded-md hover:scale-105 transition-transform duration-100"
        >
          Learn More
          </Link>
      </motion.div>

      <div className="flex items-center justify-center mx-5 my-8 ">
      <motion.div 
             style={{ scale }}
              className="rounded-2xl lg:rounded-4xl lg:w-[40%] p-1 bg-gradient-to-tr from-yellow-500 to-red-700 shadow-[5px_5px_30px_2px_rgba(255,165,0,0.3),5px_5px_30px_2px_rgba(255,0,0,0.3)]">
            <video
            autoPlay
            loop
            muted
            className="rounded-2xl lg:rounded-4xl w-full h-full"
            >
            <source src={video1} type="video/mp4" />
            Your browser does not support this feature.
            </video>
        </motion.div>
      <motion.div 
             style={{ scale }}
              className="rounded-2xl lg:rounded-4xl lg:w-[40%] p-1 bg-gradient-to-tr to-yellow-500 from-red-700 shadow-[5px_5px_30px_2px_rgba(255,165,0,0.3),5px_5px_30px_2px_rgba(255,0,0,0.3)]">
            <video
            autoPlay
            loop
            muted
            className="rounded-2xl lg:rounded-4xl w-full h-full"
            >
            <source src={video2} type="video/mp4" />
            Your browser does not support this feature.
            </video>
        </motion.div>


        {/* <motion.video
          autoPlay
          loop
          muted
          className="rounded-3xl  w-full max-w-md mx-2 my-4"
          style={{ scale }}
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support this feature.
        </motion.video> */}
      </div>
    </div>
  );
};

