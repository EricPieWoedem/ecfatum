import React from 'react';
import './About.css';
// import white_arrow from '../../assets/dark-arrow.png';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import video from '../../assets/aboutvideo.mp4';

const stats = [
  { number: '32', title: 'Years of Experience' },
  { number: '50+', title: 'Projects Completed' },
  { number: '20', title: 'Team Members' },
  { number: '15', title: 'Awards Won' },
];

const About = () => {
  return (
    <div className='about'>
      {/* Left Section - Video */}
      <motion.div 
        className="about-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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

         {/* Stats Card */}
         <motion.div 
          className='stats-card'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {stats.map((stat, index) => (
            <div className='stat-box' key={index}>
              <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: false }}
            
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

      {/* Right Section - Text */}
      <div className="about-right">
        <motion.h3 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          ABOUT ECFATUM LIMITED
        </motion.h3>

        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Building Smart Solutions For Smart Problems
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Ecfatum Limited is a Ghanaian-owned Company incorporated under the Companies 
          Code 1963 (ACT 179) as a Limited Liability company. Ecfatum is a Technology 
          Consultancy company poised to redefine Information Technology in Ghana and 
          other countries in the ECOWAS sub-region.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          We are at the forefront of technological innovation, offering solutions that 
          are not just effective but also future-proof.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <strong>Our Vision</strong> is to be the first-choice, predominant, and most reliable 
          tech solutions provider in Africa.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <strong>Our Mission:</strong> We exist to build smart solutions for smart problems
          </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {/* <Link to="/about"> */}
            <button className='btn'>Learn more</button>
          {/* </Link> */}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
