import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import video from '../../assets/aboutvideo.mp4';

const stats = [
  { number: '32+', title: 'Years of Experience' },
  { number: '15', title: 'Awards Won' },
];

const About = () => {

  return (
  <div id='about' className='relative bg-gradient-to-l from-black via-[#0D0D0D] to-[#141414] flex flex-col items-center justify-center min-h-screen overflow-hidden'>

    <motion.h1 
       initial={{ opacity: 0, y: -10 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
       viewport={{ once: false }}

    className='text-center font-bold text-5xl mt-10 w-fit ' >About Us
    </motion.h1>
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
          className='w-full rounded-3xl my-5' 
          autoPlay 
          loop 
          muted 
          playsInline
        />

         {/* Stats Card */}
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
            className='text-lg text-neutral-300'
              >{stat.title}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Section - Text */}
      <div className="about-right">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false }}
          className='text-2xl'
        >
          ABOUT ECFATUM LIMITED
        </motion.h2>

        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
          className='text-4xl my-6 bg-gradient-to-br from-yellow-500 to-red-700 text-transparent bg-clip-text'
        >
          Building Smart Solutions For Smart Problems
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className='text-lg text-neutral-300'
        >
          Ecfatum Limited is a Ghanaian-owned Company incorporated under the Companies 
          Code 1963 (ACT 179) as a Limited Liability company. Ecfatum is a Technology 
          Consultancy company poised to redefine Information Technology in Ghana and 
          other countries in the ECOWAS sub-region.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false }}
          className='text-lg text-neutral-300'
        >
          We are at the forefront of technological innovation, offering solutions that 
          are not just effective but also future-proof.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <Link to="/about_page">
            <button className='btn text-amber-500 text-lg font-medium cursor-pointer transition-all duration-100 ease-in-out hover:text-amber-700'>Learn more</button>
          </Link>
        </motion.div>
      </div>
    </div>
  </div>
  );
};

export default About;


