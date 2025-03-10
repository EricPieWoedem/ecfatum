import React, { useState, useEffect } from 'react';
import './About_Page.css'
import './About/About.css';
import { easeInOut, easeOut, motion } from 'framer-motion';
import video from '../assets/adobevd2 (2).mov';
import { useNavigate } from "react-router-dom";



const stats = [
  { number: '15+', title: 'Years of Experience' },
  { number: '10', title: 'Awards Won' }
];

const images = [
    `${import.meta.env.BASE_URL}about.jpg`,
    `${import.meta.env.BASE_URL}about2.jpg`,
    `${import.meta.env.BASE_URL}about3.jpg`
  ];

const About_Page = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  return (
    <>
    <section className=" relative about-hero">
    <button
          onClick={() => navigate(-1)}
          className="absolute top-10 left-10 bg-neutral-800 text-amber-500 px-4 py-2 rounded-md cursor-pointer transtion-all duration-100 hover:bg-neutral-900 hover:text-amber-600"
        >
          Back
        </button>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: false, amount: 0.3 }} 
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: false, amount: 0.3 }} 
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='text-7xl font-bold'
                >
                    About Our Company
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: false, amount: 0.3 }} 
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className='about-slogan text-center text-3xl font-medium mt-5'
                >
                    Smart solutions for smart problems.
                </motion.p>

            </motion.div>
    </section>

     <div className='about'>

      <motion.div 
        className="about-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <video 
          src={video} 
          className='about-video' 
          autoPlay 
          loop 
          muted 
          playsInline
        />

         <motion.div 
          className='stats-card'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {stats.map((stat, index) => (
            <div className='stat-box bg-neutral-900 hover:bg-neutral-800' key={index}>
              <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: false }}
              className='w-[80%] text-4xl font-semibold bg-gradient-to-br from-yellow-500 to-red-700 text-transparent bg-clip-text'
            
              >{stat.number}
              </motion.h2>
              <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: false }}
            
              >{stat.title}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="about-right">
        <motion.h3 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false }}
          className='text-3xl'
        >
          ABOUT ECFATUM LIMITED
        </motion.h3>

        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
          className='text-4xl my-6 bg-gradient-to-br from-yellow-500 to-red-700 text-transparent bg-clip-text'
        >
          Building Smart Solutions For Smart Problems
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false }}
          className='text-lg text-neutral-300'
        >
          Ecfatum Limited is a Ghanaian-owned Company incorporated under the Companies Code 1963 (ACT 179) as a Limited Liability company. Ecfatum is a Technology Consultancy company poised to redefine Information Technology in Ghana other countries in the ECOWAS sub-region and subsequently to other African countries. It was established in response to the need for an alternative approach to resolving the complexities and obstacles presented by the ever-increasing disparate types of hardware, data, records, documents, applications, and systems.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false }}
          className='text-lg text-neutral-300'
        >
          
         At Ecfatum, we pride ourselves of a team of Ghanaian IT Professionals who bring a rich blend of local insights and international experience. This unique combination enables us to tailor solutions that are culturally relevant and globally competitive.
        </motion.p>

      </div>
    </div>

    <motion.div 
    className="mission-vission"
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: false, amount: 0.3 }} 
    transition={{ duration: 0.5, ease: "easeInOut" }}

    >
        <motion.div 
        className="profile"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false }}
      
        >
         <div className="slideshow">
         {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`slide-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
        </motion.div>
        <div className="profile-content">
            <div className="vission">
                <motion.h3
                 initial={{ opacity: 0, y: -30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                 viewport={{ once: false }}
                 className='text-2xl font-semibold w-fit bg-gradient-to-br from-yellow-500 to-red-700 text-transparent bg-clip-text'
               >
                    Our Vission
                </motion.h3>
                <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: false }}
                className='text-lg text-neutral-300'
                >
                To be the first-choice, predominant, and most reliable tech solutions provider in Africa
                </motion.p>
            </div> 
            <div className="mission">
                <motion.h3
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: false }}    
                className='text-2xl font-semibold w-fit bg-gradient-to-br from-yellow-500 to-red-700 text-transparent bg-clip-text'  
                >Our Mission
                </motion.h3>
                <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: false }}
                className='text-lg text-neutral-300'
                >
                We exist to build smart solutions for smart problems
                </motion.p>
            </div>
            <div className="objective">
                <motion.h3
                 initial={{ opacity: 0, y: -30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                 viewport={{ once: false }}   
                 className='text-2xl font-semibold w-fit bg-gradient-to-br from-yellow-500 to-red-700 text-transparent bg-clip-text'    
                 >
                Our Objective
                </motion.h3>
                <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: false }}
                className='text-lg text-neutral-300'
                >
                The objective of Ecfatum is to develop, promote and leverage requisite IT expertise and resources for national and sub-regional capacity building. Our interest is the use of IT and best management practices to transform private and public institutions into effective, efficient, and productive entities that form the backbone of our economy.
                </motion.p>
            </div>
        </div>
    </motion.div>

      <motion.div
       className="experience-section"
       initial={{ opacity: 0, y: 50 }} 
       whileInView={{ opacity: 1, y: 0 }} 
       viewport={{ once: false, amount: 0.1 }} 
       transition={{ duration: 1, ease: "easeInOut" }}
       >
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.3 }} 
            transition={{ duration: 1, delay: 0.3 }}
            className='text-3xl mb-3 font-semibold w-fit bg-gradient-to-br from-yellow-500 to-red-700 text-transparent bg-clip-text'
        >
            Our Experience
        </motion.h1>
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.3 }} 
            transition={{ duration: 1, delay: 0.6 }}
            className='summary text-lg text-neutral-300 text-left'
        >
            Ecfatum Limited has been operating outside the country for about 10 years but was 
            incorporated in Ghana in 2015. Our consultants have been providing consulting 
            services for clients for over 20 years throughout Europe, Asia, and America. Our 
            offerings are based on some of the IT industry’s best practices that create business 
            opportunities, facilitate information sharing and knowledge creation, and increase 
            transparency, accountability, and effectiveness of government agencies and private 
            sector businesses. 
        </motion.p>

        <div className="experience-container">
        <motion.div 
        className="experience-slides"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      
        >
        <div className="slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`slide-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
        </motion.div>
        <div className="experience-content mb-10">
            <div className="experience">
                <motion.h3
                 initial={{ opacity: 0, y: -30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                 viewport={{ once: false }}
                 className='text-2xl font-semibold w-fit bg-gradient-to-br from-yellow-500 to-red-700 text-transparent bg-clip-text'
               >
                Experience
                </motion.h3>
                <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}
                className='text-lg text-neutral-300'
                >
                We have experienced personnel with local expertise and 
                worldwide experience. Our staff consists of Ghanaians, some of whom have 
                both local and outside experience. This provides both local expertise and 
                relevant global experience in various aspects of the projects that we 
                undertake.
                </motion.p>
            </div> 
            <div className="commitment">
                <motion.h3
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}  
                className='text-2xl font-semibold w-fit bg-gradient-to-br from-yellow-500 to-red-700 text-transparent bg-clip-text'
                >Commitment to Quality
                </motion.h3>
                <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}
                className='text-lg text-neutral-300'
                >
                We maintain a formal quality program designed 
                to ensure that we provide consistent quality service to our clients. The work 
                we undertake and the deliverables thereof are continuously reviewed to 
                ensure that they meet or exceed our client’s expectations.
                </motion.p>
            </div>
            <div className="training">
                <motion.h3
                 initial={{ opacity: 0, y: -30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                 viewport={{ once: false }}    
                 className='text-2xl font-semibold w-fit bg-gradient-to-br from-yellow-500 to-red-700 text-transparent bg-clip-text'  
                 >
                Strong Focus on Training and Capacity Building
                </motion.h3>
                <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}
                className='text-lg text-neutral-300'
                >
                I believe IT should align with an institution’s mission to enhance knowledge for teachers and students. To maximize its impact and return on investment, I prioritize continuous user training. Skills transfer is central to every solution I propose, with tailored programs for all organizational levels.
                </motion.p>
            </div>
            </div>
        </div>
          

      </motion.div>

    </>
  )
}

export default About_Page
